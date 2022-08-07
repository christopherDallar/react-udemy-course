const express = require('express')
require('dotenv').config()

console.log(process.env)

const app = express()

// Public directory
app.use(express.static('public'))

// Routes
// app.get('/', (red, res) => {
//   res.json({
//     ok: true,
//   })
// })

app.listen(process.env.PORT, 'localhost', () => {
  console.log(`server running on port ${process.env.PORT}`)
})
