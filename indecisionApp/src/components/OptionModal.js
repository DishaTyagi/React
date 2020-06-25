import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}       /*isOpen is boolean and tells whether the modal should be open or not. */
            onRequestClose={props.handleClearSelectedOption}    //when esc or background is clicked, the modal goes away just like in gmail or drive
            contentLabel='Selected Option'         /*used for accessibility purposes, not gonna show up in browser */
            closeTimeoutMS = {200}  
            className = "modal"  
        >
            <h3 className="modal__title">Selected Option</h3>

            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button 
                className="button" 
                onClick={props.handleClearSelectedOption}
            >
                Okay
            </button>
        </Modal>
    )
}

export{
    OptionModal
}