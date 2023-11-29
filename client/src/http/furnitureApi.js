import { $authHost, $host } from '.'

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type)
  return data
}

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type')
  return data
}

export const createBrand = async () => {
  const { data } = await $authHost.post('api/brand')
  return data
}

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand')
  return data
}

export const createFurniture = async (furniture) => {
  const { data } = await $authHost.post('api/furniture', furniture)
  return data
}

export const fetchFurnitures = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get('api/furniture', {
    params: { typeId, brandId, page, limit },
  })
  return data
}

export const fetchOneFurniture = async (id) => {
  const { data } = await $host.get('api/furniture/' + id)
  return data
}
