'use strict';

// this file inside src folder will be our source code. the app.js inside public folder contains the babel's generated code

console.log("app.js is running!");

var object = {
    title: 'Dish',
    // subtitle: 'dish is a good girl',
    options: ['one', 'two']

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
    object.subtitle && React.createElement(
        'p',
        null,
        object.subtitle
    ),
    React.createElement(
        'p',
        null,
        object.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'List item 1'
        ),
        React.createElement(
            'li',
            null,
            'list item 2'
        )
    )
);

// const user = {
//     name: 'Disha',
//     age: 21,
//     // location: 'vaishali'
// }

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>
//     }
//     //if location does not exist, then don't print anthing regarding location.
// }

// const templateTwo = (

//     // jsx expressions must have a parent element. if we dont add this <div> as a parent element, there'll be an err
//     <div>           
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         {getLocation(user.location)}

//         {/*<h1>this is my h1 inside a pair of {`{}`} in jsx expression</h1>*/}
//     </div>
// )


//to understand events and attributes
var count = 0;
var addOne = function addOne() {
    count++;
    reRender();
};
var deleteOne = function deleteOne() {
    count--;
    reRender();
};
var reset = function reset() {
    count = 0;
    reRender();
};

var appRoute = document.getElementById('appDiv');

//after changing the count val, updated count is not rendered. So, we have to render templateTwo initially and after updating the count.
var reRender = function reRender() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            'Increment'
        ),
        React.createElement(
            'button',
            { onClick: deleteOne },
            'Decrement'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoute); //1st -> what to render, 2nd param-> where to render
};

reRender();
