import knex, { Knex } from 'knex'

import { Environment } from './environment'

export type DB = Knex

const createDBConfig = (environment: Environment): Knex.Config => {
  const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = environment

  return {
    client: 'pg',
    connection: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  }
}

type CreateDatabaseDependencies = {
  environment: Environment
}

export const createDatabase = ({ environment }: CreateDatabaseDependencies): Knex => {
  const config = createDBConfig(environment)
  return knex(config)
}
