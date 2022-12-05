import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Feed from './pages/feed';
import LogIn from './pages/login'
import logo1 from './graphics/DALogo1.png';
import { Image } from './components/HomeElements';

const App = () => {
  
  return(
    <Router>
    <h1 class="box">
      <Image src={logo1} alt='logo' ></Image>
      </h1>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/feed' element={<Feed />} />
      <Route exact path='/login' element={<LogIn />} />
    </Routes>
    
  </Router>
  

  )
};

export default App;
