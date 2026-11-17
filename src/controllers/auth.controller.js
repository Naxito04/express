import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json('Bad request')
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json('Invalid email or password')
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json('Invalid email or password')
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    )

    res.status(200).json({
      message: 'User logged successfully',
      token,
    })
  } catch (error) {
    res.status(500).json(`error: ${error.message}`)
  }
}
