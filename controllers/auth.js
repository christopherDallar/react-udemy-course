const { response } = require('express') // just for keep intellisense

// express.response = just for keep intellisense
const createUser = (req, res = response) => {
  const { name, email, password } = req.body

  // Not call more than one time res.json for each callback controller
  // for that write return for each several res.json choices
  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: 'The name must to be more than 5 length',
    })
  }

  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  })
}

const loginUser = (req, res = response) => {
  const { email, password } = req.body
  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
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
