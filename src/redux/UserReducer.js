import { createSlice } from '@reduxjs/toolkit'
import { UserList } from '../Data'

//boyle yapinca dikkat et cekerekn gelmiyor buead iki dafa yaz users.users gibi
{/*
const initialState = {
  users: UserList
}*/}





export const UserSlice = createSlice({
    name: 'users',
    initialState:UserList,
    reducers: {
      
    },
  })
  
  // Action creators are generated for each case reducer function
  //export const { } = UserReducerSlice.actions
  
  export default UserSlice.reducer