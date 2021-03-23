// aqui vai o código que acessa o banco de dados

const products = [
  { productid: 1, product: 'Hamburguer', price: 10.00 },
  { productid: 2, product: 'Batata', price: 5.00}, 
  { productid: 3, product: 'Refri', price: 8.00 }
];

const getAllProducts = (req, res) => {
  console.log("retorno de json com uma lista fixa ")
  res.send(products);
};

const postProducts = (req, res) => {

  const product ={
    productid: req.body.productid,
    name: req.body.name,
    price: req.body.price

  }
  console.log("post de produtos")
  res.send({
    mensagem: 'insere um produto',
    produtoCriado:product
  })
}

const getIdProducts = ('/:productid', (req, res) => {
  const id = req.params.productid
  if (id === Number) {
    res.send({
      mensagem:'pegando o Id de um produto',
      id: id
    });
  } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

const putIdProducts = ('/:productid', (req, res) => {
  const id = req.params.productid
    if (id === Number) {
    res.send({
      mensagem:'inserindo um produto atraves do id',
      id: id
    });
    } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

const deleteProducts = ('/:productid', (req, res) => {
  const id = req.params.productid
    if (id === Number) {
    res.send({
      mensagem:'retirado um produto atraves do id',
      id: id
    });
    } else {
    res.send({
      mensagem: 'Erro no Id'
    });
  }
});

module.exports = { getAllProducts, postProducts, getIdProducts, putIdProducts, deleteProducts }