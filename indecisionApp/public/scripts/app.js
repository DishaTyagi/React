'use strict';

console.log("visibility toggle is running");

var visibility = false;

var app = {
    title: 'Visibility Toggle',
    textString: ''
};

var appRoute = document.getElementById('appDiv');

var visibilityToggle = function visibilityToggle() {
    visibility = !visibility; //toggling
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: visibilityToggle },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility ? React.createElement(
            'p',
            null,
            'Hi there! I am a text that needs to be shown'
        ) : React.createElement('p', null)
    );

    ReactDOM.render(template, appRoute);
};

render();
