import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Main from '../pages/Main'

const AppRouter = () => {
  const isAuth = true
  return (
    <Routes>
      {isAuth
        ? authRoutes.map(({ path, components }) => (
            <Route key={path} path={path} element={components()} />
          ))
        : publicRoutes.map(({ path, components }) => (
            <Route key={path} path={path} element={components()} />
          ))}
      <Route path="*" element={<Main />} />
    </Routes>
  )
}

export default AppRouter
