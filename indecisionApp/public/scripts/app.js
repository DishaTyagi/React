'use strict';

// this file inside src folder will be our source code. the app.js inside public folder contains the babel's generated code

console.log("app.js is running!");

var app = {
    title: 'Dish',
    subtitle: 'dish is a good girl',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //prevents whole page to reload when form button is clicked.

    //to access the form input element
    var option = e.target.elements.option.value;

    if (option) {
        //to make sure that the input is not empty
        //push into app options
        app.options.push(option);
        console.log(option);

        e.target.elements.option.value = '';
        reRender();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    reRender();
};

var appRoute = document.getElementById('appDiv');

var keyCount = 0;

var reRender = function reRender() {
    //JSX
    var template = //this paranthesis is not actually required. just for clarity purposes.
    React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: keyCount++ },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoute); //1st -> what to render, 2nd param-> where to render
};

reRender();
