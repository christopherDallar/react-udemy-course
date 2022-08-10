const { response } = require('express')
const Event = require('../models/Event')

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getEvents',
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

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateEvent',
  })
}

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvent',
  })
}

module.exports = {
  getEvents,
  // getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
}
