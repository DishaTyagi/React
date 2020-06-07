class VisibilityToggle extends React.Component {
    constructor(prop){
        super(prop);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })

    }

    render(){
        return (
            <div>
                <h1>visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show Details'}</button>
                {this.state.visibility ? <p>Hi there! I am a text that needs to be shown</p> : <p></p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('appDiv'));

// console.log("visibility toggle is running");

// let visibility = false;

// const app = {
//     title: 'Visibility Toggle',
// }

// const appRoute = document.getElementById('appDiv');

// const visibilityToggle = () => {
//     visibility = !visibility;   //toggling
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={visibilityToggle}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility ? <p>Hi there! I am a text that needs to be shown</p> : <p></p>}

//         </div>        
//     );

//     ReactDOM.render(template, appRoute);
// }

// render();