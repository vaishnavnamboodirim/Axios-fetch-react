import React from 'react';
import './App.css';
import Nav from './Nav'
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/shop" element={<Shop/>}/>
    </Routes>
    </div>
    </Router>
  );
}

const Home =() =>(
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
