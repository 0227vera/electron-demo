import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';

const { Header } = Layout;

function HeaderCom(props) {
  return (
    <Header className='header'>
      <div className="header-nav">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/Home">nic-cli-test</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>{props.currentNav}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      
    </Header>
  )
}

export default HeaderCom
