import React from 'react'
import Card from './Card.js'
import './index.less'
import kobe from './assets/kobe.jpg'


const template = [
  {
    title: 'BLOG',
    href: '/Blog',
    img: kobe,
    desc: '个人技术博客：主要记录一些平常开发中的一些记录',
    key: '1',
  },
  {
    
    title: 'NIC-CLI',
    desc: '自主开发的脚手架：根据平常的开发，生成了一套适合自己的开发模版',
    href: '/NicCli',
    img: kobe,
    key: '2',
  },
  {
    title: 'ELECTRON',
    desc: '记录一些electron中最简单的一些方法，也是在开发中可能遇到需要使用的方法',
    img: kobe,
    key: '3',
    href: '/Electron'
  },
  {
    title: '组件库',
    desc: '收集了一些平常开发起来好用的组件库，以及好用的第三方库',
    key: '4',
    img: kobe,
    href: '/ComponentLib'
  },
  {
    title: 'nodeJS',
    desc: 'nodeJS相关知识',
    key: '6',
    img: kobe,
    href: '/NodeJS'
  },
  {
    title: 'React Native',
    desc: 'RN处理移动端跨端的问题',
    key: '7',
    img: kobe,
    href: '/ReactNative'
  },
  {
    title: 'Interface',
    desc: '接口文档',
    key: '8',
    img: kobe,
    href: '/Interface'
  }
]

export default function index() {
  return (
    <div className="Home">
      {
        template.map(item => <Card {...item} />)
      }
    </div>
  )
}
