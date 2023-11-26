import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import FurnitureList from '../components/FurnitureList'

const Main = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <FurnitureList />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
