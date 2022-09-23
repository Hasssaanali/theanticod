import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Webdevelopment from './Webdevelopment';
import Graphic from './Graphic'


export default function Mainservices() {
  return (
   <Fragment>
    <div className='container-fluid'>
        <div className='row'>
        <Tabs data-aos="fade-right" data-aos-duration="2000">
            <TabList>
            <Tab><img src='https://res.cloudinary.com/anticod/image/upload/v1663916564/img/web_wjbxxt.png' /></Tab>
            <Tab><img src='https://res.cloudinary.com/anticod/image/upload/v1663916561/img/Graphic_bro0kc.png' /></Tab>
            <Tab><img src='https://res.cloudinary.com/anticod/image/upload/v1663916564/img/SEO_ocn1ff.png' /></Tab>
            <Tab><img src='https://res.cloudinary.com/anticod/image/upload/v1663916530/img/Animation_k0f5nl.png' /></Tab>
            <Tab><img src='https://res.cloudinary.com/anticod/image/upload/v1663916561/img/Digital_duscec.png' /></Tab>
            </TabList>

            <TabPanel> <Webdevelopment /> </TabPanel>
            <TabPanel><Graphic /> </TabPanel>
            <TabPanel>
            <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 5</h2>
            </TabPanel>
       </Tabs> 
  
        </div>
    </div>
       
   </Fragment>
  )
}
