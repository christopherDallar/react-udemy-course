/*
  User routes / auth
  host + /api/auth
*/

const { Router } = require('express')
const router = Router()

router.get('/', (red, res) => {
  res.json({
    ok: true,
  })
})

module.exports = router
