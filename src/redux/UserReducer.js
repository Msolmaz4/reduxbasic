import { createSlice } from '@reduxjs/toolkit'
import { UserList } from '../Data'

//boyle yapinca dikkat et cekerekn gelmiyor buead iki dafa yaz users.users gibi
{/*
const initialState = {
  users: UserList
}*/}

//burada dikkat edilecek olan statet yalamak icin useSelector 
//reducer icindekin yaklamak icin dispatch



export const UserSlice = createSlice({
    name: 'users',
    initialState:UserList,
    reducers: {
      
        addUser:(state,action)=>{
            console.log(action)
        }
    
      
    },
  })
  
  // Action creators are generated for each case reducer function
  //export const { } = UserReducerSlice.actions
  export const {addUser} = UserSlice.actions
  export default UserSlice.reducer