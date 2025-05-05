// const { Basket, BasketFurniture, Furniture } = require('../models/models'); // Подключаем модели из вашего backend

// exports.getUserBasket = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const basket = await Basket.findOne({
//       where: { userId },
//       include: Furniture,
//     });
//     res.json(basket);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// exports.addToBasket = async (req, res) => {
//   try {
//     const { basketId, furnitureId } = req.body;
//     await BasketFurniture.create({ basketId, furnitureId });
//     res.status(201).json({ message: 'Item added to basket successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// exports.removeFromBasket = async (req, res) => {
//   try {
//     const basketFurnitureId = req.params.basketFurnitureId;
//     await BasketFurniture.destroy({ where: { id: basketFurnitureId } });
//     res.json({ message: 'Item removed from basket successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// basketController.js;
