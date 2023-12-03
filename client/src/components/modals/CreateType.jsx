import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, Button } from 'react-bootstrap'
import { createType } from '../../store/typeSlice'
import { useDispatch } from 'react-redux'

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const addType = () => {
    dispatch(createType({ name: value, setValue, onHide }))
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={'Введите название типа'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
