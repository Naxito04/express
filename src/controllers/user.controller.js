import User from '../models/user.model.js'

export const get = (req, res) => {
  res.status(200).json('Todos los usuarios')
}

export const post = (req, res) => {
  res.status(201).json('Usuario creado')
}

export const put = (req, res) => {
  res.status(204).json('Usuario actualizado')
}

export const deleteUser = (req, res) => {
  res.status(204).json('Usuario elimnado')
}

export const getUserProfile = (req, res) => {
  const user = User.findOne({ email: req.user.email })

  res.status(200).json(`Perfil de usuario: ${user}`)
}
