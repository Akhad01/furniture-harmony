import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneFurniture } from '../http/furnitureApi'

const FurniturePage = () => {
  const { id } = useParams()
  const [furniture, setFurniture] = useState({ info: [] })

  console.log(id)

  useEffect(() => {
    fetchOneFurniture(id).then((data) => setFurniture(data))
  }, [])

  return (
    <Container className="mt-3">
      <Row className="d-flex align-items-center">
        <Col style={{ padding: 80 }}>
          <h1 style={{ fontSize: 60 }} className="mb-3 text-dark">
            {furniture.name}
          </h1>
          <Badge style={{ fontSize: 20 }} className="primary p-3 mb-3">
            {furniture.price}$
          </Badge>
          <p style={{ fontSize: 25 }}>
            <span className="text-secondary">RATING:</span> {furniture.rating}
            /10
          </p>
          <div className="d-flex flex-column mt-3">
            <h2>Характеристики</h2>
            {furniture.info.map((des) => (
              <Row key={des.id}>
                <div>
                  <span className="fw-bolder">{des.title}:</span>{' '}
                  {des.description}
                </div>
              </Row>
            ))}
          </div>
        </Col>
        <Col md={4}>
          <div>
            <Image
              style={{ width: '100%', height: '100%' }}
              src={process.env.REACT_APP_API_URL + furniture.img}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FurniturePage
