import { Router } from 'express'

import userController from '../api/controllers/UserController'

const router = Router()

// CRUD user
router.route('/:id')
  .get(userController.get)
  .put(userController.update)
  .delete(userController.delete)
router.route('/')
  .post(userController.create)
  .get(userController.list) // Get all users

export default router
