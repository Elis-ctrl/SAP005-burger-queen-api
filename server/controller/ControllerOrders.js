const database = require('../db/models')

const getAllOrders = (req, res) => {
  console.log("retorno de json com uma lista fixa ")
  res.send(orders);
};

const postOrders = (req, res) => {
  const order = {
    orderid: req.body.ordertid,
    name: req.body.name,
    price: req.body
  }
  console.log("post de orders")
  res.send({
    mensagem: 'insere um produto'
  })
};

const getIdOrders = ('/:orderid', (req, res) => {
  const id = req.params.orderid
  if (id === Number) {
    res.send({
      mensagem:'pegando o Id de uma ordem',
      id_order: id
    });
  } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

const putIdOrders = ('/:orderid', (req, res) => {
  const id = req.params.orderid
    if (id === Number) {
    res.send({
      mensagem:'inserindo uma ordem atraves do id',
      id_order: id
    });
    } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

const deleteOrders = ('/:orderid', (req, res) => {
  const id = req.params.orderid
    if (id === Number) {
    res.send({
      mensagem:'retirado uma ordem atraves do id',
      id_order: id
    });
    } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

module.exports = { getAllOrders, postOrders, getIdOrders, putIdOrders, deleteOrders }