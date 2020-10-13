import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '$views/Home';
import Electron from '$views/Electron';
import Blog from '$views/Blog';
import NicCli from '$views/NicCli';
import ComponentLib from '$views/ComponentLib';
import GIT from '$views/GIT';
import NodeJS from '$views/NodeJS';
import ReactNative from '$views/ReactNative';
import Interface from '$views/Interface';

export const routers = [
  {
    path: '/Home',
    component: Home,
    title: 'Home',
    key: 'Home',
    exact: true,
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
  {
    path: '/Electron',
    component: Electron,
    title: 'Electron',
    key: 'Electron',
    exact: true,
  },
  {
    path: '/ComponentLib',
    component: ComponentLib,
    title: 'ComponentLib',
    key: 'ComponentLib',
    exact: true,
  },
  {
    path: '/GIT',
    component: GIT,
    title: 'GIT',
    key: 'GIT',
    exact: true,
  },
  {
    path: '/NodeJS',
    component: NodeJS,
    title: 'NodeJS',
    key: 'NodeJS',
    exact: true,
  },
  {
    path: '/ReactNative',
    component: ReactNative,
    title: 'ReactNative',
    key: 'ReactNative',
    exact: true,
  },
  {
    path: '/Interface',
    component: Interface,
    title: 'Interface',
    key: 'Interface',
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
