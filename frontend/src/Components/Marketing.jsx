import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Stationariy from './Stationairy';
import Socialmedia from './Socialmedia';


export default function Marketing() {
  return (
    <Fragment>
        <div className='container-fluid servicecomponents'>
        <div className='row'>
        <Tabs>
            <TabList>
            <Tab><h2>Social Media Post</h2></Tab>
            <Tab><h2>Stationary Design</h2></Tab>
            </TabList>

            <TabPanel><Socialmedia/></TabPanel>
            <TabPanel><Stationariy/></TabPanel>
       </Tabs> 
  
        </div>
    </div>
    </Fragment>
  )
}
