import React, { Fragment } from 'react'
import { woocommerce } from "../Data/Data";
import Slide from 'react-reveal/Slide';

export default function Woocommerce() {
  return (
    <Fragment>
        <Slide right>
            <div className='container-fluid'>
                <div className='row portfolio'>
                {woocommerce.map((data,index) => {
                return (
                    <div className='col-sm-3' key={index}>
                        <a href={data.link} target="_blank"><img src={data.image} alt-="portfolio" /><span>{data.name}</span></a>
                    </div>
                    )
                })}
                </div>
            </div>
        </Slide>
    </Fragment>
  )
}
