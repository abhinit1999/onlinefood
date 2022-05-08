import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='container'>
      {/* <h1>Food App </h1> */}


      <Router>
        <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={ <Cart /> } />
      <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      </Router>
      {/* <Home/> */}
      
  


    </div>
  );
}

export default App;

