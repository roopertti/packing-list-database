import { Environment } from '~/config/environment'

export const createTestEnvironment = (): Environment => {
  return {
    DB_HOST: 'localhost',
    DB_NAME: 'test',
    DB_PASSWORD: 'test',
    DB_PORT: 54321,
    DB_USER: 'test',
    PORT: 8080,
  }
}
