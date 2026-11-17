import express from 'express'
import { get, createTask, deleteTask } from '../controllers/task.controller.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', auth, get)
router.post('/', auth, createTask)
router.delete('/:id', auth, deleteTask)

export default router
