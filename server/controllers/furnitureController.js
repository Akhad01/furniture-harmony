const uuid = require('uuid')
const path = require('path')
const { Furniture, FurnitureInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class FurnitureContoller {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const furniture = await Furniture.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      })

      if (info) {
        info = JSON.parse(info)
        info.forEach((i) =>
          FurnitureInfo.create({
            title: i.title,
            description: i.description,
            furnitureId: furniture.id,
          })
        )
      }

      return res.json(furniture)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query

    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit

    let furnitures

    if (!brandId && !typeId) {
      furnitures = await Furniture.findAndCountAll({ limit, offset })
    }
    if (brandId && !typeId) {
      furnitures = await Furniture.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      })
    }
    if (!brandId && typeId) {
      furnitures = await Furniture.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      })
    }
    if (brandId && typeId) {
      furnitures = await Furniture.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      })
    }

    return res.json(furnitures)
  }
  async getOne(req, res) {
    const { id } = req.params
    const furniture = await Furniture.findOne({
      where: { id },
      include: [{ model: FurnitureInfo, as: 'info' }],
    })

    return res.json(furniture)
  }
}

module.exports = new FurnitureContoller()
