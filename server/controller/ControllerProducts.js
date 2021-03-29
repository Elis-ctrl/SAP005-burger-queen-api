const database = require('../db/models')

const getAllProducts = async (req, res, next) => {
  try{
    const product = await database.Products.findAll()
      res.status(200).json(product);
  }
  catch(error) {
      next()
  }
};

const postProducts = async (req, res, next) => {

  const { name, flavor, complement, price, image, type, subType } = req.body;

  try {
    const result = await database.Products.create({name, flavor, complement, price, image, type, subType});

    res.status(201).send(result)
    
  } catch (error) {
    next()
  }
};

const getIdProducts = async (req, res, next) => {

  const id = req.params.id

  try {
    const product = await database.Products.findOne({ where: { id: id } });
    
    if (product === null) {
      res.status(404).json('product not found')
    } else {
      res.send(user)
    }
  } catch (error) {
    next()
  }
};

const updateProducts = async (req, res, next) => {

  const id = req.params.id

  try {
    const productUp = await database.Products.update({
      name: req.body.name,
      flavor: req.body.flavor,
      complement: req.body.complement,
      price: req.body.price,
      image: req.body.image,
      type: req.body.type,
      subType:req.body.subType
    },{
      where: { id: id }
    })
      res.status(201).json(productUp)
  } catch (error) {
    next()
  }
};

const deleteProducts = async (req, res, next) => {

  const id = req.params.id

  try {

    const product = await database.Products.destroy({ where: { id: id } });
      res.status(201).json(product)

  } catch (error) {
    next()
  }
};

module.exports = { getAllProducts, postProducts, getIdProducts, updateProducts, deleteProducts }
