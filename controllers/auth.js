// https://www.restapitutorial.com/httpstatuscodes.html
const { response } = require('express') // just for keep intellisense
const User = require('../models/User')

// express.response = just for keep intellisense
const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body

  const user = new User(req.body) // Automatically mongoose ignore all data not declare on model

  try {
    await user.save()

    res.status(201).json({
      ok: true,
      msg: 'register',
      // name,
      // email,
      // password,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Please contact with support',
    })
  }
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
