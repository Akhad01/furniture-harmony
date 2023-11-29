import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Form, Card, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'
import { setIsAuth, setUser } from '../store/userSlice'

const Auth = () => {
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  const isLogin = location.pathname === LOGIN_ROUTE

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      console.log('data: ', data)
      dispatch(setUser(data))
      dispatch(setIsAuth(true))
      navigate(MAIN_ROUTE)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  console.log('aasd')

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h1 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
        <Form className="d-flex flex-column">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2"
              placeholder="Введите ваш email..."
            />
          </Form.Group>
          <Form.Group
            className="mb-4 has-validation input-group"
            controlId="formBasicPassword"
          >
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Введите ваш пароль..."
            />
            <Button type="button" onClick={toggleShowPassword}>
              <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
            </Button>
          </Form.Group>
          <Button onClick={click} className="mb-3" variant="primary">
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
          {isLogin ? (
            <div>
              Нет аккаунта?{' '}
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
            </div>
          ) : (
            <div>
              Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
