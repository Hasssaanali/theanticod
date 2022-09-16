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
                            <a href='' className='myfooterlogo'><img src="../img/logo3.png" />  {  <Typewriter options={{  strings: ['The Anticod'],  autoStart: true,  loop: true,  }} /> }</a>
                            <p>We provide the uppermost quality to our clients and make them believe in us. Our platform connects us to you and provides opportunities for relations with our support services 24/7.</p>
                            <a href="" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a href="" target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href="" target="_blank"><i className="fa fa-youtube"></i></a>
                        </div>

                        <div className='col-sm-4 logobar1'>
                            <a href='' className='myfooterlogo'>{  <Typewriter options={{  strings: ['Quick Links'],  autoStart: true,  loop: true,  }} /> }</a>
                            <ul>
                            <Link to="about"><li><i class="fa fa-bullseye"></i>About Us</li></Link>
                                <li><i class="fa fa-bullseye"></i>Web Development</li>
                                <li><i class="fa fa-bullseye"></i>UI/UX Design</li>
                                <li><i class="fa fa-bullseye"></i>Social Media Marketing</li>
                                <li><i class="fa fa-bullseye"></i>SEO Optimisation</li>
                                <li><i class="fa fa-bullseye"></i>Video Animation</li>
                                <li><i class="fa fa-bullseye"></i>Contact Us</li>
                            </ul>
                        </div>

                        <div className='col-sm-4 logobar3'>
                            <a href='' className='myfooterlogo'>{  <Typewriter options={{  strings: ['Contact Us'],  autoStart: true,  loop: true,  }} /> }</a>
                            <div className='contact'><i class="fa fa-map-marker"></i><span className='location'><b>Location:</b> Commercial Plot, Street Number 1, Block 8 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 74500</span></div>
                            <div className='contact'><i class="fa fa-envelope"></i><span className='location'><a href='mailto:Services@theanticod.com' target="_blank"><b>Services@theanticod.com</b></a></span></div>
                            <div className='contact'><i class="fa fa-whatsapp"></i><span className='location'><a href='https://wa.me/+923022049921' target="_blank"><b>Instant Contact</b></a></span></div>
                       </div>

                       

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
