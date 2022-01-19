const express = require('express')
const app = express()
const port = 3000

const rabbit = require('./amqpClient')

app.get('/', (req, res) => {
  res.send('Hello World! This is server1')
})

// app.post('/send', async (req, res)=> {
//   const broker = await rabbit.getInstance()
//   await broker.send('test', Buffer.from(JSON.stringify(ctx.request.body)))
// })

app.listen(port, () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})