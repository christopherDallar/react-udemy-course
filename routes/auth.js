/*
  User routes / auth
  host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { createUser, loginUser, renewToken } = require('../controllers/auth')

router.post(
  '/new',
  [
    // middleware
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Must to be email format').isEmail(), // Check is required and is email format
    check('password', 'must to be 6 length large').isLength({ min: 6 }), // Check is Length is valid and is required
  ],
  createUser,
)

router.post(
  '/',
  [
    check('email', 'Must to be email format').isEmail(),
    check('password', 'must to be 6 length large').isLength({ min: 6 }),
  ],
  loginUser,
)

router.get('/renew', renewToken)

module.exports = router
