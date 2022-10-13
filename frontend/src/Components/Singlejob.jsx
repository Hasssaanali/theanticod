import React, { Fragment, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jobs } from '../Data/Data';
import { useParams, Link } from "react-router-dom";

export default function Singlejob() {
  const { key } = useParams();
  const abc = key
  // console.log(key);


  const [formData, setdata] = useState(
    {
      name: '',
      email: '',
      job: "",
      message: '',
      resume: '',
    }
  )

  const handlechange = (event) => {
    setdata({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const SubmitDATA = (e) => {
    e.preventDefault();
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (emailregex.test(formData.email)) {

      toast("Form Has Been Submitted! We will get Back To You 🙂");
      const jobinput = document.querySelector('#jobinput').value; 
      const obj = {
        ...formData,
        job: jobinput
      }
      
      console.log(obj)
      setdata( {
        name: '',
        email: '',
        message: '',
        resume: '',
      })

      
    }
    else if (formData.email == "") {
      toast("Invalid E-mail Address")
  }

    else {
      toast("Email Field Are Invalid");
    }

  }

  return (
    <Fragment>
      <div className='container-fluid'>
        {jobs.map((items) => {
          return (
            <div key={items.id}>
              {
                items.designation.map((data) => {
                  return (


                    <div key={data.key}>

                      {data.key === abc ?
                        <>
                          <div className='row' key={data.key}>
                            <div className='col-sm-12 abtbanner'>
                              <h2>{data.depart}</h2>
                              <p> Take A Step Towards Your Bright Future With Us.</p>
                            </div>
                          </div>

                          <div className='container'>
                            <div className='row singlejob'>
                              <div className='col-sm-4' data-aos="fade-left" data-aos-duration="2000">
                                <h2>Job Type</h2>
                                <ul className='jobdes'>
                                  <li><i className="fa fa-tasks" aria-hidden="true"></i><b>Job Type: </b>{data.jobtype}</li>
                                  <li><i className="fa fa-money" aria-hidden="true"></i><b>Salary: </b>{data.salary}</li>
                                </ul>
                              </div>
                              <div className='col-sm-4' data-aos="fade-down" data-aos-duration="2000">
                                <h2>Qualification</h2>
                                <ul className='jobdes'>
                                  <li><i className="fa fa-university"></i>{data.qualifucationuni}</li>
                                  <li><i className="fa fa-university"></i>{data.qualifucationextra}</li>
                                </ul>
                              </div>

                              <div className='col-sm-4' data-aos="fade-right" data-aos-duration="2000">
                                <h2>Hiring Insights</h2>
                                <ul className='jobdes'>
                                  <li><i className="fa fa-user"></i>{data.insights}</li>
                                  <li><i className="fa fa-user"></i><b>Job Activity: </b>{data.activity}</li>
                                </ul>
                              </div>



                              <div className='col-sm-6' data-aos="fade-left" data-aos-duration="2000">
                                <h2>Job Description</h2>
                                <p>{data.jobdesc}</p>
                              </div>

                              <div className='col-sm-6' data-aos="fade-right" data-aos-duration="2000">
                                <h2>Apply Now</h2>


                                <form >
                                  <div className="form-row">
                                    <div className="form-group col-md-12">
                                      <input value={formData.name} name="name" type="text" className="form-control" id="inputEmail4" placeholder="Full Name" onChange={handlechange} required />
                                    </div>
                                    <div className="form-group col-md-12">
                                      <input value={formData.email} name="email" type="text" className="form-control" id="inputPassword4" placeholder="E-mail Address" onChange={handlechange} required />
                                    </div>
                                  </div>
                                  <div className="form-group col-md-12">
                                    <input name="job"  type="text" className="form-control" id="jobinput" placeholder="Career Faculty" value={data.jobtitle} onChange={handlechange} disabled />
                                  </div>
                                  <div className="form-group">
                                    <textarea value={formData.message} name='message' type="text" className="form-control" id="inputAddress2" placeholder="Your Message" onChange={handlechange} />
                                    <div className="form-group resume">
                                      <input value={formData.resume} name="resume" type="file" className="form-control" id="file" accept="application/pdf" placeholder="resume" onChange={handlechange} required />
                                    </div>
                                  </div>

                                  <button onClick={SubmitDATA}>Apply Now</button>

                                  <ToastContainer />

                                </form>
                              </div>
                            </div>
                          </div>
                        </>
                        : null}
                    </div>







                  )
                })
              }
            </div>
          )
        })
        }




      </div>

    </Fragment>
  )
}