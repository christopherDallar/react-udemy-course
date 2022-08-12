require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')

const app = express()

// DB
dbConnection()

//CORS
app.use(cors())

// Public directory
app.use(express.static('public'))

// Reader and Setter of Body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// process.env.PORT = if this variable doesn't in server, it will find in .env
app.listen(process.env.PORT, 'localhost', () => {
  console.log(`server running on port ${process.env.PORT}`)
})
