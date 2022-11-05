import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <div>
    <h1 class="box">DaVinci Discovers</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Find art that inspires you.</h1>
    <h1>Find art that inspires you.</h1>
    <h1>Find art that inspires you.</h1>
    <h1>Find art that inspires you.</h1>
  </div>
);

const About = () => (
  <div className='about'>
    <h2>Meet the Team</h2>
      <p>
        Hi, we are Team Davinci Discovers. We created this
        website for our Software Design & Development 
        class at RPI. We wanted to create a tool for 
        art enthusiasts to find and learn more about a 
        artwork or artist they find interesting. We hope 
        you have enjoy learning and exploring new art you
        may not have known about before. Happy discovery!
    </p>
  </div>
);

const Main = () => (
  <Routes>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='./about' component={About}></Route>
  </Routes>
);



export default App;
