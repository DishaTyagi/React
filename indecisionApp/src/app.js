// this file inside src folder will be our source code. the app.js inside public folder contains the babel's generated code

console.log("app.js is running!");

const app = {
    title: 'Dish',
    subtitle: 'dish is a good girl',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();     //prevents whole page to reload when form button is clicked.
    
    //to access the form input element
    const option = e.target.elements.option.value;

    if(option){ //to make sure that the input is not empty
        //push into app options
        app.options.push(option);
        console.log(option);
        
        e.target.elements.option.value = '';
        reRender();

    }
}

const removeAll = () => {
    app.options = [];
    reRender();
}

const appRoute = document.getElementById('appDiv');

let keyCount = 0;

const reRender = () => {
    //JSX
    const template = (        //this paranthesis is not actually required. just for clarity purposes.
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>

            <button onClick={removeAll}>Remove All</button>
            
            <ol>
            {   
                app.options.map((option) => <li key={keyCount++}>{option}</li>)
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>          
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoute);      //1st -> what to render, 2nd param-> where to render

}



reRender();
