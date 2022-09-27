import React, { Fragment } from 'react'
import { Link } from "react-router-dom"


export default function Servicesbanner() {
  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 abtbanner' data-aos="fade-down" data-aos-duration="2000">
                    <h2>Our Services</h2>
                    <p> Our passion is to improve Return on Investment using tested business and marketing strategies.</p>
                </div>
            </div>

            <div className='container'>
            <div className='row aboutsec'>
                <div className='col-sm-6 about' data-aos="fade-right"  data-aos-duration="2000">
                    <h2> White Label Web Development Agency</h2>
                    <p>Rely on our White Label Development Service for well-coded WordPress sites for your clients, always delivered on-time and within your budget.Whether your development team is already maxed out and you need extra resources or you don’t want to maneuver the complex and dynamic world of web programming, we can still help you grow your bottom line.</p>
                    <Link to="/contactus"  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}><span className='white-btn'>Contact Now</span></Link>
                </div>

                <div className='col-sm-6 abtimg' data-aos="fade-left"  data-aos-duration="2000">
                    <img src='https://res.cloudinary.com/anticod/image/upload/v1663916557/img/service_eiejgk.png' alt='image' width="100%"/>
                </div>
            </div>
            <div className='row text-center' data-aos="fade-up"  data-aos-duration="2000">
            <h2> Chose Your Desire Portfolio 🙂</h2>
            </div>
        </div>
        </div>
    </Fragment>
  )
}