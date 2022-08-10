/**
 * Event Routes
 * /api/events
 *
 */

const { Router } = require('express')
const { validateJWT } = require('../middleware/jwt-validator')
const {
  getEvents,
  // getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')

const router = Router()

router.use(validateJWT)

router.get('/', getEvents)

router.post('/', createEvent)

// router.get('/:id', getEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router
