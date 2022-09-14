
import React, {Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { services } from "../Data/Data";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Servicesslide() {
  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row slidesec'>

                <div className='col-sm-3' data-aos="fade-right"  data-aos-duration="2000">
                    <h2>Services We Prrovide</h2>
                    <p>Alone we can do So little together we can do so much Instead of following the trend, we create trends that everyone wants to follow. We pay attention to the voice of the market, brands and customers and that’s where our success comes from. It’s not client and agency, it’s a collective us to turn the brand into a legend.</p>
                    <a className='white-btn' href='#'>View All</a>
                </div>

                <div className='col-sm-9' data-aos="fade-left"  data-aos-duration="2000">

                    <Swiper slidesPerView={3} spaceBetween={30}  centeredSlides={true}  autoplay={{ delay: 2500, pauseOnMouseEnter: true,  disableOnInteraction: false,  }} pagination={{  clickable: true, }} navigation={true}  modules={[Autoplay, Pagination, Navigation]}  className="mySwiper" >
                            {services.map((data, index) => {
                                 return (
                                <SwiperSlide key={index}>
                                    <div className="slides" style={{ backgroundImage: `url(  ${data.image}  )`}}>
                                        <span>
                                        <h2>{data.heading}</h2>
                                        <p>{data.text}</p>
                                        <a className='white-btn' href='#'>Visit Now</a>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                    )
                                    })}
                    </Swiper>
                </div>


            </div>
        </div>
    </Fragment>
  )
}
