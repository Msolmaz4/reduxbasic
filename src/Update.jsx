import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/UserReducer'




const Update = () => {
  
    const {id} = useParams()
    //console.log(id)
    //burada tum kullanicalir alairy selectorle
    const users = useSelector((state)=>state.users)
    //mevcut kullaniciyi bulmak icin
    const existingUser = users.filter(f=> f.id == id)
    const {name,email} = existingUser[0]
    const [uname,setName] = useState(name)
    const [uemail,setEmail]= useState(email)
    const dispatch = useDispatch()
    const navi =useNavigate()


    const handleUpdate =(e)=>{
        e.preventDefault()
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navi("/")

    }


  return (
    <main className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className='w-50 border bg-secondary text-white p-5'>

   
<form onSubmit={handleUpdate} >
  
    <h1 className="h3 mb-3 fw-normal">Update User</h1>

    
    <div className="form-floating">
      <input type="text" class="form-control" name='name'  value={uname} placeholder="name " onChange={(e)=>setName(e.target.value)}/>
      <label for="floatingPassword">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" class="form-control" name='email' value={uemail}  onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
   
    
    <button className="btn btn-primary w-100 py-2" type="submit " >Update</button>
  
  </form>

  </div>
  
        
    </main>
  )
  
}

export default Update