import React, { Fragment } from 'react'
import { NumberWidgetCounter } from 'react-number-counter-widget';

export default function Aboutexpert() {
  return (
    <Fragment>
        <div className='container'>
            <div className='row aboutsec'>
                <div className='col-sm-6 about' data-aos="fade-right"  data-aos-duration="2000">
                    <h2> Digital Experts At Your Service</h2>
                    <p>The objective is to provide & improve revenue generating complete online business solution.</p>
                    <p>Founded in 2020 by Successful Entrepreneurs, THE ANTICOD has grown from a set of Business Consultants to a one stop solution for all your online business needs.</p>
                    <div className='row'>
                        <div className='col-sm-6 counter'>
                        <NumberWidgetCounter key={'111'} number={62} useclassName={''} timeMs={6000}/><p><b>%</b> Annual Retention Success Ratio</p>
                        </div>
                        <div className='col-sm-6 counter'>
                        <NumberWidgetCounter key={'222'} number={32} useclassName={''} timeMs={6000} /><p>Active Clients & Projects</p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-6 abtimg' data-aos="fade-left"  data-aos-duration="2000">
                    <img src='https://res.cloudinary.com/anticod/image/upload/v1663916565/img/aboutside_ibtmhg.jpg' alt='image' width="100%"/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}