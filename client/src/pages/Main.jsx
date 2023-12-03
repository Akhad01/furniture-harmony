import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import FurnitureList from '../components/FurnitureList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFurnitures } from '../store/furnitureSlice'
import Pages from '../components/Pages'
import { fetchTypes } from '../store/typeSlice'
import { fetchBrands } from '../store/brandSlice'

const Main = () => {
  const dispatch = useDispatch()
  const page = useSelector((store) => store.furniture.page)
  const selectedType = useSelector((store) => store.furniture.selectedType)
  const selectedBrand = useSelector((store) => store.furniture.selectedBrand)

  useEffect(() => {
    dispatch(fetchTypes())
    dispatch(fetchBrands())
    dispatch(
      fetchFurnitures({
        typeId: selectedType.id,
        brandId: selectedBrand.id,
        page: page,
        limit: 3,
      })
    )
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
