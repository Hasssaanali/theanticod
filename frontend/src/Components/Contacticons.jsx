import React, { Fragment } from 'react'
import { Link ,useNavigate} from "react-router-dom"

export default function Contacticons() {

  return (
    <Fragment>
        <div className='container contacticons'>
            <div className='row'>
                <div className='col-sm-4'>
                <div data-aos="fade-left" data-aos-duration="2000">
                <i className="fa fa-mobile"></i>
                <p>Call us Now</p>
                <p>+92 302 2049921</p>
                </div>
                </div>

                <div className='col-sm-4'>
                <div data-aos="fade-down" data-aos-duration="2000">
                <i className="fa fa-envelope"></i>
                <p>Mail Us</p>
                <p onClick={()=> window.open("mailto:Info@theanticod.com")}>Info@theanticod.com</p>
                </div>
                </div>

                <div className='col-sm-4' >
                <div data-aos="fade-right" data-aos-duration="2000">
                <i className="fa fa-whatsapp"></i>
                <p>Instant Chat ?</p>
                <p onClick={()=> window.open("https://api.whatsapp.com/send?phone=", "_blank")}>Whatsapp</p>
                </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
