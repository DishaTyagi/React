import React from 'react';

const Action = (props) => (
    <div>
        <button onClick={props.pickOption} disabled={!props.hasOptions}>What should I do?</button>
    </div>
)

export{
    Action
}