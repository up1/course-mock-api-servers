function productResponse(request, state) {
  console.log(request)
  return {
    statusCode: 200,
    body: [
      { 
        "id": 1,
        "name": "Product 1"
      }
    ]
  };
}