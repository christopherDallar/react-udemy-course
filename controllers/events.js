const { response } = require('express')
const globalRes = require('../helpers/globalResponse')
const Event = require('../models/Event')

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name')
  res.json({
    ok: true,
    events,
  })
}

const getEvent = async (req, res = response) => {
  // try {
  //   const {} = req
  //   // await Event.findOne({})

  // } catch (error) {

  // }

  // console.log();

  res.json({
    ok: true,
    msg: 'getEvent',
  })
}

const createEvent = async (req, res = response) => {
  console.log(req.body)

  const event = new Event(req.body)

  try {
    event.user = req.uid
    const eventSaved = await event.save()

    res.json({
      ok: true,
      event: eventSaved,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact with support',
    })
  }
}

const updateEvent = async (req, res = response) => {
  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId)

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found by id',
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        mgs: 'Denied edit, it does not privileges to edit this event',
      })
    }

    const newEvent = {
      ...req.body,
      user: uid,
    }

    const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    })

    res.json({
      ok: true,
      event: eventUpdated,
    })
  } catch (error) {
    console.log(error)
    globalRes.error.internal(res)
  }
}

const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId)

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found by id',
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        mgs: 'Denied delete, it does not privileges to delete this event',
      })
    }

    const eventDeleted = await Event.findByIdAndDelete(eventId)

    res.json({
      ok: true,
      event: eventDeleted,
    })
  } catch (error) {
    console.log(error)
    globalRes.error.internal(res)
  }
}

module.exports = {
  getEvents,
  // getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
}
