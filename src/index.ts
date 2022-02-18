import express from 'express'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/status', (req, res) => {
  res.json({ message: 'Everything OK! :)' })
})

app.listen(PORT, HOST, () => console.log(`Running on ${HOST}:${PORT}`))
