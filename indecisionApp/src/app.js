class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer';
        const options = ['thing one', 'thing two', 'thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />        {/* this is the instance of Header react component*/}
                <Action />
                <Options options={options}/>
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

class Action extends React.Component {
    handlePick(){
        alert('button pressed!');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){     //props in the constructor function is same as this.props in the render function.
        super(props);       //react component constructor.

        this.handleRemoveAll = this.handleRemoveAll.bind(this);     //whenever we use handleRemoveAll func down below, we won't need to bind it again and again. so this is way more efficient.
    }
    handleRemoveAll(){
        console.log(this.props.options);
        
        alert("remove all button clicked!");        
    }
    render(){        
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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