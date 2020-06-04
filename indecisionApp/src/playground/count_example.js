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