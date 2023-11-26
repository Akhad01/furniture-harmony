import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedType } from '../store/furnitureSlice'

const TypeBar = () => {
  const dispatch = useDispatch()
  const types = useSelector((store) => store.furniture.types)
  const selectedType = useSelector((store) => store.furniture.selectedType)

  return (
    <ListGroup>
      {types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === selectedType.id}
          onClick={() => dispatch(setSelectedType(type))}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TypeBar
