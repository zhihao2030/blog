import { createPinia } from 'pinia'

export default function setupStore(app) {
  app.use(createPinia())
}
