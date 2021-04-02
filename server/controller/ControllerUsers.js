const database = require('../db/models')

const getAllUsers = async (req, res, next) => {
  try{
    const user = await database.Users.findAll()
      res.status(200).json(user);
    
  }
  catch(error) {
      next()
  }
};

const postUsers = async (req, res, next) => {

  const { name, email, password, role, restaurant } = req.body;

  try {

    const result = await database.Users.create({name, email, password, role, restaurant});

    res.status(201).send(result)
    
  } catch (error) {
    next()
  }
};

const getIdUsers = async (req, res, next) => {
  
  const id = req.params.id

  try {
    const user = await database.Users.findOne({ where: { id: id }, attributes: {exclude: ['password'] } });
    
    if (user === null) {
      res.status(404).json('user not found')
    } else {
      res.send(user)
    }
  } catch (error) {
    next()
  }

};

const updateUsers = async (req, res, next) => {

  const id = req.params.id
  
  try {
    const userUp = await database.Users.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      restaurant: req.body.restaurant,
      role: req.body.role
    },{
      where: { id: id }
    })
      res.status(201).json(userUp)
  } catch (error) {
    next()
  }
};

const deleteUsers = async (req, res, next) => {
  
  const id = req.params.id

  try {

    const user = await database.Users.destroy({ where: { id: id } });
      res.status(201).json(user)

  } catch (error) {
    next()
  }

};


module.exports = { getAllUsers, postUsers, getIdUsers, updateUsers, deleteUsers}
