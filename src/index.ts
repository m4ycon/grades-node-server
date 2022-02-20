import express from 'express'

import userRoutes from './routes/userRoutes'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())
app.use('/user', userRoutes)

app.get('/status', (req, res) => {
  res.json({ message: 'UP & OK :)' })
})

app.listen(PORT, HOST, () => console.log(`Running on ${HOST}:${PORT}`))
