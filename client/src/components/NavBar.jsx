import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'
import Button from 'react-bootstrap/Button'
import { setIsAuth, setUser, userLoggedOut } from '../store/userSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.user.isAuth)
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(userLoggedOut())
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>
          Furniture-Harmony
        </NavLink>
        {isAuth ? (
          <Nav className="ml-auto" style={{ color: 'while' }}>
            <Button
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant="info"
              style={{ marginLeft: 10 }}
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'while' }}>
            <Button variant="outline-danger" style={{ marginRight: 10 }}>
              Админ панель
            </Button>
            <Button
              variant="outline-info"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default NavBar
