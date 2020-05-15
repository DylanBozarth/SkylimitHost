import React from 'react';
import Carousel from 'nuka-carousel';

class Imageshowoff extends React.Component {
  render() {
    return (
      <Carousel>
        <img alt="a" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"  /> 
        <img alt="a" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img  alt="a"src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img  alt="a"src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img  alt="a"src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img alt="a" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
export default Imageshowoff