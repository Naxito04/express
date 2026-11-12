import express from 'express'
import { log } from '../middlewares/logger.js'
import { get, post, put, deleteUser } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', log, get)

router.post('/', log, post)
router.put('/:id', log, put)
router.delete('/:id', log, deleteUser)

export default router
