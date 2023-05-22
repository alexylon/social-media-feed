import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '0', name: 'John Smith'},
    {id: '1', name: 'Emily Johnson'},
    {id: '2', name: 'Michael Davis'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer
