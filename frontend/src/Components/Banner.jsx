import Carousel from 'react-bootstrap/Carousel';
import { banner } from '../Data/Data'
import { Link } from "react-router-dom"


 function CarouselFadeExample() {
  

  return (
    <div >
    <Carousel fade interval={2000} >

{banner.map((data) => {
return (
      <Carousel.Item key={data.key}>
        <img className="d-block w-100" src={data.image} alt="First slide" />
        <Carousel.Caption data-aos="fade-down"  data-aos-duration="2000">
          <h3>{data.heading}</h3>
          <p>{data.text}</p>
          <Link to="/services"><span className='banner-btn'>Check Now</span></Link>
        </Carousel.Caption>
      </Carousel.Item>
)
})}

    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;