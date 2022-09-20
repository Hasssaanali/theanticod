import Carousel from 'react-bootstrap/Carousel';
import { banner } from '../Data/Data'


 function CarouselFadeExample() {
  

  return (
    <div data-aos="fade-down"  data-aos-duration="2000">
    <Carousel fade interval={2000} >

{banner.map((data) => {
return (
      <Carousel.Item key={data.key}>
        <img className="d-block w-100" src={data.image} alt="First slide" />
        <Carousel.Caption>
          <h3>{data.heading}</h3>
          <p>{data.text}</p>
          <span className='banner-btn'>Check It Out</span>
        </Carousel.Caption>
      </Carousel.Item>
)
})}

    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;