const { response } = require('express')

const error = {
  internal: (res = response) => {
    res.status(500).json({
      ok: false,
      msg: 'Please contact with support',
    })
  },
}

const globalRes = {
  error,
}

module.exports = globalRes
