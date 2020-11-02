import React from 'react'
import './MainLayout.css'
import { Sidebar } from '../components/main/Sidebar'

export const MainLayout = ({ children }) => {

  return (
    <div className='main-layout'>
      <div className='main-layout-sidebar'>
        <Sidebar />
      </div>

      <div className='main-layout-content'>
        <div className='main-layout-content-wrapper'>
          {children}
        </div>
      </div>
    </div>
  )
}
