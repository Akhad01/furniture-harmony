import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import FurniturePage from './pages/FurniturePage'
import Main from './pages/Main'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  FURNITURE_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    components: Admin,
  },
  {
    path: BASKET_ROUTE,
    components: Basket,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    components: Main,
  },
  {
    path: LOGIN_ROUTE,
    components: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    components: Auth,
  },
  {
    path: FURNITURE_ROUTE + '/:id',
    components: FurniturePage,
  },
]
