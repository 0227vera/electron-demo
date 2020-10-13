import React from 'react'
import { Menu } from 'antd';
import './index.less'

const { Item } = Menu

const options = [
  {
    key: '1',
    src: 'https://element.eleme.cn/#/zh-CN/component/installation',
    text: 'element-ui'
  },
  {
    key: '2',
    src: 'https://youzan.github.io/vant/#/zh-CN/',
    text: 'vant'
  },
  {
    key: '3',
    src: 'https://ant.design/components/overview-cn/',
    text: 'antd'
  },
  {
    key: '4',
    src: 'https://mobile.ant.design/docs/react/introduce-cn',
    text: 'antd-mobile'
  },
  {
    key: '5',
    src: 'https://cn.vuejs.org/v2/guide/',
    text: 'vue文档'
  },
  {
    key: '6',
    src: 'https://react.docschina.org/docs/getting-started.html',
    text: 'react文档'
  },
  {
    key: '7',
    src: 'https://nodejs.org/en/',
    text: 'nodeJS'
  }
]

export default function index() {
  const [currentSrc, setCurrentSrc] = React.useState(options[0].src)
  const [current, setCurrent] = React.useState(options[0].key)
  return (
    <div className="ComponentLib" >
      <Menu mode="horizontal" selectedKeys={[current]} onClick={(e) => {
        console.log(e.key)
        const key = e.key
        setCurrent(key)
        console.log(e.key)
        setCurrentSrc(options.find(item => item.key === key).src)
      }}>
        {
          options.map(item => <Item key={item.key}>{item.text}</Item>)
        }
      </Menu>
      <iframe src={currentSrc} ></iframe>
    </div>
    
  )
}
