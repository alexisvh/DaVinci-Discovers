import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Feed from './pages/Feed';


const App = () => (
  <Router>
    <h1 class="box">DaVinci Discovers</h1>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/feed' element={<Feed />} />
    </Routes>
  </Router>
);

export default App;
