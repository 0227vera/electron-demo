import React from 'react'
import { Collapse } from 'antd';
import Window from '$views/Electron/components/Window';
import Dialog from '$views/Electron/components/Dialog';
import System from '$views/Electron/components/System';
import Print from '$views/Electron/components/Print';
import Shell from '$views/Electron/components/Shell';
import MenuView from '$views/Electron/components/MenuView';
import IPC from '$views/Electron/components/IPC';
import Protect from '$views/Electron/components/Protect';
import './index.less'

const { Panel } = Collapse;

export default function index() {
  return (
    <div className="electron">
      <Collapse defaultActiveKey={['1']}>
        <Panel header="窗口" key="1">
         <Window />
        </Panel>
        <Panel header="弹窗" key="2">
          <Dialog />
        </Panel>
        <Panel header="系统" key="3">
          <System />
        </Panel>
        <Panel header="打印" key="4">
          <Print />
        </Panel>
        <Panel header="Shell" key="5">
          <Shell />
        </Panel>
        <Panel header="菜单" key="6">
          <MenuView />
        </Panel>
        <Panel header="进程通信" key="7">
          <IPC />
        </Panel>
        <Panel header="保护措施" key="8">
          <Protect />
        </Panel>
      </Collapse>
    </div>
  )
}
