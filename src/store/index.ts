import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { domainReducer } from './domain'
import { uiReducer } from './ui'

const rootReducer = combineReducers({
  ui: uiReducer,
  domain: domainReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const useStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false
      })
    }
  })
}
