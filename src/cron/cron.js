import cron from 'node-cron'

export function recordatorio() {
  cron.schedule('* * * * *', () => {
    console.log('Ha pasado 1 minutos')
  })

  cron.schedule('0 * * * *', () => {
    console.log('Han pasado 5 minutos')
  })

  cron.schedule('5 * * * *', () => {
    console.log('Han pasado 5 minutos')
  })
}
