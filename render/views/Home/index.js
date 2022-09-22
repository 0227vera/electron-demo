import React from 'react'
import Card from './Card.js'
import './index.less'


const template = [
  {
    title: 'BLOG',
    href: '/Blog',
    
    desc: '个人技术博客',
    key: '1',
  },
  {
    
    title: 'NIC-CLI',
    desc: '自主开发的脚手架',
    href: '/NicCli',
    
    key: '2',
  },
  {
    title: 'ELECTRON',
    desc: '系统方法',
    
    key: '3',
    href: '/Electron'
  },
  {
    title: '组件库',
    desc: '第三方库',
    key: '4',
    
    href: '/ComponentLib'
  },
  {
    title: 'nodeJS',
    desc: 'nodeJS相关知识',
    key: '6',
    
    href: '/NodeJS'
  },
  {
    title: 'React Native',
    desc: 'RN处理移动端跨端的问题',
    key: '7',
    
    href: '/ReactNative'
  },
  {
    title: 'Interface',
    desc: '接口文档',
    key: '8',
    
    href: '/Interface'
  }
]

export default function index() {
  return (
    <div className="Home">
      {
        template.map((item, index) => <Card {...item} index={index} />)
      }
    </div>
  )
}
