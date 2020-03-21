import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal 
    isOpen={!!props.isOpen}
    onRequestClose={props.isClose}
    contentLabel="Selected Option"
    appElement={document.getElementById('app')}
    >
        <h3>Selected Option {props.isOpen && <p>{props.isOpen}</p>}</h3>
        <button onClick={props.isClose}> Close</button>
    </Modal>
)
export default OptionModal
