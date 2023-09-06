import { HYDRATE } from 'next-redux-wrapper'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchDataAction } from '../actions/fetchDataAction'

const initialState: any[] = []

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<{ data: any[] }>) => {
      return [...action.payload.data]
    },
    [fetchDataAction.fulfilled.type]: (state, action: PayloadAction<{ data: any[] }>) => {
      return [...action.payload.data]
    }
  }
})

export default dataSlice.actions
