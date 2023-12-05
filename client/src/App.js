import { useEffect, useState } from 'react'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { check } from './http/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setUser } from './store/userSlice'
import { Spinner } from 'react-bootstrap'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(setUser(true))
        dispatch(setIsAuth(true))
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  )
}

export default App
