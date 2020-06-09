class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: props.options
        }
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    //func for removeAll in the Options component
    handleDeleteAll(){       
        this.setState(() => ({ options: [] }))
    }
    //to delete a single option
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
        //if option already exists, index will be from 0 to length - 1. if not present, returns -1.
        if(!option){        //means there's an empty string.
            return 'Enter valid option' ;
        }
        else if(this.state.options.indexOf(option) > -1){    //already exists.
            return 'This option already exists!';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))     //concat returns a new array.
    }

    render(){
        const subtitle = 'Put your life in the hands of the computer';

        return (
            <div>
                <Header subtitle={subtitle} />        {/* this is the instance of Header react component*/}
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

IndecisionApp.defaultProps = {
    options: []
}

//header sfc.
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//provide default title to header IF NOT SPECIFIED. how?
Header.defaultProps = {        //defaultProps is an object
    title: 'Indecision'
}

//Action SFC(stateless functional component)
const Action = (props) => {
    return (
        <div>
            <button onClick={props.pickOption} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

//Options SFC
const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
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
}

//Option SFC
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}>
                remove
            </button>
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            error: undefined,
        }
    }
    handleAddOption(e){
        e.preventDefault();
        
        const option = e.target.elements.inputValue.value.trim();   //removes the before and after white spaces from the string.
        const error = this.props.handleAddOption(option) ;  //this keyword is used here inside this method. so include it in the construtor function.
        //treat error as the new state for AddOption.
        this.setState(() => ({error: error}))        
    }
    // handleSubmit(){
    //     this.inputValue.value = '';
    // }
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

ReactDOM.render(<IndecisionApp />, document.getElementById('appDiv'));
