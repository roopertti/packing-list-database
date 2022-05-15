import dotenv from 'dotenv'

dotenv.config()

export const createEnvironment = () => {
  const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, PORT } = process.env

  return { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, PORT }
}

export type Environment = ReturnType<typeof createEnvironment>
