/*
  User routes / auth
  host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/middleware')
const { validateJWT } = require('../middlewares/jwt-validator')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const router = Router()

router.post(
  '/new',
  [
    // middleware
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Must to be email format').isEmail(), // Check is required and is email format
    check('password', 'must to be 6 length large').isLength({ min: 6 }), // Check is Length is valid and is required
    validateFields,
  ],
  createUser,
)

router.post(
  '/',
  [
    check('email', 'Must to be email format').isEmail(),
    check('password', 'must to be 6 length large').isLength({ min: 6 }),
    validateFields,
  ],
  loginUser,
)

router.get('/renew', [validateJWT], renewToken)

module.exports = router
