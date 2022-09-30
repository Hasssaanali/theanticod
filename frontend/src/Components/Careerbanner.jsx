import React, { Fragment } from 'react'


export default function Careerbanner() {
  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 abtbanner'>
                    <h2>Career</h2>
                    <p> Our passion is to improve Return on Investment using tested business and marketing strategies.</p>
                </div>
            </div>

            <div className='container'>
            <div className='row aboutsec' data-aos="fade-right"  data-aos-duration="2000">
                <div className='col-sm-12 about career' data-aos="fade-right"  data-aos-duration="2000">
                    <h2> Challenge Yourself - <span className='gry'>Join Our Team</span></h2>
                    <p><b>Imagine. <span className='gry'>Innovate. </span>Inspire.</b></p>
                    <p>Breaking geographical barriers and creating a flexible workspace by hiring globally.</p>
                </div>
            </div>
        </div>
        </div>
    </Fragment>
  )
}