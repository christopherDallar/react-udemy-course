// https://www.restapitutorial.com/httpstatuscodes.html
const { response } = require('express') // just for keep intellisense
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { generateJWT } = require('../helpers/jwt')

// express.response = just for keep intellisense
const createUser = async (req, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Account already exist with that email',
      })
    }

    user = new User(req.body) // Automatically mongoose ignore all data not declare on model

    // encrypt  password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    // Create user
    await user.save()

    // Generate token
    const token = await generateJWT(user.id, user.name)

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Please contact with support',
    })
  }
}

const loginUser = async (req, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        ok: false,
        msg:
          "Email or Password are wrong (For developer: It's the email wrong)",
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(401).json({
        ok: false,
        msg:
          "Email or Password are wrong (For developer: It's the password wrong)",
      })
    }

    // Generate token
    const token = await generateJWT(user.id, user.name)

    res.status(200).json({
      ok: false,
      uid: user.id,
      name: user.name,
      token,
    })
  } catch (error) {
    console.log(error)
    res.json({
      ok: false,
      msg: 'Please contact with support',
    })
  }
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
