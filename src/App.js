
import React from 'react'
import { useSelector } from 'react-redux'


function App() {

const users = useSelector((state)=>state.users)
//console.log(users)

  return (
    <div className="contanier">

  <h2 className='btn btn-success my-3'> create +</h2>
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
    
  </tbody>
</table>

    </div>
  );
}

export default App;
