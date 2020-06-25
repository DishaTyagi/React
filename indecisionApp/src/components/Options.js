import React from 'react';
import {Option} from './Option'

const Options = (props) => (
    <div>
        <button 
            onClick={props.handleDeleteOptions}
            className="button button--link"
        >
            Remove All
        </button>
        {props.options.length === 0 && <p>No option added yet.</p>}      {/*if options array is empty*/}
        
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
)

export{
    Options
}