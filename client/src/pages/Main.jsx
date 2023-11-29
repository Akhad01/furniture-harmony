import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import FurnitureList from '../components/FurnitureList'
import { useDispatch } from 'react-redux'
import { fetchBrands, fetchFurnitures, fetchTypes } from '../http/furnitureApi'
import { setBrands, setFurnitures, setTypes } from '../store/furnitureSlice'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)))
    fetchBrands().then((data) => dispatch(setBrands(data)))
    fetchFurnitures().then((data) => dispatch(setFurnitures(data.rows)))
  }, [])

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
