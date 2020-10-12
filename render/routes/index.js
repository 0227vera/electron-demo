import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '$views/Home';
import Antd from '$views/Antd';
import Protect from '$views/Protect';
import Window from '$views/Window';
import Dialog from '$views/Dialog';
import System from '$views/System';
import Print from '$views/Print';
import Shell from '$views/Shell';
import MenuView from '$views/MenuView';
import IPC from '$views/IPC';
import Blog from '$views/Blog';
import NicCli from '$views/NicCli';

export const routers = [
  {
    path: '/Home',
    component: Home,
    title: '主页',
    key: 'Home',
    exact: true,
  },
  {
    path: '/Protect',
    component: Protect,
    title: '保护措施',
    key: 'Protect',
    exact: true,
  },
  {
    path: '/Antd',
    component: Antd,
    title: 'Antd',
    key: 'Antd',
    exact: true,
  },
  {
    path: '/Window',
    component: Window,
    title: '窗口',
    key: 'Window',
    exact: true,
  },
  {
    path: '/Dialog',
    component: Dialog,
    title: 'Dialog',
    key: 'Dialog',
    exact: true,
  },
  {
    path: '/System',
    component: System,
    title: '系统',
    key: 'System',
    exact: true,
    needHeader: true,
  },
  {
    path: '/Print',
    component: Print,
    title: '打印',
    key: 'Print',
    exact: true,
  },
  {
    path: '/Shell',
    component: Shell,
    title: 'Shell',
    key: 'Shell',
    exact: true,
  },
  {
    path: '/MenuView',
    component: MenuView,
    title: '菜单',
    key: 'MenuView',
    exact: true,
  },
  {
    path: '/IPC',
    component: IPC,
    title: '进程通信',
    key: 'IPC',
    exact: true
  },
  {
    path: '/Blog',
    component: Blog,
    title: 'Blog',
    key: 'Blog',
    exact: true,
    ishideheader: true
  },
  {
    path: '/NicCli',
    component: NicCli,
    title: 'NicCli',
    key: 'NicCli',
    exact: true,
  },
]

export default class RouteContent extends Component {
  render() {
    return (
      <Switch>
        {
          routers.map(item => <Route {...item}/>)
        }
        <Redirect path="/" to={{ pathname: '/Home' }} />
      </Switch>
    );
  }
}
