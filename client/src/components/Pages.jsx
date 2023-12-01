import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../store/furnitureSlice'

const Pages = () => {
  const dispatch = useDispatch()
  const totalCount = useSelector((store) => store.furniture.totalCount)
  const limit = useSelector((store) => store.furniture.limit)
  const pageItem = useSelector((store) => store.furniture.page)

  const pages = []
  const pageCount = Math.ceil(totalCount / limit)

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination className="mt-5 d-flex justify-content-center">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={pageItem === page}
          onClick={() => dispatch(setPage(page))}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
}

export default Pages
