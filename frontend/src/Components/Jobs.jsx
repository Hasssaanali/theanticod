import React, { Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function Jobs() {
  return (
    <Fragment>
    <div className='container servicecomponents'>
    <div className='row'>


    <Tabs>
        <TabList>
        <Tab><h2>Web Development</h2></Tab>
        <Tab><h2>Graphic Designing</h2></Tab>
        <Tab><h2>SMM</h2></Tab>
        <Tab><h2>Bidders</h2></Tab>
        <Tab><h2>Admin</h2></Tab>
        </TabList>

        <TabPanel>
            <div className='contanier'>
                <div className='row jobs'>
                    <div className='col-sm-4'><h3>Job tilte</h3></div>
                    <div className='col-sm-4'><p>Job faculty</p></div>
                    <div className='col-sm-4 btnn'><span>Apply now</span></div>
                </div>
            </div>
        </TabPanel>
        
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
   </Tabs>




    </div>
</div>
</Fragment>
  )
}
