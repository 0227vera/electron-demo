require("./menu");
import Updater from "./update";
import getRenderUrl from "./mainUrl";
import deviceid from "./utils/deviceid.js";
import handleQuit from "./event/quit";
import handleMessage from "./event/message";
import onCrashed from "./protect/crashed";
import createTray from "./protect/tray";
import autoStart from "./protect/autoStart";
const path = require("path");

const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    transparent: false, // 背景是否透明
    titleBarStyle: "hidden", // 上面导航栏的样式
    frame: false, // 是否需要原用的拖动栏等
    icon: path.join(__dirname, "../base.png"),
  });
  mainWindow.loadURL(getRenderUrl());
  if (process.platform === "win32") {
    mainWindow.on("close", (event) => {
      mainWindow.hide();
      mainWindow.setSkipTaskbar(true);
      event.preventDefault();
    });
  }
  // 给mac设置托盘icon
  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, "../base.png"));
  }
  global.mainId = mainWindow.id;
}

if (process.platform === "win32") {
  const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
  if (shouldQuit) {
    app.quit();
  }
}

const devicePromise = deviceid.get();
app.on("ready", () => {
  devicePromise
    .then(() => Updater.init())
    .then(() => createWindow())
    .then(() => handleMessage())
    .then(() => onCrashed())
    .then(() => handleQuit())
    .then(() => createTray())
    .then(() => {
      if (process.platform === "win32") {
        autoStart();
      }
    });
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
