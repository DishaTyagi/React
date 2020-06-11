class Person {
    constructor(name = 'anonymous', age = 0){        //name here has value 'anonymous' if the instance has no nme specified while calling the constructor
        this.name = name;       //this refers to the current instance        
        this.age = age
    }
    //method
    getGreeting(){
        // return "hella " + this.name + "!";
        return `hello ${this.name}`
    }
    getDescription(){
        return `hi! I am ${this.name} and I am ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
       //call person constructor to take the same values
        super(name, age);
        this.major = major
    }

    printtDetails(){
        return `hello ${this.name} of ${this.age} years old.`;
    }

    hasMajor(){        
        /*
            '' == false
            !'' == true
            !!'' == false
            !(any value) == false
            !!(any value) == true

        */

       //boolean value has to be returned that tells whether the student has the major or not.
       return !!this.major;
    }

    //over-riding parent class method
    getDescription(){

        let description = super.getDescription();        
        if(this.hasMajor()){
            description += ` their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){

        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` and I live in ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Traveler('Disha Tyagi', 21, 'Ghaziabad');   
console.log(me.getGreeting());

const you = new Traveler(undefined, undefined, 'nowhere');
console.log(you.getGreeting());

// const greet = me.getDescription()
// console.log(greet);

// console.log(you.getDescription());

