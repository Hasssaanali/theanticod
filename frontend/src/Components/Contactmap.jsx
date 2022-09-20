import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactmap() {
    const [data, setdata] = useState(
        {
            name: '',
            email: '',
            subject: '',
            options: '',
            message: '',
        }
    )

    const handlechange = (event) => {
        setdata({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data)

    }

    const SubmitDATA = (e) => {
       if( data.email === ''){
        toast("Bherwe sab detail dal !");
       }
       else{
        e.preventDefault();
        console.log(data)
       }
        
    }
  return (
    <Fragment>
      
        <div className='container contactform'>
            <div className='row'>
                <div className='col-sm-6' data-aos="fade-right" data-aos-duration="2000">
                <iframe frameBorder="0" width="100%" height="700px" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                </div>

                {/* form */}
                
                <div className='col-sm-6 myform' data-aos="fade-left" data-aos-duration="2000">
                    <h2>Feel Free To Contact Us 🙂</h2>
                        <form > 
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                <input name="name" type="text" className="form-control" id="inputEmail4" placeholder="Full Name" onChange= {handlechange} required/>
                                </div>
                                <div className="form-group col-md-12">
                                <input name="email" type="text" className="form-control" id="inputPassword4" placeholder="E-mail Address" onChange= {handlechange}  required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input name="subject" type="text" className="form-control" id="inputAddress" placeholder="Subject" onChange= {handlechange}  required/>
                            </div>
                            <div className="form-group col-md-12">
                                <select name='options' id="inputState" className="form-control"  onChange={handlechange}>
                                    <option defaultValue='Chose'>Choose...</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="SEO Optimisation">SEO Optimisation</option>
                                    <option value="Video Animation">Video Animation</option>
                                </select>
                                </div>
                            <div className="form-group">
                                <textarea name='message' type="text" className="form-control" id="inputAddress2" placeholder="Your Message" onChange={handlechange} />
                            </div>
                            
                            <button onClick={SubmitDATA}>Send Now</button>
                            <ToastContainer/>

                        </form>
                </div>



            </div>
        </div>
    </Fragment>
    
  )
}
