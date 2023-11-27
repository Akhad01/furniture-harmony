import React, { useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const CreateDevice = ({ show, onHide }) => {
  const types = useSelector((store) => store.furniture.types)
  const brands = useSelector((store) => store.furniture.brands)

  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number))
  }
  console.log(brands)
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            className="mt-3"
            type="number"
            placeholder="Введите стоимость устройства"
          />
          <Form.Control className="mt-3" type="file" />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
                  f
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outlibe-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outlibe-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
