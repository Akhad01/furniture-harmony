import React from 'react'
import { Badge, Col, Container, Image, Row } from 'react-bootstrap'

const FurniturePage = () => {
  const furniture = {
    id: 6,
    name: 'Стол',
    price: 300,
    rating: 3,
    img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
  }
  const description = [
    {
      id: 1,
      title: 'sadsdsad',
      description:
        'dasdsadsadsd sadsaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaadsdsad',
    },
    {
      id: 2,
      title: 'sadsdsad',
      description: 'dasdsadsadsdsadsdsad',
    },
    {
      id: 3,
      title: 'sadsdsad',
      description: 'dasdsadsadsdsadsdsad',
    },
    {
      id: 4,
      title: 'sadsdsad',
      description: 'dasdsadsadsdsadsdsad',
    },
    {
      id: 5,
      title: 'sadsdsad',
      description: 'dasdsadsadsdsadsdsad',
    },
  ]
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
            {description.map((des) => (
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
              src={furniture.img}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FurniturePage
