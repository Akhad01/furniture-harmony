import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FURNITURE_ROUTE } from '../utils/consts'

const FurnitureItem = ({ furniture }) => {
  const navigate = useNavigate()
  return (
    <Col onClick={() => navigate(FURNITURE_ROUTE + '/' + furniture.id)}>
      <Card style={{ cursor: 'pointer', border: 'light' }}>
        <Card.Img src={process.env.REACT_APP_API_URL + furniture.img} />
        <Card.Body style={{ padding: 15 }}>
          <Card.Title>{furniture.name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div>RATING</div>
            <div>{furniture.rating}/10</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default FurnitureItem
