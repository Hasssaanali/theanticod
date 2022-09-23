import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Logo from './Logo'
import Uiux from './Uiux';
import Stationariy from './Stationairy';
import Socialmedia from './Socialmedia';


export default function Webdevelopment() {
  return (
    <Fragment>
        <div className='container-fluid servicecomponents'>
        <div className='row'>
        <Tabs>
            <TabList>
            <Tab><h2>Logo Design</h2></Tab>
            <Tab><h2>UI/UX Design</h2></Tab>
            <Tab><h2>Stationary Design</h2></Tab>
            <Tab><h2>Social Media Post</h2></Tab>
            </TabList>

            <TabPanel><Logo/></TabPanel>
            <TabPanel><Uiux/></TabPanel>
            <TabPanel><Stationariy/></TabPanel>
            <TabPanel><Socialmedia/></TabPanel>
       </Tabs> 
  
        </div>
    </div>
    </Fragment>
  )
}
