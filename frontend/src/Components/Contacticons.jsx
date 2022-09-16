import React, { Fragment } from 'react'

export default function Contacticons() {
  return (
    <Fragment>
        <div className='container contacticons'>
            <div className='row'>
                <div className='col-sm-4'>
                <div data-aos="fade-left" data-aos-duration="2000">
                <i class="fa fa-mobile"></i>
                <p>Call us Now</p>
                <p><a href='tel:+923022049921'>+92 302 2049921</a></p>
                </div>
                </div>

                <div className='col-sm-4'>
                <div data-aos="fade-down" data-aos-duration="2000">
                <i class="fa fa-envelope"></i>
                <p>Mail Us</p>
                <p><a href='mailto:Info@theanticod.com'>Info@theanticod.com</a></p>
                </div>
                </div>

                <div className='col-sm-4' >
                <div data-aos="fade-right" data-aos-duration="2000">
                <i class="fa fa-whatsapp"></i>
                <p>Instant Chat ?</p>
                <p><a href='https://wa.me/+923022049921' target="_blank">Whatsapp us</a></p>
                </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
