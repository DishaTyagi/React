import subtract, { add , square} from './utils.js'     //square is not an object here. it's the named import syntax.
import isSenior, { isAdult, canDrink } from './person.js'
console.log("app.js is running");
console.log('square ' + square(4));
console.log('add ' + add(3,7));
console.log('subtract ' + subtract(100, 90));
console.log('isSenior ' + isSenior(66));

console.log(isAdult(20));
console.log(canDrink(20));

