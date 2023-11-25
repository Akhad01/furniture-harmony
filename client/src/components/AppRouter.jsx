import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Main from '../pages/Main'
import { useSelector } from 'react-redux'

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
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
