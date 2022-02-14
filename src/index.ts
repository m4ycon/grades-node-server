import express from 'express'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.listen(PORT, HOST, () => console.log(`Running on ${HOST}:${PORT}`))
