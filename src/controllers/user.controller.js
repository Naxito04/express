// const userController =

export const get = (req, res) => {
  res.status(200).json('Todos los usuario')
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
