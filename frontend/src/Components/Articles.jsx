import React, { Fragment, useRef, useState } from "react";
import { articles } from "../Data/Data";
import {Link} from 'react-router-dom'

export default function Articles() {

    return (
        <Fragment>
            <div className='container'>
                <div className='row review'>

                    <div className='col-sm-8' data-aos="fade-right" data-aos-duration="2000">
                        <h2>Articles Toward Digital World</h2>
                        <p>Alone we can do So little together we can do so much Instead of following the trend, we create trends that everyone wants to follow.</p>
                    </div>

                    <div className='col-sm-12' data-aos="fade-left" data-aos-duration="2000">
                        <div className="row">
                            {articles.slice(0, 3).map((data) => {

                                return (

                                    <div className="col-sm-4 article" key={data.key}>
                                        <img src={data.feature} alt="article" className='articlebg'/>
                                        <img src={data.avatar} alt="testimonials" className="avatar" />
                                        <h4>{data.heading}</h4>
                                         <p>{data.excerpt}</p>
                                        <p><b>Author</b>:{data.Author}</p>
                                        <Link to={`/singlearticle/${data.key}`}  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                                          <span href="" className='white-btn'>Check It Out</span>
                                        </Link>
                                    </div>

                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}
