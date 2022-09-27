import Aboutbanner from '../Components/Aboutbanner';
import Aboutexpert from '../Components/Aboutexpert';
import Workwithus from '../Components/Workwithus';
import Preloader from '../Components/Preloader';
import React, { Fragment } from 'react';

export default function About() {


  return (
    <Fragment>
    <Aboutbanner/>
    <Aboutexpert/>
    <Workwithus/>
    </Fragment>
  )
}
