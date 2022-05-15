import type { Knex } from 'knex'

import { createEnvironment } from '~/config/environment'

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = createEnvironment()

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export default config
