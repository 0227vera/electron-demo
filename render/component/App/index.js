import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from '../Header';
import Nav from '../Nav';
import RouteContent from '$routes/index';
import './index.less';
var { ipcRenderer } = require('electron');


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHeader: true,
      currentNav: ''
    }
  }
  componentDidMount() {
    ipcRenderer.send('window-inited', {
      userAgent: navigator.userAgent,
    });
  }
  onChangeRoute = (item) => {
    this.setState({
      showHeader: !item.ishideheader,
      currentNav: item.title
    })
  }
  render() {
    const {showHeader, currentNav} = this.state
    return (
      <LocaleProvider locale={zhCN}>
        <Layout className="container">
          <Nav onChangeRoute={this.onChangeRoute} />
          <Layout className="bodyContainer">
            {showHeader && <Header currentNav={currentNav} />}
            <div className={`${showHeader ? "ContainerContent" : 'fixedContainerContent'}`}>
              <div className="hasHeaderContent">
                <RouteContent/>
              </div>
            </div>
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}
