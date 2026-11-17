import Task from '../models/task.model.js'

export const get = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id })
  res.status(200).json({
    message: 'Todas las tareas obtenidas con éxito',
    tasks,
  })
}

export const createTask = async (req, res) => {
  const { title, description, completed } = req.body
  const user = req.user.id
  if (!title || completed == null || !user) {
    res.status(400).json({ error: 'Incompleted task' })
  }
  const task = await Task.create({ title, description, completed, user })
  res.status(201).json({
    message: 'Task created',
    data: {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      user: task.user,
    },
  })
}

// export const put = (req, res) => {
//   res.status(204).json('Usuario actualizado')
// }

export const deleteTask = async (req, res) => {
  const taskId = req.params.id
  const user = req.user.id
  await Task.deleteOne({ _id: taskId, user: user })
  res.status(204).json()
}
