import React, { useState, ReactNode } from 'react'

import { AutoComplete, Input, Button, Badge } from 'antd'
import {
  SyncOutlined, UserOutlined,
  PayCircleOutlined, DownloadOutlined, ThunderboltOutlined, FormatPainterOutlined,
  BellOutlined, MessageOutlined, PlusSquareOutlined
} from '@ant-design/icons'
import '../style/header.scss'
import AppLabel from '@/components/app/label'

const renderTitle = (label: string, iconName?:string, icon?: ReactNode) => {
  return (
    <div className='title-bar'>
      <div>{ label }</div>
      <a>
        <span>{icon}</span>
        <span>{iconName}</span>
      </a>
    </div>
  )
}
const renderItem = (label: string, icon?: ReactNode) => ({
  label,
  key: label,
  value:
    <span className='content-list-bar'>
      {
        icon && <span>{icon}</span>
      }
    </span>
})
interface optionsType {
  label?: string,
  options?: { label: string; key: string; value: Element; }[]
}
const searchResult = (query: string): optionsType[] => {
  const searchData = [
    { label: '张三' }, { label: '李四' }, { label: '王五' },
    { label: '张四' }, { label: '李五' }, { label: '王六' }
  ]
  return searchData.filter(f=>f.label.includes(query))
}
const renderNavRight = () => {
  const navList = [
    { label: '充钻石', icon: <PayCircleOutlined />, show: false }, 
    { label: '客户端', icon: <DownloadOutlined />, show: false }, 
    { label: '快捷访问', icon: <ThunderboltOutlined />, show: false }, 
    { label: '壁纸', icon: <FormatPainterOutlined />, show: false }, 
    { label: '通知', icon: <BellOutlined />, show: false }, 
    { label: '私信', icon: <MessageOutlined />, show: false }, 
    { label: '投稿', icon: <PlusSquareOutlined />, show: true }, 
  ]
  return navList.map(m => {
    return (
      <Badge className='badge-bar' dot={m.show}>
        <AppLabel size={12} direction="column" key={m.label} icon={m.icon}>
          {m.label}
        </AppLabel>
      </Badge>
    )
  })
}
const Header: React.FC = () => {
  const initOptions = [
    {
      label: renderTitle('猜你想搜', '换一换', <SyncOutlined />),
      options: [
        renderItem('测试1'), renderItem('测试2'), renderItem('测试3')
      ]
    },
    {
      label: renderTitle('抖音热点'),
      options: [
        renderItem('测试5'),renderItem('测试6'),renderItem('测试8')
      ]
    }
  ]
  const [options, setOptions] = useState([{}])
  const [searchValue, setSearchValue] = useState('')
  const onSearch = (value: string) => {
    setSearchValue(value)
    setOptions(value ? searchResult(value) : initOptions)
  }
  const onInput = () => {
    setOptions(searchValue ? searchResult(searchValue) : initOptions)
  }
  return (
    <>
      <div className="header-page">
        <div className="search-bar">
          <AutoComplete options={options} onSearch={onSearch}>
            <Input.Search defaultValue={searchValue} placeholder='搜索你感兴趣的内容' onClick={onInput} />
          </AutoComplete>
        </div>
        <div className="nav-right-bar">
          {renderNavRight()}
          <Button type="primary" icon={<UserOutlined />} danger>登录</Button>
        </div>
      </div>
    </>
  )
}
export default Header