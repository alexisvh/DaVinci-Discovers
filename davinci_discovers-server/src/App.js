import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Feed from './pages/feed';
import Searchbar from './components/SearchBar/Searchbar';

const App = () => (
  <Router>
    <Navbar/>
    <Searchbar/>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/feed' element={<Feed />} />
    </Routes>
  </Router>
);

export default App;
