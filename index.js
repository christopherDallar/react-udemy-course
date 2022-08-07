const express = require('express')
require('dotenv').config()

console.log(process.env)

const app = express()

// Public directory
app.use(express.static('public'))

// Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, 'localhost', () => {
  console.log(`server running on port ${process.env.PORT}`)
})
