console.log("visibility toggle is running");

let visibility = false;

const app = {
    title: 'Visibility Toggle',
    textString: ''
}

const appRoute = document.getElementById('appDiv');

const visibilityToggle = () => {
    visibility = !visibility;   //toggling
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={visibilityToggle}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility ? <p>Hi there! I am a text that needs to be shown</p> : <p></p>}

        </div>        
    );

    ReactDOM.render(template, appRoute);
}

render();