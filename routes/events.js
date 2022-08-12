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
const { check } = require('express-validator')
const { validateFields } = require('../middleware/middleware')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.use(validateJWT)

router.get('/', getEvents)

router.post(
  '/',
  [
    check('title', 'title is required').not().isEmpty(),
    check('start', 'start date is required').custom(isDate),
    validateFields,
  ],
  createEvent,
)

// router.get('/:id', getEvent)

router.put(
  '/:id',
  [
    check('title', 'title is required').not().isEmpty(),
    check('start', 'start date is required').custom(isDate),
    validateFields,
  ],
  updateEvent,
)

router.delete('/:id', deleteEvent)

module.exports = router
