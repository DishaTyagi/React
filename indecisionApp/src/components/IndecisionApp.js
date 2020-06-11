import React from 'react';
import {AddOption} from './AddOption';
import {Header} from './Header.js';
import {Action} from './Action.js';
import {Options} from './Options.js';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){    
                this.setState(() => ({ options: options }))
            }
        }catch(e){
            //do nothing.
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');        
    }
    handleDeleteAll(){       
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }))        
    }
    handlePick(){
        const randomOptionIndex = Math.floor(Math.random() * this.state.options.length);        
        const randomOption = this.state.options[randomOptionIndex];        
        alert(randomOption)
    }

    handleAddOption(option){
        if(!option){        //means there's an empty string.
            return 'Enter valid option' ;
        }
        else if(this.state.options.indexOf(option) > -1){    //already exists.
            return 'This option already exists!';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))     
    }

    render(){
        const subtitle = 'Put your life in the hands of the computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    pickOption={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteAll}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

export{
    IndecisionApp
}