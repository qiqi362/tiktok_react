import React from 'react'
import Side from './components/side'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import './style/default.scss'

const LayoutDefault: React.FC = () => {
  return (
    <>
      <div className="layout-default-page">
        <div className="side-bar">
          <Side />
        </div>
        <div className="content-bar">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutDefault