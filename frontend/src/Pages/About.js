import React, { Fragment } from 'react'
import Aboutbanner from '../Components/Aboutbanner';
import Aboutexpert from '../Components/Aboutexpert';
import Workwithus from '../Components/Workwithus';

export default function About() {
  return (
    <Fragment>
    <Aboutbanner/>
    <Aboutexpert/>
    <Workwithus/>
    </Fragment>
  )
}
