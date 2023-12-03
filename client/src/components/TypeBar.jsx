import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setReset, setSelectedType } from '../store/furnitureSlice'

const TypeBar = () => {
  const dispatch = useDispatch()
  const types = useSelector((store) => store.types.types)
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
      <Button
        variant="outline-success"
        onClick={() => dispatch(setReset())}
        className="mt-3"
      >
        Сбросить
      </Button>
    </ListGroup>
  )
}

export default TypeBar
