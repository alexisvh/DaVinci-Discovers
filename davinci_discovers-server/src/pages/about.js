import React from 'react';
import val from '../aboutpics/val.jpeg';
import alexis from '../aboutpics/alexis.jpeg'
import luke from '../aboutpics/luke.jpg'
import hanna from '../aboutpics/hanna.PNG'
const About = () => {
  return (
    <div className='about'>
      <h2>Meet the Team</h2>
        <p>
          <br></br>
          Hi, we are Team Davinci Discovers. We created this
          website for our Software Design & Development 
          class at RPI. We wanted to create a tool for 
          art enthusiasts to find and learn more about a 
          artwork or artist they find interesting. We hope 
          you have enjoy learning and exploring new art you
          may not have known about before. Happy discovery!
        </p>
      <div class="py-5 team4">
        <div class="container">
          <div class="row justify-content-center mb-4">
            <div class="col-md-7 text-center">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-4">
              <div class="row">
                <div class="col-md-12">
                  <img src={val} alt="wrapkit" class="img-fluid rounded-circle" />
                </div>
                <div class="col-md-12 text-center">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Val Villanueva-Ruiz</h5>
                    <h6 class="subtitle mb-3">Developer</h6>
                    <p> Computer Science, class of 2024</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div class="row">
                <div class="col-md-12">
                  <img src={alexis} alt="wrapkit" class="img-fluid rounded-circle" />
                </div>
                <div class="col-md-12 text-center">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Alexis Hernandez </h5>
                    <h6 class="subtitle mb-3">Developer</h6>
                    <p> Computer Science, class of 2024 </p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div class="row">
                <div class="col-md-12">
                  <img src={hanna} alt="wrapkit" class="img-fluid rounded-circle" />
                </div>
                <div class="col-md-12 text-center">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Hanna Jin</h5>
                    <h6 class="subtitle mb-3">Developer</h6>
                    <p>Computer Science, class of 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4">
              <div class="row">
                <div class="col-md-12">
                  <img src={luke} alt="wrapkit" class="img-fluid rounded-circle" />
                </div>
                <div class="col-md-12 text-center">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Luke Hammel</h5>
                    <h6 class="subtitle mb-3">Developer</h6>
                    <p>Computer Science, class of 2023</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
