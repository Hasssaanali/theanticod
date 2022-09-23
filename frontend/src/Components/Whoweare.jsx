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
                    <Link to="/about"><span className='white-btn'>Learn More</span></Link>
                </div>

                <div className='col-sm-6 abtimg' data-aos="fade-left"  data-aos-duration="2000">
                    <img src='https://res.cloudinary.com/anticod/image/upload/v1663916528/img/abt_bzaxeh.jpg' alt='image' width="100%"/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
