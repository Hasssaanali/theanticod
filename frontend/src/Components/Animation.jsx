import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Animvideo from './Animvideo'




export default function Animation() {
  return (
    <Fragment>
        <div className='container-fluid servicecomponents'>
        <div className='row'>
        <Tabs>
            <TabList>
            <Tab><h2>2D Animation</h2></Tab>
            </TabList>

            <TabPanel><Animvideo/></TabPanel>
       </Tabs> 
  
        </div>
    </div>
    </Fragment>
  )
}
