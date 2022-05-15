import { createApp } from '~/app'
import { createEnvironment } from '~/config/environment'
import { createDatabase } from '~/config/database'

const environment = createEnvironment()
const db = createDatabase({ environment })
const app = createApp({ environment, db })

app.listen(environment.PORT, () => {
  console.log(`Server listening to port ${environment.PORT}`)
})
