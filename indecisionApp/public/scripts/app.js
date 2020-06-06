'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        //name here has value 'anonymous' if the instance has no nme specified while calling the constructor
        this.name = name; //this refers to the current instance        
        this.age = age;
    }

    //method


    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // return "hella " + this.name + "!";
            return 'hello ' + this.name;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return 'hi! I am ' + this.name + ' and I am ' + this.age + ' years old.';
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
        //call person constructor to take the same values


        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'printtDetails',
        value: function printtDetails() {
            return 'hello ' + this.name + ' of ' + this.age + ' years old.';
        }
    }, {
        key: 'hasMajor',
        value: function hasMajor() {
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

    }, {
        key: 'getDescription',
        value: function getDescription() {

            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
            if (this.hasMajor()) {
                description += ' thier major is ' + this.major;
            }
            return description;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getGreeting',
        value: function getGreeting() {

            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
            if (this.homeLocation) {
                greeting += ' and I live in ' + this.homeLocation;
            }

            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Traveler('Disha Tyagi', 21, 'Ghaziabad');
console.log(me.getGreeting());

var you = new Traveler(undefined, undefined, 'nowhere');
console.log(you.getGreeting());

// const greet = me.getDescription()
// console.log(greet);

// console.log(you.getDescription());
