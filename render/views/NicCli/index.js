import React from 'react'
import {remote} from 'electron'
const { shell } = remote

export default function index() {
  return (
    <div>
      <span>
        随着开发的时间推移，越来越觉得需要形成一套自己的开发习惯，于是根据自己的开发习惯形成了几套模版，集成到相应的脚手架中，在开发中的好处：
      </span>
      <ol>
        <li>形成统一的开发规范，方便日后的维护</li>
        <li>自动化模版，提高开发效率</li>
        <li>开发脚手架，改变自己的开发思想，提炼部分通用的解决方案</li>
        <li>配置初始化相关配置，降低同事之间的开发成本</li>
      </ol>
      <div>
        <span>脚手架地址：</span>
        <a href="https://www.npmjs.com/package/nic-cli" onClick={(e) => {
          e.preventDefault();
          shell.openExternal("https://www.npmjs.com/package/nic-cli");
        }}>https://www.npmjs.com/package/nic-cli</a>
      </div>
    </div>
  )
}
