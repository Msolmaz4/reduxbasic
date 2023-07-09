
import React from 'react'
import Home from './Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Create from './Create';



function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
