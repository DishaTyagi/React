import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}       /*isOpen is boolean and tells whether the modal should be open or not. */
            onRequestClose={props.handleClearSelectedOption}    //when esc or background is clicked, the modal goes away just like in gmail or drive
            contentLabel='Selected Option'         /*used for accessibility purposes, not gonna show up in browser */
        >
            <h3>Selected Option</h3>

            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    )
}

export{
    OptionModal
}