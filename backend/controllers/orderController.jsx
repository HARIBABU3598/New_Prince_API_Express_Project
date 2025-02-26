const orderModel = require('../models/orderModel.jsx');

exports.createOrder = (request, response, next) => {
  
  console.log(request.body, 'DATA');
  
  response.json({
    success: true,
    message: "Order works successfully!!!",
  });
};
