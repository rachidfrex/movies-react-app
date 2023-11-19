import React from 'react'
import Home from './components/home';
import Nav from './components/nav';
import {Routes ,Route} from 'react-router-dom'
import Movies_datails from './components/movies_dai';
function App() {
  
 
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/"  element={< Home/>}/> 
        <Route path="/Movies_datails/:id"  element={< Movies_datails />}/> 
      </Routes>
      
      
      
    </div>
    
  )
}

export default App
