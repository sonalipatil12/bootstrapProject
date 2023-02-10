import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import "./portfolio.css"
import { MdClose } from "react-icons/md"
import Divider from '../Divider/Divider';

const PortFolioItem = ({ show, handleClose, item }) => {

    return (<>
        <Modal show={show} onHide={handleClose} className="modal-xl page-section" >
            <Modal.Header closeButton className='border-0 ' />

            <Modal.Body className='pb-5'>
                <div className='container'>
                    <Modal.Title>
                        <h1 className=' page-section-heading text-second text-center'>{item?.label.toUpperCase()} </h1>
                    </Modal.Title>
                    <Divider />
                    <div className='container'>
                        <div className='d-flex flex-column '>
                            <div className='col-12 col-md-8 m-auto'>
                                <img className='img-fluid rounded mb-5' src={item?.Image} />
                            </div>
                            <div className='col-12 col-md-8 m-auto'>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Button className='close' onClick={handleClose}>
                <MdClose /> Close Window
            </Button>
        </Modal>
    </>);
}

export default PortFolioItem;