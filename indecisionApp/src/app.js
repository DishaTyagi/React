class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer';
        const options = ['thing one', 'thing two', 'thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
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
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render(){        
        return (
            <div>
                <p>{this.props.options.length}</p>
                <p>Options component here.</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Option component here</p>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <p>AddOption Component here.</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('appDiv'));