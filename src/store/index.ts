import { createWrapper } from 'next-redux-wrapper'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { dataSlice } from './slices/dataSlice'

export const store = () =>
  configureStore({
    reducer: combineReducers({
      [dataSlice.name]: dataSlice.reducer
    }),
    devTools: process.env.NODE_ENV === 'development'
  })

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(store)
