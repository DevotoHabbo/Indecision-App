import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal 
    isOpen={!!props.isOpen}
    onRequestClose={props.isClose}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    appElement={document.getElementById('app')}
    >
        <h3 className="modal__title">Selected Option </h3>
        {props.isOpen && <p className="modal__body">{props.isOpen}</p>}
        <button className="button" onClick={props.isClose}> Close</button>
    </Modal>
)
export default OptionModal
