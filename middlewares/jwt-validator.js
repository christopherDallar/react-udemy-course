const { response } = require('express')

const validateJWT = (req, res = response, next) => {
  // x-token headers
  const token = req.header('x-token')

  console.log(token)

  next()
}

module.exports = {
  validateJWT,
}
