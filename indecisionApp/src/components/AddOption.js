import React from 'react';

class AddOption extends React.Component{
    state = {
        error: undefined,
    }
    handleAddOption = (e) => {          //handleAddOption being a class property does not need to bind in the constructor. if it was a regular fn, then binding was necessary,
        e.preventDefault();
        
        const option = e.target.elements.inputValue.value.trim();   
        const error = this.props.handleAddOption(option) ;  
        this.setState(() => (
            {
                error: error
            }
        ))   
        e.target.elements.inputValue.value = '';        
    }
    
    render(){
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : <p></p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="inputValue"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export {
    AddOption
}