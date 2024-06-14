import React, { useState } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import {
  HomeOutlined, StarOutlined, TeamOutlined, UserOutlined, UserAddOutlined,
  OneToOneOutlined, VideoCameraOutlined, ReadOutlined, LaptopOutlined, DingtalkOutlined, CoffeeOutlined, CustomerServiceOutlined,
  SettingOutlined, ProductOutlined
} from '@ant-design/icons'
import AppLabel from '@/components/app/label'
type MenuItem = Required<MenuProps>['items'][number]
import '../style/side.scss'
interface Props {
  items?: MenuItem[],
  selectKeys?: string[],
}

const menuItemsFirst: MenuItem[] = [
  { key: '1', icon: <HomeOutlined />, label: '首页' },
  { key: '2', icon: <StarOutlined />, label: '推荐' },
  { key: '3', icon: <UserAddOutlined />, label: '关注' },
  { key: '4', icon: <TeamOutlined />, label: '朋友' },
  { key: '5', icon: <UserOutlined />, label: '我的' },
]
const menuItemsSeconde: MenuItem[] = [
  { key: '6', icon: <OneToOneOutlined />, label: '直播' },
  { key: '7', icon: <VideoCameraOutlined />, label: '放映厅' },
  { key: '8', icon: <ReadOutlined />, label: '知识' },
  { key: '9', icon: <LaptopOutlined />, label: '游戏' },
  { key: '10', icon: <DingtalkOutlined />, label: '二次元' },
  { key: '11', icon: <CustomerServiceOutlined />, label: '音乐' },
  { key: '12', icon: <CoffeeOutlined />, label: '美食' },
]
const menuItemsFooter: MenuItem[] = [
  { key: '13', icon: <SettingOutlined />, label: '设置' },
  { key: '14', icon: <ProductOutlined />, label: '业务合作' },
]
const Side: React.FC<Props> = () => {
  const [selectKeys, setSelectKeys] = useState(['2'])
  const onselect: MenuProps['onClick']= (item) => {
    const { keyPath } = item
    setSelectKeys(keyPath)
  }
  return (
    <>
      <div className='side-page'>
        <div className='content-bar'>
          <AppLabel size={32}>抖音</AppLabel>
          <Menu
            onClick={onselect}
            selectedKeys={selectKeys}
            mode='inline'
            theme='dark'
            items={menuItemsFirst}
          />
          <Menu
            onClick={onselect}
            selectedKeys={selectKeys}
            mode='inline'
            theme='dark'
            items={menuItemsSeconde}
          />
        </div>

        <Menu
          onClick={onselect}
          selectedKeys={selectKeys}
          mode='inline'
          theme='dark'
          items={menuItemsFooter}
        />
      </div>
    </>
  )
}
export default Side