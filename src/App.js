import React from 'react'; 

import 'D:/react/website/src/App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/inc/Navbar'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
