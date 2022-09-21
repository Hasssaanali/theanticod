import React, { Fragment } from 'react'
import { react } from "../Data/Data";
import Fade from 'react-reveal/Fade';


export default function Reacttab() {
  return (
    <Fragment>
      <Fade left>
        <div className='container-fluid'>
            <div className='row portfolio'>
            {react.map((data,index) => {
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
