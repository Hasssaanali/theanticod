import React, { Fragment, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { logo } from '../Data/Data';
import Modal from 'react-bootstrap/Modal';




export default function Wordpress() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Fade left>
                <div className='container-fluid'>
                    <div className='row portfolio logo'>
                        {logo.map((data, index) => {
                            return (
                                <div className='col-sm-3' key={index}>

                                    <img src={data.image} alt="img" />
                                    <span onClick={handleShow}>Name</span>
                                    

                                    <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton><Modal.Title>Modal heading</Modal.Title></Modal.Header>
                                    <Modal.Body><img src={data.image} alt="img" /></Modal.Body>
                                    </Modal>


                                </div>
                                
                            )
                        })}


                    </div>
                </div>
            </Fade>
        </Fragment>
    )
}
