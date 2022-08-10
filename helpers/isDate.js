const moment = require('moment')

const isDate = (value, { req, location, path }) => {
  console.log(value)
  console.log({ location, path })

  if (!value && value !== 0) return false

  const date = moment(value)

  if (!date.isValid()) return false

  return true
}

module.exports = {
  isDate,
}
