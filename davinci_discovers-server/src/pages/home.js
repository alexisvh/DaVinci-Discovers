import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
// Slideshow source code: https://www.npmjs.com/package/react-simple-image-slider


const Home = () => {
  const slideshow = [
    { src: "C:/Users/Val/Documents/GitHub/DaVinci-Discovers/davinci_discovers-server/src/graphics/slides0.jpg" },
    { src: "davinci_discovers-server/src/graphics/slides1.jpg" },
    { src: "davinci_discovers-server/src/graphics/slides2.jpg" },
  ];
  return (
    <div className='home'>
      <h2>Find art that inspires you.</h2>
      <SimpleImageSlider
        width={1200}
        height={400}
        images={slideshow}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Home;