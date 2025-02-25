exports.getProducts = (request, response, next) => {
  response.json({
    success: true,
    message: "Get Products Working!!!",
  });
};

exports.getSingleProduct = (request, response, next) => {
  response.json({
    success: true,
    message: "Get single Product Working!!!",
  });
};
