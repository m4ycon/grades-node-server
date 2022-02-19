import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())

app.get('/status', (req, res) => {
  res.json({ message: 'Everything OK! :)' })
})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/user/:id', (req, res) => {
  prisma.user.findUnique({
    where: { id: req.params.id },
  })
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.post('/user', async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
    },
  })

  res.status(201).json(user)
})

app.put('/user/:id', async (req, res) => {
  prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.delete('/user/:id', (req, res) => {
  prisma.user.delete({
    where: {
      id: req.params.id,
    },
  })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.listen(PORT, HOST, () => console.log(`Running on ${HOST}:${PORT}`))
