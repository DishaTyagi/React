import React from 'react';
import {AddOption} from './AddOption';
import {Header} from './Header.js';
import {Action} from './Action.js';
import {Options} from './Options.js';
import {OptionModal} from './OptionModal.js'

class IndecisionApp extends React.Component {

    //class properties
    state = {
        options: [],
        selectedOption: undefined,      //for What should I do button.
    }
    handleDeleteAll = () => { 
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }))        
    }
    handlePick = () => {
        const randomOptionIndex = Math.floor(Math.random() * this.state.options.length);        
        const randomOption = this.state.options[randomOptionIndex];        
        this.setState(() => ({selectedOption: randomOption}));
    }

    handleAddOption = (option) => {
        if(!option){        //means there's an empty string.
            return 'Enter valid option' ;
        }
        else if(this.state.options.indexOf(option) > -1){    //already exists.
            return 'This option already exists!';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))     
    }
    
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }

    //event handlers and methods.
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);       //retrieving in the form of js object.
            if(options){    
                this.setState(() => ({ options: options }))
            }
        }catch(e){
            //do nothing.
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);    //storing in the form of string
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');        
    }
    render(){
        const subtitle = 'Put your life in the hands of the computer';

        return (
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        pickOption={this.handlePick}
                    />

                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteAll}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

export{
    IndecisionApp
}