import React, { Fragment } from 'react'
import Mainservices from '../Components/Mainservices'
import Servicesbanner from '../Components/Servicesbanner'


export default function Services() {
  return (
    <Fragment>
        <Servicesbanner/>
        <Mainservices />
    </Fragment>
  )
}