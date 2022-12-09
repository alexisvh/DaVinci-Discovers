import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../graphics/slides0.jpg';
import slide2 from '../graphics/slides1.jpg';
import slide3 from '../graphics/slides2.jpg';

// Slideshow source code: https://react-slideshow-image.netlify.app/?path=/story/introduction--page


const Home = () => {
  const images = [
    slide1, slide2, slide3
  ];
  return (
    <div className='home'>
      <h2>Find art that inspires you.</h2>
      
      <Slide>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                  {/* <span>Slide 1</span> */}
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  {/* <span>Slide 2</span> */}
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  {/* <span>Slide 3</span> */}
              </div>
          </div>
          
      </Slide>
    </div>
  );
};

export default Home;