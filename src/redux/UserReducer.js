import { createSlice } from '@reduxjs/toolkit'
import { UserList } from '../Data'

const initialState = {
  users: UserList
}





export const UserReducerSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { } = UserReducerSlice.actions
  
  export default UserReducerSlice.reducer