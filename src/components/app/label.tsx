import React, { memo, ReactNode } from 'react'

import { TikTokOutlined } from '@ant-design/icons'
import './label.scss'
interface Props {
  size?: number;
  icon?: ReactNode;
  children?: ReactNode;
  direction?: string
}
const AppLabel: React.FC<Props> = memo((props) => {
  return (
    <>
      <div className="app-label-page" style={{ fontSize: `${props.size}px`, flexDirection: `${props.direction||'row'}`}}>
        {props.icon || <TikTokOutlined />}
        <div>{props.children}</div>
      </div>
    </>
  )
})
export default AppLabel