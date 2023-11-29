import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import FurnitureItem from './FurnitureItem'

const FurnitureList = () => {
  const furnitures = useSelector((store) => store.furniture.furnitures)

  return (
    <Row xs={1} xl={4} lg={3} sm={2} className="g-4 mt-3">
      {furnitures.map((furniture) => (
        <FurnitureItem key={furniture.id} furniture={furniture} />
      ))}
    </Row>
  )
}

export default FurnitureList
