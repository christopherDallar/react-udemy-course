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

const createEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'createEvent',
  })
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
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
}
