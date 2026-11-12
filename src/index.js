import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  })
})

app.get('/users', (req, res) => {
  res.status(200).json('Todos los usuario')
})

app.post('/users', (req, res) => {
  console.log(req.body)
  res.status(201).json('Usuario creado')
})
app.put('/users/:id', (req, res) => {
  console.log(req.params)
  res.status(204).json('Usuario actualizado')
})
app.delete('/users/:id', (req, res) => {
  console.status(204).log(req.params)
  res.json('Usuario elimnado')
})
