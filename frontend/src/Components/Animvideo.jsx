import React, { Fragment } from 'react'
import { video } from "../Data/Data";
import Fade from 'react-reveal/Fade';

export default function Video() {
  return (
    <Fragment>
      <Fade left>
        <div className='container-fluid'>
            <div className='row portfolio'>
            {video.map((data,index) => {
            return (
                <div className='col-sm-3' key={index}>
                    <a href={data.link} target="_blank"><img src={data.image} alt-="portfolio" /><span>{data.name}</span></a>
                </div>
                )
            })}
            </div>
        </div>
        </Fade>
    </Fragment>
  )
}
