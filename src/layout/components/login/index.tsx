import React, { useState } from 'react'
import { HeartOutlined, VideoCameraOutlined, TeamOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import './index.scss'
import Password from './password'
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '扫码登录',
    key: 'mail',
  },
  {
    label: '验证码登录',
    key: 'app',
  },
  {
    label: '账密登录',
    key: 'SubMenu',
  }
]
const LoginIndex: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <div className="login-index-page">
        <h3>登录后免费畅享高清视频</h3>
        <span className="note-bar">
          <span><HeartOutlined />点赞评论随心发</span>
          <span><VideoCameraOutlined />直播间畅聊打赏</span>
          <span><TeamOutlined />朋友视频一键览</span>
        </span>
        <div className="login-type-bar">
          <Menu className='menu-bar' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          <Password></Password>
        </div>
      </div>
    </>
  )
}

export default LoginIndex