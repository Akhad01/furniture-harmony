import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setBrandVisible(true)}
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
        onClick={() => setDeviceVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить устройство
      </Button>
      <CreateType onHide={() => setTypeVisible(false)} show={typeVisible} />
      <CreateBrand onHide={() => setBrandVisible(false)} show={brandVisible} />
      <CreateDevice
        onHide={() => setDeviceVisible(false)}
        show={deviceVisible}
      />
    </Container>
  )
}

export default Admin
