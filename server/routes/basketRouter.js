const express = require('express');
const router = express.Router();
const {
  addToBasket,
  removeFromBasket,
  getBasketContent,
} = require('../controllers/basketController');

// Маршрут для добавления товара в корзину
router.post('/add', addToBasket);

// Маршрут для удаления товара из корзины
router.post('/remove', removeFromBasket);

// Маршрут для получения содержимого корзины
router.get('/content', getBasketContent);

module.exports = router;
