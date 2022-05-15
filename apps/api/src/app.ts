import express from 'express'

import { DB } from '~/config/database'
import { Environment } from '~/config/environment'

type AppDependencies = {
  environment: Environment
  db: DB
}

export const createApp = (_: AppDependencies) => {
  const app = express()

  app.get('/health', async (_, res) => {
    res.send({ message: 'Api is up and running!' })
  })

  return app
}
