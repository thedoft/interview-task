import { HYDRATE } from 'next-redux-wrapper'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchDataAction } from '../actions/fetchDataAction'

export interface IData {
  id: string
  type: 'visa' | 'mastercard'
  name: string
  createdAt: string
}

const initialState: IData[] = []

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<{ data: IData[] }>) => {
      return [...action.payload.data]
    },
    [fetchDataAction.fulfilled.type]: (state, action: PayloadAction<{ data: IData[] }>) => {
      return [...action.payload.data]
    }
  }
})

export default dataSlice.actions
