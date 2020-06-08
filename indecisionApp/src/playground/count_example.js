class Counter extends React.Component {
    constructor(props){
        super(props);
        //component state
        this.state={
            count: props.count
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
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

Counter.defaultProps = {
    count: 0        //if reactDOM render contains <Counter count={-10}/> then count is set to -10 else default value is set to 0 here.
}

ReactDOM.render(<Counter />, document.getElementById('appDiv'));


// let count = 0;
// const addOne = ()=> {
//     count++;
//     reRender();
// };
// const deleteOne =() => {
//     count--;
//     reRender();
// }
// const reset = () => {
//     count = 0;
//     reRender();
// }

// const appRoute = document.getElementById('appDiv');

// //after changing the count val, updated count is not rendered. So, we have to render templateTwo initially and after updating the count.
// const reRender = () => {
//     const templateTwo = (
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick = {addOne}>Increment</button>
//             <button onClick = {deleteOne}>Decrement</button>
//             <button onClick = {reset}>Reset</button>
//          </div>
//     );
//     ReactDOM.render(templateTwo, appRoute);      //1st -> what to render, 2nd param-> where to render

// }

// reRender();