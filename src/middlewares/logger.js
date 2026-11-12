import { info } from 'naxito-logger'

export const log = (req, res, next) => {
  const start = Date.now()

  res.on('finish', () => {
    info(
      `${req.method} ${req.originalUrl} Status: ${res.statusCode} Duracon: ${Date.now() - start}ms\n`,
    )
  })
  next()
}
