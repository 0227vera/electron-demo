import React, { Component } from "react";
import { Menu } from "antd";
import { AlignRightOutlined,AlignLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "$public/image/icon.png";
import "./index.less";
import { routers } from "../../routes";
// import Home from './icon/Home.svg'
// import Home from './icon/Home.svg'
// import Home from './icon/Home.svg'
// import Home from './icon/Home.svg'
// import Home from './icon/Home.svg'

const { Item } = Menu;

class Nav extends Component {
  constructor(props) {
    console.log('-------__>', require(`./icon/Home.svg`))
    super(props);
    const hash = location.hash.split("/")[1] || "Home";
    this.state = { current: hash, isFold: false };
    this.props.onChangeRoute(routers.find((item) => item.key === hash));
  }
  componentDidMount() {
    window.addEventListener("hashchange", (e) => {
      const hash = location.hash.split("/")[1];
      this.props.onChangeRoute(routers.find((item) => item.key === hash));
      this.setState({
        current: hash || "Home",
      });
    });
  }
  handleClick = (e) => {
    this.props.onChangeRoute(e.item.props);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const {isFold} = this.state
    return (
      <div className={isFold ? 'foldNav nav': 'nav'}>
        <div className="iconContainer">
          <Link to="/Home">
            <img src={icon} className="icon" />
          </Link>
          <span className="titleText">{ isFold ? 'nic':'nic-cli-test'}</span>
          <i onClick={() => {
            this.setState({
              isFold: !isFold
            })
          }}>
            {isFold ? <AlignLeftOutlined /> : <AlignRightOutlined />}
          </i>
        </div>
        <Menu
          defaultSelectedKeys={[this.state.current]}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          selectedKeys={[this.state.current]}
          onClick={this.handleClick}
          className="navContent"
        >
          {routers.map((item) => (
            <Item {...item}>
              <Link to={item.path}>
                <img src={require(`./icon/${item.key}.svg`)} />
                <span>{item.title}</span>
              </Link>
            </Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default Nav;
