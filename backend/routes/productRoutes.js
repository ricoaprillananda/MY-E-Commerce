const express = require('express');
const router = express.Router();
const { getAllProducts, getAllProductById } = require('../controllers/productController');  // Make sure the path is correct

// Define routes
router.get('/', getAllProducts);
router.get('/:id', getAllProductById); 

module.exports = router;
