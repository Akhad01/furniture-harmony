import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import FurnitureList from '../components/FurnitureList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrands, fetchFurnitures, fetchTypes } from '../http/furnitureApi'
import {
  setBrands,
  setFurnitures,
  setTotalCount,
  setTypes,
} from '../store/furnitureSlice'
import Pages from '../components/Pages'

const Main = () => {
  const dispatch = useDispatch()
  const page = useSelector((store) => store.furniture.page)
  const selectedType = useSelector((store) => store.furniture.selectedType)
  const selectedBrand = useSelector((store) => store.furniture.selectedBrand)

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)))
    fetchBrands().then((data) => dispatch(setBrands(data)))
    fetchFurnitures(null, null, 1, 2).then((data) => {
      dispatch(setFurnitures(data.rows))
      dispatch(setTotalCount(data.count))
    })
  }, [])

  useEffect(() => {
    fetchFurnitures(selectedType.id, selectedBrand.id, page, 3).then((data) => {
      dispatch(setFurnitures(data.rows))
      dispatch(setTotalCount(data.count))
    })
  }, [page, selectedType, selectedBrand, dispatch])

  return (
    <Container>
      <div className="position-relative">
        <Row className="mt-2">
          <Col md={3}>
            <TypeBar />
          </Col>
          <Col md={9}>
            <BrandBar />
            <FurnitureList />
          </Col>
          <Pages />
        </Row>
      </div>
    </Container>
  )
}

export default Main
