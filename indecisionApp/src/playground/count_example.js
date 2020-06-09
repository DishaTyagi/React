class Counter extends React.Component {
    constructor(props){
        super(props);
        //component state
        this.state={
            count: 0,
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    componentDidMount(){        //2. render the updated value of state from the local storage.
        const count = parseInt(localStorage.getItem('count'), 10);
        if(!isNaN(count)){     //NR tho.
            this.setState(() => ({ count: count }))
        }
    }
    componentDidUpdate(prevState){       //1. store the updated value in the local storage.
        if(prevState.count !== this.state.count){
            const countVal = this.state.count;
            localStorage.setItem('count', countVal);
            console.log("componentDidUpdate!"); 
        }               
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");        
    }
    handleAddOne(){        
        this.setState((prevState) => {     {/* prevstate is an object here */}
            return {
                count: prevState.count + 1      
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1 
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render(){
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>Increment</button>
                <button onClick={this.handleMinusOne}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
// Counter.defaultProps = {
//     count: 0        //if reactDOM render contains <Counter count={-10}/> then count is set to -10 else default value is set to 0 here.
// }
ReactDOM.render(<Counter />, document.getElementById('appDiv'));
