const express = require('express')

const app = express()

// Routes
app.get('/', (red, res) => {
  res.json({
    ok: true,
  })
})

app.listen(4000, 'localhost', () => {
  console.log(`server running on port ${4000}`)
})
