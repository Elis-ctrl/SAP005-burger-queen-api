const database = require('../db/models')

const getAllOrders = async (req, res, next) => {
  
  try {

    const orders = await database.Orders.findAll({ 
      include: [
        {
        model: database.Products,
        attributes: ["id", "name", "flavor","complement"],
          through: {
            model: database.ProductsOrders,
            attributes:["qtd"]
          }
        }, 
        {
          model: database.Users,
          attributes: ["name", "id"]
        }
      ]
    });

    orders = order.map(order => {
      return {
        "order_id": order.id,
        "client": order.clientName,
        "table": order.table,
        "userRole":order.Users.name,
        "userId":order.Users.id,
        "createdAt": order.createdAt,
        "updatedAt": order.updatedAt,
        "products": order.order.map(product => {
          return {  
            "id": product.id,
            "name": product.name,
            "qtd": product.ProductsOrders.qtd,
            "flavor": product.flavor,
            "complement": product.complement,
          }
        })
      }
    })
    res.status(201).send(orders);
  } catch (error) {
      next()
  }
};

const postOrders = async (req, res, next) => {
  console.log("entrou postorders")
  try {

  const {user_id, clientName,table,status } = req.body;

  const order = await database.Orders.create({user_id, clientName,table, status});
  console.log(order)

  let products = red.body.products;

  products = products.map(product => {
    return {
      "order_id": order.id,
      "product_id": product.id,
      "qtd": product.qtd
    }
  })
    
  await database.ProductsOrders.bulkCreate(products);

    res.status(201).json({msg: " Pedido realizado com sucesso" })
    
  } catch (error) {
    next()
  }
};

const getIdOrders = async (req, res, next) => {

  const id = req.params.order_id

    try {
      
      const orders = await database.Orders.findOne({ where: { id: id }, 
        include: [
          {
          model: database.Products,
          attributes: ["id", "name", "flavor","complement", "price"],
            through: {
              model: database.ProductsOrders,
              attributes:["qtd"]
            }
          }, 
          {
            model: database.Users,
            attributes: ["name", "id"]
          }
        ]
      });

      orders = order.map(order => {
        return {
          "order_id": order.id,
          "client": order.clientName,
          "table": order.table,
          "userRole":order.Users.name,
          "userId":order.Users.id,
          "createdAt": order.createdAt,
          "updatedAt": order.updatedAt,
          "products": order.order.map(product => {
            return {  
              "id": product.id,
              "name": product.name,
              "qtd": product.orderProductsQtd.qtd,
              "flavor": product.flavor,
              "complement": product.complement,
            }
          })
        }
      })
      if(orders == null){
        res.status(404).json({error: "Ordem não encontrada"});
      } 
      res.status(201).send(orders);
    } catch (error) {
    next()
  }
};

const upOrders = async (req, res, next) => {
  try {
  const id = req.params.order_id;
  const newOrder = req.body.status;
  
  const orders = await database.Orders.findOne({ where: { id: id }, 
    include: [
      {
      model: database.Products,
      attributes: ["id", "name", "flavor","complement", "price"],
        through: {
          model: database.ProductsOrders,
          attributes:["qtd"]
        }
      }, 
      {
        model: database.Users,
        attributes: ["name", "id"]
      }
    ]
  });
    if(orders !== null){
      const productUp = await database.Orders.update({
        status:{newOrder},
        where: {id:id}, 
        cascade:true
      })
    }
      res.status(204).send(productUp)
  } catch (error) {
    next()
  }
};

const deleteOrders = async (req, res, next) => {

  const id = req.params.order_id

  try {
    
    const orders = await database.Orders.findOne({ where: { id: id }, 
      include: [
        {
        model: database.Products,
        attributes: ["id", "name", "flavor","complement", "price"],
          through: {
            model: database.ProductsOrders,
            attributes:["qtd"]
          }
        }, 
        {
          model: database.Users,
          attributes: ["name", "id"]
        }
      ]
    });

    orders = order.map(order => {
      return {
        "order_id": order.id,
        "client": order.clientName,
        "table": order.table,
        "userRole":order.Users.name,
        "userId":order.Users.id,
        "createdAt": order.createdAt,
        "updatedAt": order.updatedAt,
        "products": order.order.map(product => {
          return {  
            "id": product.id,
            "name": product.name,
            "qtd": product.orderProductsQtd.qtd,
            "flavor": product.flavor,
            "complement": product.complement,
          }
        })
      }
    })

    if (orders !== null) {
      await database.Orders.destroy({ where: { id: id }}) 
      res.status(200).json('Ordem deletada')
    } 
  } catch (error) {
    next()
  }
};

module.exports = { getAllOrders, postOrders, getIdOrders, upOrders, deleteOrders }
