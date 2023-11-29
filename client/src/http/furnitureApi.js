import { $authHost, $host } from '.'

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type)
  console.log('data', data)

  return data
}

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type')
  return data
}

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand)
  return data
}

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand')
  return data
}

export const createFurniture = async (furniture) => {
  const { data } = await $authHost.post('api/furniture', furniture)
  console.log('furniture: ', furniture)
  console.log('data: ', data)

  return data
}

export const fetchFurnitures = async () => {
  const { data } = await $host.get('api/furniture')
  return data
}

export const fetchOneFurniture = async (id) => {
  const { data } = await $host.get('api/furniture/' + id)
  return data
}
