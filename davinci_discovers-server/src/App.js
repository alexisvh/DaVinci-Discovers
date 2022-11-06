import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';


const App = () => (
  <Router>
    <h1 class="box">DaVinci Discovers</h1>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About/>} />
    </Routes>
  </Router>
);

export default App;
