import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import 'antd/dist/antd.css'

import { api } from './api'
import RouterView, { routes } from './router'
import './App.scss'

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const res2 = await api.getQuestionSheet(1)
      console.log(res2)
    })()
    console.log(RouterView)
  }, [])


  return (
    <div className="App">
      <Menu mode="horizontal">
        {routes.map((v) => (
          <Menu.Item key={`menu-${v.name}`}>
            <Link to={v.path}>{v.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <RouterView />
    </div>
  )
}

export default App
