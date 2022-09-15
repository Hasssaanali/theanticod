
import React, {Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { reviews } from "../Data/Data";

export default function Reviews() {
  return (
    <Fragment>
        <div className='container'>
            <div className='row review'>

                <div className='col-sm-8' data-aos="fade-right"  data-aos-duration="2000">
                    <h2>Client's Reviews</h2>
                    <p>Alone we can do So little together we can do so much Instead of following the trend, we create trends that everyone wants to follow.</p>
                </div>

                <div className='col-sm-12' data-aos="fade-left"  data-aos-duration="2000">
                    
                    <Swiper loop={true} slidesPerView={3} spaceBetween={60}  centeredSlides={false}  autoplay={{ delay: 2500, pauseOnMouseEnter: true,  disableOnInteraction: false,  }} pagination={{  clickable: true, }} navigation={true}  modules={[Autoplay, Pagination, Navigation]}  className="mySwiper" >
                        {reviews.map((data, index) => {
                        return (
                                <SwiperSlide key={index}>
                                    <div className="row testimonial">
                                        <div className="col-sm-5">
                                            <img src={data.image} alt="testimonials" className="avatar"/>
                                        </div>
                                        <div className="col-sm-7">
                                            <h4>{data.heading}</h4>
                                            <p>{data.company}</p>
                                        </div>
                                        <div className="col-sm-12 avatar-review">
                                        <p>{data.text}</p>
                                        <img src="../img/star.png" alt="testimonials" className="stars"/>
                                        </div>
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
