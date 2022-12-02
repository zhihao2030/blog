import { createPinia } from 'pinia'
//import piniaPersist from 'pinia-plugin-persistedstate'
//pinia-plugin-persistedstate

const store = createPinia()
//store.use(piniaPersist)
export default function setupStore(app) {
  app.use(store)
}

export {store}
