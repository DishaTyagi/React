console.log('utils.js is running!');

const square = (x) => x * x ;
const add = (x, y) => x + y;

//default exports
const subtract = (x,y) => x - y;

export {  
    square,
    add,
    subtract as default
}     //export is not an object here. this is the syntax for named export.