
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function Home() {

const users = useSelector((state)=>state.users)
//console.log(users)

  return (
    <div className="contanier">

  <Link to="/create" className='btn btn-success my-3'> create +</Link>
  <table className='table' >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
     {users.map((user,index)=>(
      <tr key={index}>
        <td>  {user.id} </td>
        <td>  {user.name} </td>
        <td>  {user.email} </td>
        <td>
          <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary' >  Edit </Link>
          <button  onClick= {()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>   Delete </button>
        </td>
      </tr>

     ))}


  </tbody>
</table>

    </div>
  );
}

export default Home;