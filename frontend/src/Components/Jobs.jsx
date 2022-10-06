import React, { Fragment } from 'react'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { jobs } from '../Data/Data';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default function Jobs() {
  return (
    <Fragment>
    <div className='container servicecomponents myjobs'>
    <div className='row'>

    <Tabs defaultActiveKey="Web Development" id="uncontrolled-tab-example"  className="mb-3" >
    {
        jobs.map((item,index) => {
          return(
            <Tab eventKey={item.category} title={item.category} key={item.id}>
          {
            item.designation.map((data, index) => {
              return(
                <div key={data.key} className="mobilescroll"><Fade up>
                <div className='contanier' key={data.key}>
                <div className='row jobs'>
                    <div className='col-sm-4'><h3>{data.jobtitle}</h3></div>
                    <div className='col-sm-4'><p>{data.depart}</p></div>
                    <div className='col-sm-4 btnn'><Link to={`/singlejobb/${data.key}`}  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}><span>Apply now</span></Link></div>
                </div>
            </div>
            </Fade></div>
              )
            })
          }
      </Tab>
          )
        })
      }
    </Tabs>
    <div className="container">
              <div className="row mobile">
                <img src="./img/swipe.jpg" alt="sc" width="10"/>
                <p>Swipe to See More</p>
              </div>
            </div>
    </div>
</div>
</Fragment>
  )
}
