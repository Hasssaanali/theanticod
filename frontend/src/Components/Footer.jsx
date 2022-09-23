import React from 'react'
import { Fragment } from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom"


export default function Footer() {
  return (
    <Fragment>
        <div className='container-fluid footer'>
            <div className='row'>

                <div className='container'>
                    <div className='row'>

                        <div className='col-sm-4 logobar'>
                            <Link to="/" className='myfooterlogo'><img src="../img/logo3.png" />  {  <Typewriter options={{  strings: ['The Anticod'],  autoStart: true,  loop: true,  }} /> }</Link>
                            <p>We provide the uppermost quality to our clients and make them believe in us. Our platform connects us to you and provides opportunities for relations with our support services 24/7.</p>
                            <span onClick={()=> window.open("https://www.facebook.com/", "_blank")}><i className="fa fa-facebook"></i></span>
                            <span onClick={()=> window.open("https://www.linkedin.com/login", "_blank")}><i className="fa fa-linkedin"></i></span>
                            <span onClick={()=> window.open("https://www.youtube.com/", "_blank")}><i className="fa fa-twitter"></i></span>
                            <span onClick={()=> window.open("https://twitter.com/i/flow/login", "_blank")}><i className="fa fa-youtube"></i></span>
                        </div>

                        <div className='col-sm-4 logobar1'>
                            <span className='myfooterlogo'>{  <Typewriter options={{  strings: ['Quick Links'],  autoStart: true,  loop: true,  }} /> }</span>
                            <ul>
                            <Link to="/about"><li><i className="fa fa-bullseye"></i>About Us</li></Link>
                            <Link to="/articles"><li><i className="fa fa-bullseye"></i>Articles</li></Link>
                            <Link to="/services"><li><i className="fa fa-bullseye"></i>Services</li></Link>
                            <Link to="/services"> <li><i className="fa fa-bullseye"></i>Web Development</li></Link>
                            <Link to="/services"> <li><i className="fa fa-bullseye"></i>Video Animation</li></Link>
                            <Link to="/contactus"><li><i className="fa fa-bullseye"></i>Contact Us</li></Link>
                            </ul>
                        </div>

                        <div className='col-sm-4 logobar3'>
                            <span className='myfooterlogo'>{  <Typewriter options={{  strings: ['Contact Us'],  autoStart: true,  loop: true,  }} /> }</span>
                            <div className='contact'><i className="fa fa-map-marker"></i><span className='location'><b>Location:</b> Commercial Plot, Street Number 1, Block 8 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 74500</span></div>
                            <div className='contact'><i className="fa fa-envelope"></i><span className='location'><p onClick={()=> window.open("mailto:Info@theanticod.com")}><b>Services@theanticod.com</b></p></span></div>
                            <div className='contact'><i className="fa fa-whatsapp"></i><span className='location'><p onClick={()=> window.open("https://api.whatsapp.com/send?phone=", "_blank")}><b>Instant Contact</b></p></span></div>
                       </div>

                       

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
