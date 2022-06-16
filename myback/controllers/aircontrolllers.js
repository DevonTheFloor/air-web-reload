const cates = require('../data/categories.json')
const prods = require('../data/products.json')


exports.getAllCategories = (req, res, next) => {
  setTimeout(()=> {
    res.send(cates);
  }, 400)
}

exports.getOneCategory = (req, res, next) => {
  const id = req.params.id
  const result = cates.find(cate => cate.id === id)
  res.send(result)
}

exports.getProductsInCategory = (req, res, next) => {
  const idcat = req.params.idcat
  const result = prods.filter(prod => prod.category_id == idcat)
  setTimeout(() => res.send(result), 400)
}

exports.getAllProducts = (req, res, next) => {
  setTimeout(() => res.send(prods)
  , 400
  )
}
exports.getProductById = (req, res, next) => {
  const id = req.params.id
  const result = prods.find(prod => prod.id === id)
  res.send(result)
}

exports.getProductsByCategoryId = (req, res, next) => {
  const id = req.params.id
  const result = prods.filter(prod => prod.category_id === id)
  res.send(result)
}

exports.computeMyCart = (req, res, next) => {
  let listing = []
  let total = 0
  const cart = req.params.cart
  const parse = JSON.parse(cart)
  parse.forEach(elt => {
    const item = prods.find(prod => prod.id == elt)
    listing.push(item)
  });
  res.status(200).json(listing)
}