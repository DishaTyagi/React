// this file inside src folder will be our source code. the app.js inside public folder contains the babel's generated code

console.log("app.js is running!");

var object = {
    title: 'Dish',
    subtitle: 'dish is a good girl'
}

//JSX
var template = (        //this paranthesis is not actually required. just for clarity purposes.
    <div>
        <h1>{object.title}</h1>
        <p>{object.subtitle}</p>
       {/* <ol>
            <li>List item 1</li>
            <li>list item 2</li>
       </ol> */}
    </div>
);

var user = {
    name: 'Disha',
    age: 21,
    location: 'vaishali'
}

var templateTwo = (
  
    // jsx expressions must have a parent element. if we dont add this <div> as a parent element, there'll be an err
    <div>           
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoute = document.getElementById('appDiv');
ReactDOM.render(template, appRoute);      //1st -> what to render, 2nd param-> where to render
