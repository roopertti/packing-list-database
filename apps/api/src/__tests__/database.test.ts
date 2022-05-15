import { createDatabase } from '~/config/database'
import { createTestEnvironment } from '~/testUtils/createTestConfiguration'

describe('Database init tests', () => {
  it('tests DB connection', async () => {
    const environment = createTestEnvironment()
    const db = createDatabase({ environment })
    const result = await db.raw('select version()')

    expect(result.rows[0].version.includes('PostgreSQL')).toBeTruthy()
  })
})
