import React, { useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  setBrands,
  setSelectedBrand,
  setSelectedType,
  setTypes,
} from '../../store/furnitureSlice'
import {
  createFurniture,
  fetchBrands,
  fetchTypes,
} from '../../http/furnitureApi'

const CreateFurniture = ({ show, onHide }) => {
  const dispatch = useDispatch()
  const types = useSelector((store) => store.furniture.types)
  const brands = useSelector((store) => store.furniture.brands)

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)))
    fetchBrands().then((data) => dispatch(setBrands(data)))
  }, [])

  const selectedType = useSelector((store) => store.furniture.selectedType)
  const selectedBrand = useSelector((store) => store.furniture.selectedBrand)

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)))
  }

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  const addFurniture = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', selectedBrand.id)
    formData.append('typeId', selectedType.id)
    formData.append('info', JSON.stringify(info))
    createFurniture(formData).then((data) => onHide())
  }

  console.log('info', info)

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
            <Dropdown.Toggle>
              {selectedType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item
                  onClick={() => dispatch(setSelectedType(type))}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {selectedBrand.name || 'Выберите бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => dispatch(setSelectedBrand(brand))}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            onChange={(e) => setName(e.target.value)}
            name={name}
            placeholder="Введите название устройства"
          />
          <Form.Control
            className="mt-3"
            onChange={(e) => setPrice(Number(e.target.value))}
            name={price}
            type="number"
            placeholder="Введите стоимость устройства"
          />
          <Form.Control className="mt-3" onChange={selectFile} type="file" />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo('title', e.target.value, i.number)
                  }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo('description', e.target.value, i.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
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
        <Button variant="outlibe-success" onClick={addFurniture}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateFurniture
