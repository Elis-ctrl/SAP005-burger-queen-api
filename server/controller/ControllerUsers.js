// aqui vai o código que acessa o banco de dados

const users = [
  { uid: 1, username: 'Pedro Pinto', email: 'ppinto@ppl.com' },
  { uid: 2, username: 'Francisco', email: 'francisco@ppl.com' }, 
  { uid: 3, username: 'Carla Figueiredo', email: 'cfig@ppl.com' }
];

const getAllUsers = (req, res) => {
  console.log("retorno de json com objeto fixo")
  res.send(users);
};

const postUsers = (req, res) => {
  users.push(req.body)
  console.log("post de produtos")
  res.send({
    mensagem: 'insere um usuario'
  })
}

const getIdUsers = ('/:uid', (req, res) => {
  // const CreatUser = await users.create({name: 'teste01', email: 'teste@t.com'});

  const id = req.params.uid
  if (id == Number) {
    res.send({
      mensagem:'pegando o Id de um usuario',
      uid: id
    });
  } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

const putIdUsers = ('/:uid', (req, res) => {
  const id = req.params.uid
    if (id === Number) {
    res.send({
      mensagem:'inserindo um usuario atraves do id',
      id: id
    });
    } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

const deleteUsers = ('/:uid', (req, res) => {
  const id = req.params.uid
    if (id === Number) {
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