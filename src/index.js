import express from 'express'
import morgan from 'morgan'
import router from './routes/index.js'
import { recordatorio } from './cron/cron.js'
import { dbConnection } from './config/db.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3001

await dbConnection()
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  })
  .catch(error => console.error('Error conecting to database:', error))

app.get('/', (req, res) => {
  res.status(200).json('Hola')
  console.log('Funciona hola')
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  })
})

app.use('/', router)

recordatorio()
