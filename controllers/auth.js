const { response } = require('express') // just for keep intellisense

// express.response = just for keep intellisense
const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'register',
  })
}

const loginUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login',
  })
}

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  })
}

module.exports = {
  createUser,
  loginUser,
  renewToken,
}
