
const express = require('express')
const router = express.Router()
const airCtl = require('../controllers/aircontrolllers')

router.get("/categories", airCtl.getAllCategories)

router.get("/categories/:id", airCtl.getOneCategory)
router.get("/products-category/:idcat", airCtl.getProductsInCategory);
router.get("/products", airCtl.getAllProducts)
router.get("/products/:id", airCtl.getProductById)
router.get("/mycart/:cart", airCtl.computeMyCart)

module.exports = router;
