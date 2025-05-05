import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsBasket } from 'react-icons/bs';

import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  BASKET_ROUTE,
} from '../utils/consts';
import { userLoggedOut } from '../store/userSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container className='justify-content-between'>
        <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>
          Furniture-Harmony
        </NavLink>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse
          className='flex-grow-0'
          style={{ flexGrow: 0 }}
          id='navbarScroll'
        >
          {isAuth ? (
            <Nav
              style={{
                color: 'while',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              navbarScroll
            >
              {isAuth && (
                <>
                  <BsBasket
                    onClick={() => navigate(BASKET_ROUTE)}
                    size={25}
                    color='white'
                  />
                  <Button
                    className='m-2'
                    variant='outline-light'
                    onClick={() => navigate(ADMIN_ROUTE)}
                  >
                    Админ панель
                  </Button>
                </>
              )}
              <Button
                className='m-2'
                variant='info'
                style={{ marginLeft: 10 }}
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className='ml-auto' style={{ color: 'while' }}>
              {isAuth && (
                <Button
                  className='m-2'
                  variant='outline-danger'
                  style={{ marginRight: 10 }}
                >
                  Админ панель
                </Button>
              )}
              <Button
                className='m-2'
                variant='outline-info'
                onClick={() => navigate(LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
              <i class='bi bi-basket'></i>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
