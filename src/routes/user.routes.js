import express from 'express'
import { log } from '../middlewares/logger.js'
import {
  get,
  post,
  put,
  deleteUser,
  getUserProfile,
} from '../controllers/user.controller.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', log, get)
router.post('/', log, post)
router.put('/:id', log, put)
router.delete('/:id', log, deleteUser)
router.get('/profile', auth, getUserProfile)

export default router
