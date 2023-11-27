import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control placeholder={'Введите название типа'} />
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

export default CreateBrand
