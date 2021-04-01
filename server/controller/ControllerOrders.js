const database = require("../db/models")

const getAllOrders =async (req, res, next) => {
  console.log("passou aqui")
  try{
  const order = await database.Orders.findAll({where: {id:Number(3) }})
    console.log(order,"texto teambem")
    res.status(200).json(order.toJSON());
    console.log("TEXTO AQUI", res.status(201).json(order.toJSON()))
}
  catch(error) {
      next()
  }

};

// const postOrders = (req, res, next) => {
  
//   const product = {
//     {
//       "client": req.body.
//       "table": req.body
//       "products": [
//         {
//           "id": 0,
//           "qtd": 0
//         }
//       ]
//     }
//   }
//   const getProducts = await database.Products.map({
//     "products": order.orders.map(product => {
//       return {
//         "id": product.id,
//         "name": product.name,
//         "qtd": product.orderProductsQtd.qtd,
//         "flavor": product.flavor,
//         "complement": product.complement,
//       }
//       const makeOrder = await database.Orders.create({order});
//   });


  
//   try {

//     res.status(201).send(result)
    
//   } catch (error) {
//     next()
//   }


// };

// const getIdOrders =  (req, res, next) => {

//   const id = req.params.id
//   const orders = await database.Products.findOne({ where: { id: id } });

//   try {
    
//     if (product === null) {
//       res.status(404).json('product not found')
//     } else {
//       res.send(product)
//     }
//   } catch (error) {
//     next()
//   }
// };

// const upOrders = async (req, res, next) => {
  
//   const id = req.params.id
//   const upBody = req.body.status
//   const gettingById = await database.getIdOrders(id);

//   try {
//     if(gettingById){
      
//       const orderUp = await database.Orders.update(id,upBody)
    
//       res.status(204).json(orderUp)
//     }
//   } catch (error) {
//     next()
//   }
// };

// const deleteOrders = async (req, res, next) => {

//   const id = req.params.id
//   const gettingById = await database.getIdOrders(id);

//   try {
//     if(gettingById) {
      
//       const order = await database.Orders.destroy({ where: { id: id }, cascate:true });
//         res.status(200).json(order)
//     }

//   } catch (error) {
//     next()
//   }

// };

module.exports = { getAllOrders }




