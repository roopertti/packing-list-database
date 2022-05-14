import express from 'express'

export const createApp = () => {
  const app = express()

  app.get('/health', async (_, res) => {
    res.send({ message: 'Api is up and running!' })
  })

  return app
}
