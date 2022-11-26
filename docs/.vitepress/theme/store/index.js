import { createPinia } from 'pinia'
//import piniaPersist from 'pinia-plugin-persist'
//pinia-plugin-persistedstate
export default function setupStore(app) {
  const store = createPinia()
  app.use(store)
}
