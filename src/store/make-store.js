import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import { rootEpic } from './root-epics'
import { rootReducer } from './root-reducers'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function initStore (initialState = {}) {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger)
  const store = createStore(persistedReducer, initialState, reduxMiddleware)
  epicMiddleware.run(rootEpic)
  const persistor = persistStore(store)
  return { store, persistor }
}