const { Router } = require('express')
const { validateJWT } = require('../middleware/jwt-validator')
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')

const router = Router()

router.get('/', [validateJWT], getEvents)

router.post('/', [validateJWT], createEvent)

router.get('/:id', [validateJWT], getEvent)

router.put('/:id', [validateJWT], updateEvent)

router.delete('/:id', [validateJWT], deleteEvent)

module.exports = router
