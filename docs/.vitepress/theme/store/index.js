import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export default function setupStore(app) {
  const store = createPinia()
  store.use(piniaPluginPersist)
  app.use(store)
}
