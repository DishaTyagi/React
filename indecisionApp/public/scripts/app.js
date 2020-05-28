'use strict';

// this file inside src folder will be our source code. the app.js inside public folder contains the babel's generated code

console.log("app.js is running!");

var object = {
    title: 'Dish',
    subtitle: 'dish is a good girl'

    //JSX
};var template = //this paranthesis is not actually required. just for clarity purposes.
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        object.title
    ),
    React.createElement(
        'p',
        null,
        object.subtitle
    )
);

var user = {
    name: 'Disha',
    age: 21,
    location: 'vaishali'
};

var templateTwo =

// jsx expressions must have a parent element. if we dont add this <div> as a parent element, there'll be an err
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoute = document.getElementById('appDiv');
ReactDOM.render(template, appRoute); //1st -> what to render, 2nd param-> where to render
