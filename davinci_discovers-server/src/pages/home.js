import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../graphics/slides0.jpg';
import slide2 from '../graphics/slides1.jpg';
import slide3 from '../graphics/slides2.jpg';

//import SimpleImageSlider from "react-simple-image-slider";
// Slideshow source code: https://www.npmjs.com/package/react-simple-image-slider

const Home = () => {
  // const slideshow = [
  //   { URL: "https://www.gannett-cdn.com/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG" },
  //   { URL: "davinci_discovers-server/src/graphics/slides1.jpg" },
  //   { URL: "davinci_discovers-server/src/graphics/slides2.jpg" },
  // ];
  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  const images = [
    slide1, slide2, slide3,
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

      {/* <SimpleImageSlider
        width={1200}
        height={400}
        images={slideshow}
        showBullets={true}
        showNavs={true}
      /> */}
    </div>
  );
};

export default Home;