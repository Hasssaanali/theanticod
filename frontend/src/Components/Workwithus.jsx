import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { growth, workwithus } from "../Data/Data";


export default function Workwithus() {
    return (
        <Fragment>
{/* work section */}
            <div className='container'>
                <div className='row worksec'>
                    <div className='col-sm-12 worktext' data-aos="fade-right" data-aos-duration="2000">
                        <h2> Why should you work with us?</h2>
                        <p>The objective is to provide & improve revenue generating complete online business solution.</p>
                    </div>

                    <div className='col-sm-12' data-aos="fade-left" data-aos-duration="2000">
                        <Swiper loop={false} slidesPerView={3} spaceBetween={60} centeredSlides={false} autoplay={{ delay: 2500, pauseOnMouseEnter: true, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} breakpoints={{  "@0.00": { slidesPerView: 1, spaceBetween: 10, }, "@0.75": {slidesPerView: 2,spaceBetween: 30,}, "@1.00": { slidesPerView: 3,spaceBetween: 30,},"@1.50": { slidesPerView: 3, spaceBetween: 30,},}} className="mySwiper" >
                            {workwithus.map((data) => {
                                return (
                                    <SwiperSlide key={data.key}>
                                        <div className="row testimonial workwithus">
                                            <div className="col-sm-12">
                                                <p>{data.text}</p>
                                            </div>
                                            <div className="col-sm-12 avatar-review">
                                                <h4>{data.heading}</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>

{/* Alone Section */}
                    <div className='row aboutsec'>
                        <div className='col-sm-6 abtimg' data-aos="fade-left" data-aos-duration="2000">
                            <img src='https://hostedsitedemo.com/rent/allimages/team.jpg' alt='image' width="100%" />
                        </div>
                        <div className='col-sm-6 about' data-aos="fade-right" data-aos-duration="2000">
                            <h2>Alone We Can Do So Little Together We Can Do So Much.</h2>
                            <p>Instead of following the trend, we create trends that everyone wants to follow. We pay attention to the voice of the market, brands and customers and that’s where our success comes from. It’s not client and agency, it’s a collective us to turn the brand into a legend.</p>
                        </div>
                    </div>

{/* Growth Section */}
                    <div className='col-sm-12 worktext' data-aos="fade-right" data-aos-duration="2000">
                        <h2> Growth Hacking Made Simple</h2>
                        <p>A Step-by-Step Guide</p>
                    </div>

                    <div className='col-sm-12' data-aos="fade-left" data-aos-duration="2000">
                        <Swiper loop={false} slidesPerView={3} spaceBetween={60} centeredSlides={false} autoplay={{ delay: 2500, pauseOnMouseEnter: true, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} breakpoints={{  "@0.00": { slidesPerView: 1, spaceBetween: 10, }, "@0.75": {slidesPerView: 2,spaceBetween: 30,}, "@1.00": { slidesPerView: 3,spaceBetween: 30,},"@1.50": { slidesPerView: 3, spaceBetween: 30,},}} className="mySwiper" >
                            {growth.map((data) => {
                                return (
                                    <SwiperSlide key={data.key}>
                                        <div className="row testimonial growth">
                                            <div className="col-sm-12">
                                                <img src={data.image} alt='audit' />
                                                <p>{data.text}</p>
                                            </div>
                                            <div className="col-sm-12 avatar-review">
                                                <h4>{data.heading}</h4>
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
