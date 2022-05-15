import request from 'supertest'

import { createApp } from '~/app'
import { createDatabase } from '~/config/database'
import { createTestEnvironment } from '~/testUtils/createTestConfiguration'

describe('App test', () => {
  it('calls health endpoint, receives successful response', async () => {
    const environment = createTestEnvironment()
    const db = createDatabase({ environment })
    const app = createApp({ environment, db })

    await request(app)
      .get('/health')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
  })
})
