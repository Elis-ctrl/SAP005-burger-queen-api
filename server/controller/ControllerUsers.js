const database = require('../db/models')


const getAllUsers = async (req, res, next) => {
  try{
    const user = await database.Users.findAll()
      res.status(200).json(user);
    
  }
  catch(e) {
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

const putIdUsers = ('/:id', (req, res, next) => {

  const id = req.params.id

  try {

    if (id === null) {
      res.send({
        mensagem:'inserindo um usuario atraves do id',
        id: id
      });
      } else {
      res.send({
        mensagem: 'Erro no Id'
      });
    }
    
  } catch (error) {
    next()
  }

});

const deleteUsers = ('/:id', (req, res) => {
  const id = req.params.uid
    if (id === null) {
    res.send({
      mensagem:'retirado um usuario atraves do id',
      id: id
    });
    } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

module.exports = { getAllUsers, postUsers, getIdUsers, putIdUsers, deleteUsers}


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