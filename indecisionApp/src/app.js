class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: ['thing one', 'thing two', 'thing three']
        }
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this)
    }

    //when we want to update state options, we have to code functions in the parent component and pass those functions as props to the other sibling component
    //func for removeAll in the Options component
    handleDeleteAll(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick(){
        //randomly pick from options array and alert it.
        const randomOptionIndex = Math.floor(Math.random() * this.state.options.length);
        console.log('randomOptionIndex- ' + randomOptionIndex);
        
        const randomOption = this.state.options[randomOptionIndex];
        console.log('randomOption- ' + randomOption);
        
        alert(randomOption)
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />        {/* this is the instance of Header react component*/}
                <Action hasOptions={this.state.options.length > 0} pickOption={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteAll}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    
    //with React Components,you must define render
    render(){       //returns jsx
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

//if options array has length > 0, then button is active. else it is inactive.
class Action extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.pickOption} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    // constructor(props){     //props in the constructor function is same as this.props in the render function.
    //     super(props);       //react component constructor.

    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);     //whenever we use handleRemoveAll func down below, we won't need to bind it again and again. so this is way more efficient.
    // }
    // handleRemoveAll(){
    //     console.log(this.props.options);
        
    //     alert("remove all button clicked!");        
    // }
    render(){        
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        
        const option = e.target.elements.inputValue.value.trim();   //removes the before and after white spaces from the string.

        if(option){
            alert(option)
        }
        
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="inputValue"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('appDiv'));