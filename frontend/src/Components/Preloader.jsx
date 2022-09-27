import React, { Fragment } from 'react'
import Typewriter from 'typewriter-effect';

export default function Preloader() {
  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row preloader'>
            <div className='imagepre col-sm-12'><img src="../img/logo3.png"  data-aos="fade-down" data-aos-duration="2000"/>
            {<Typewriter options={{ strings: ['We appreciate Your Patience'], autoStart: true, loop: true,delay: 75, }} />}
            </div>
            </div>
        </div>
    </Fragment>
  )
}
