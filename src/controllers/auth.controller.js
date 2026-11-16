import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json('Bad request')
    }
    const passwordHash = bcrypt.hashSync(password, 10)

    const user = await User.create({ email, password: passwordHash })

    res.status(201).json({ message: 'User registered', data: user })
  } catch (error) {
    res.status(500).json(`error: ${error.message}`)
  }
}

export const login = (req, res) => res.json('Usuario logueado')
