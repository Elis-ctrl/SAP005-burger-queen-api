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

  const name = req.body.name
  
  try {

    const user = await database.Users.update({ where: { name: name } });
      res.status(201).json(user)

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


// aqui vai o código que manda o que tem que fazer para o models e ele que faz a conexão do banco de dados
// video da Ju(jeito backend de fazer)
// class usercontroller {
//   static async getusers (req,res){
//     const users = await Database.user.findAll()
//     res.status(200).json(users)
//   }
//   todos os metodos 
// };
// module.exports = {userController}

// sem o async e o await com o then catch
// const postUsers = (req, res, next) => {
//   const { name, email, password, role } = req.body;
  
//   User.create({
//     name,
//     email,
//     password,
//     role,
//     restaurant,
//   })
//     .then((result) => {
//       res.status(201).json(result); //return with ID -> 201 (CREATED)
//     })
//     .catch(next);
// }