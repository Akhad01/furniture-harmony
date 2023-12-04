import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateFurniture from '../components/modals/CreateFurniture'
import { useNavigate } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/consts'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [furnitureVisible, setFurnitureVisible] = useState(false)
  const navigate = useNavigate()

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить тип
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить бренд
      </Button>
      <Button
        onClick={() => setFurnitureVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить мебель
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateFurniture
        show={furnitureVisible}
        onHide={() => setFurnitureVisible(false)}
      />
      <Button className="mt-4" onClick={() => navigate(MAIN_ROUTE)}>
        Назад
      </Button>
    </Container>
  )
}

export default Admin
