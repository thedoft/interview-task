import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDataAction = createAsyncThunk('data', async () => {
  let json = null

  const response = await fetch('')

  if (response.ok) {
    json = await response.json()
  } else {
    console.error('Ошибка ' + response.status)
  }

  return { data: json }
})
