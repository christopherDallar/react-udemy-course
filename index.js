const express = require('express')
require('dotenv').config()

const app = express()

// Public directory
app.use(express.static('public'))

// Reader and Setter of Body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, 'localhost', () => {
  console.log(`server running on port ${process.env.PORT}`)
})
