import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button 
            onClick={() => {
                props.handleDeleteOption(props.optionText)
            }}
            className="button button--link"         //button with modified link button.
        >
            remove
        </button>
    </div>
)

export{
    Option
}