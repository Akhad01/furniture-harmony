import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { useLocation } from 'react-router-dom'

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h1 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
        <Form className="d-flex flex-column">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="mt-2" placeholder="Введите ваш email..." />
          </Form.Group>
          <Form.Group
            className="mb-4 has-validation input-group"
            controlId="formBasicPassword"
          >
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Введите ваш пароль..."
            />
            <Button type="button" onClick={toggleShowPassword}>
              <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
            </Button>
          </Form.Group>
          <Button className="mb-3" variant="primary">
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
