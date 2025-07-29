import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <h1>Main Layout <Outlet /></h1>
    </div>
  )
}

export default MainLayout