import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider(props) {
  return (
    <Carousel>
      {props.images.map((item, index) => (
        <Carousel.Item interval="86400000">
          <img
            className="big-card-image"
            src={item}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

// return (
//   <div className='carousel'>
//     <div id="carousel1" class="carousel slide">
//       <div class="carousel-indicators">
//         {props.img.map((item, index) => (
//           <button type="button"
//             data-bs-target="carousel1"
//             data-bs-slide-to={index}
//             className={index === 0 ? "active" : ""}
//             aria-current={index === 0 ? "true" : undefined}
//             aria-label={`Slide ${index + 1}`}>
//           </button>
//         ))}
//       </div>
//       <div class="carousel-inner">
//         {props.img.map((item, index) => (
//           <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//             <img src={item} className="big-card-image" alt="Image"/>
//           </div>
//         ))}
//       </div>
//       <button class="carousel-control-prev" type="button" data-bs-target="carousel1" data-bs-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button class="carousel-control-next" type="button" data-bs-target="carousel1" data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//   </div>


export default Slider;
