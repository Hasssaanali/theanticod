import React, { Fragment, useState } from "react";
import Fade from "react-reveal/Fade";
import { logo } from "../Data/Data";
import Modal from "react-bootstrap/Modal";




export default function Logo() {

    const [show, setShow] = useState(false);
    const [image, setimage] = useState({ })
  
    const handleClose = () => setShow(false);
    const handleShow = (data) =>{
        setimage (data);
        setShow(true);
    } 
    return (
        <Fragment>
            <Fade left>
                <div className='container-fluid'>
                    <div className='row portfolio logo'>
                        {logo.map((data, index) => {
                            return (
                                <div className='col-sm-3' key={index}>
                                    <div className="manageheight">
                                    <img src={data.image} alt={data.image}  />
                                    </div>
                                    <span onClick={()=> handleShow(data)}>Click To View</span>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Logo Mockups</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <img src={image.image} alt="img" />
                                        </Modal.Body>
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
