import React from 'react';

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        }
    }
    handleAddOption(e){
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
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}

export {
    AddOption
}