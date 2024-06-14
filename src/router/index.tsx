import { createBrowserRouter, Navigate } from 'react-router-dom'
import LayoutDefault from '@/layout/default'
import HomeIndex from '@/pages/home/index'

export const router_item: Array<object> = [
  { path: "/", label: "首页", element: <Navigate to="/home" /> },
  {
    path: '/home',
    label: '首页',
    element: <LayoutDefault />,
    children: [
      {
        path: '/home',
        label: '首页',
        element: <HomeIndex />
      }
    ]
  }
]
const router = createBrowserRouter(router_item)
export default router