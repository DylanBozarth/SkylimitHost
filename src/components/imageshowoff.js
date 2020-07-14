import React from 'react';
import Carousel from 'nuka-carousel';
class Imageshowoff extends React.Component {
  render() {
    return (
      <Carousel cellAlign="center" slideWidth={0.90}>
        <img alt="homepageimage"   height="400px" src={require("./images/homepage1.png")} /> 
        <img alt="homepageimage"   height="400px" src={require("./images/homepage2.png")}  />
        <img alt="homepageimage"  height="400px" src={require("./images/homepage3.png")}  />
        <img alt="homepageimage"  height="400px" src={require("./images/homepage4.png")}  />
      </Carousel>
    );
  }
}
export default Imageshowoff