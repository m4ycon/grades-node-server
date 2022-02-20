import { User } from '@prisma/client'
import { Request, Response } from 'express'

import userService from '../services/UserService'

class UserController {
  async list (req: Request, res: Response) {
    userService.list()
      .then(users => res.json(users))
      .catch(error => res.status(500).json({ error }))
  }

  async get (req: Request, res: Response) {
    const { id } = req.params

    userService.get(id)
      .then(user => res.json(user))
      .catch(error => res.status(500).json({ error }))
  }

  async create (req: Request, res: Response) {
    const user = req.body as User

    const emailExists = await userService.emailExists(user.email)
    if (emailExists) {
      res.status(400).json({ error: 'Email já cadastrado.' })
      return
    }

    userService.create(user)
      .then(user => res.status(201).json(user))
      .catch(error => res.status(500).json({ error }))
  }

  async update (req: Request, res: Response) {
    const { id } = req.params
    const user = req.body

    userService.update(id, user)
      .then(user => res.json(user))
      .catch(error => res.status(500).json({ error }))
  }

  async delete (req: Request, res: Response) {
    const { id } = req.params

    userService.delete(id)
      .then(user => res.json(user))
      .catch(error => res.status(500).json({ error }))
  }
}

const userController = new UserController()
export default userController
