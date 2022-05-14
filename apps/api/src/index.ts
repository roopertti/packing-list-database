import { createApp } from '~/app'

const app = createApp()

app.listen(8080, () => {
  console.log(`Server listening to port ${8080}`)
})
