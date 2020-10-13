import React from 'react'
import {Table} from 'antd'
import './index.less'

export default function index() {
  const dataSource = [
    {
      key: '1',
      name: 'vue',
      lang: 'js/ts',
      solution: 'weex（不太好的解决方案，直接没用）',
      mobile: 'vux/vant',
      web: 'element',
      company: '尤大 + 阿里',
      note: '渐进式框架，双向绑定，用起来还是很舒服的，组件库web主要使用element，移动端主要是vant，移动端组件库用起来很舒服'
    },
    {
      key: '2',
      name: 'react',
      lang: 'js/ts',
      solution: 'react natice（有一些成熟的按钮）',
      mobile: 'antd-mobile',
      web: 'antd',
      company: 'Facebook',
      note: '组件为王，严格的单项数据流，hooks香，移动端组件非常难用，基本不用，主要靠自己写'
    },
    {
      key: '3',
      name: 'angular',
      lang: 'ts',
      solution: 'fluter',
      mobile: '',
      web: '',
      company: 'Google',
      note: '没用过，没有资格评价'
    },
   
  ];
  
  const columns = [
    {
      title: '框架',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '语言要求',
      dataIndex: 'lang',
      key: 'lang',
    },
    {
      title: '移动端解决方案',
      dataIndex: 'solution',
      key: 'solution',
    },
    {
      title: '移动端组件库',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'web端组件库',
      dataIndex: 'web',
      key: 'web',
    },
    {
      title: '背后的公司/支持团队',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: '个人评价',
      dataIndex: 'note',
      key: 'note',
      width: '20%',
    },
  ];
  return (
    <div className="reactnative">
      <b>在了解react之前，了解一些，vue，react，angular在移动端的解决方案</b>
      <Table dataSource={dataSource} columns={columns} align="center" pagination={false} />
      <b>
        备注：目前暂时没时间学习RN，之后会找时间学习输出demo，并添加到blog相关使用资料，在脚手架中添加模版
      </b>
    </div>
  )
}
