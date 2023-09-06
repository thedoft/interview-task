import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../index'

const selectData = (state: AppState) => state.data

export const dataSelector = createSelector(selectData, (data) => data)
