import request from 'supertest'

import { createApp } from '~/app'

describe('App test', () => {
  it('calls health endpoint, receives successful response', async () => {
    const app = createApp()

    await request(app)
      .get('/health')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
  })
})
