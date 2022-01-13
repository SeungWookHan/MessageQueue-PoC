const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is server1')
})

app.listen(port, () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})