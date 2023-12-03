import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBrand } from '../store/furnitureSlice'

const BrandBar = () => {
  const dispatch = useDispatch()
  const brands = useSelector((store) => store.brands.brands)
  const selectedBrand = useSelector((store) => store.furniture.selectedBrand)
  return (
    <Row xs="auto" className="d-flex">
      {brands.map((brand) => (
        <Card
          style={{ cursor: 'pointer' }}
          className="p-3"
          border={brand.id === selectedBrand.id ? 'danger' : 'light'}
          onClick={() => dispatch(setSelectedBrand(brand))}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
}

export default BrandBar
