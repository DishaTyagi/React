// this file inside src folder will be our source code. the app.js inside public folder contains the babel's generated code

console.log("app.js is running!");

const object = {
    title: 'Dish',
    // subtitle: 'dish is a good girl',
    options: ['one', 'two']
}

//JSX
const template = (        //this paranthesis is not actually required. just for clarity purposes.
    <div>
        <h1>{object.title}</h1>
        {object.subtitle && <p>{object.subtitle}</p>}
        <p>{object.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>List item 1</li>
            <li>list item 2</li>
        </ol>
    </div>
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
let count = 0;
const addOne = ()=> {
    count++;
    reRender();
};
const deleteOne =() => {
    count--;
    reRender();
}
const reset = () => {
    count = 0;
    reRender();
}

const appRoute = document.getElementById('appDiv');

//after changing the count val, updated count is not rendered. So, we have to render templateTwo initially and after updating the count.
const reRender = () => {
    const templateTwo = (
        <div>
            <h1>count: {count}</h1>
            <button onClick = {addOne}>Increment</button>
            <button onClick = {deleteOne}>Decrement</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoute);      //1st -> what to render, 2nd param-> where to render

}

reRender();