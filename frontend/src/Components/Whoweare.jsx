import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

export default function Whoweare() {
  return (
    <Fragment>
        <div className='container'>
            <div className='row aboutsec' data-aos="fade-right"  data-aos-duration="2000">
                <div className='col-sm-6 about' data-aos="fade-right"  data-aos-duration="2000">
                    <h2> Who We Are</h2>
                    <p>Alone we can do So little together we can do so much Instead of following the trend, we create trends that everyone wants to follow. We pay attention to the voice of the market, brands and customers and that’s where our success comes from. It’s not client and agency, it’s a collective us to turn the brand into a legend.</p>
                    <Link to="/about"  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}><span className='white-btn'>Learn More</span></Link>
                </div>

                <div className='col-sm-6 abtimg' data-aos="fade-left"  data-aos-duration="2000">
                    <img src='https://hostedsitedemo.com/rent/allimages/abt.jpg' alt='image' width="100%"/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
