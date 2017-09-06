// ENCAPSULATION


// Here was have some random file called app.js 
var name = "Brent"; // Brent name is at global scope


// Some other file called other.js 
(function() { //parenthesis here are closing of this scope for this file to show the name Farris, encapsulation Farris as name.   
    var name = "Farris"; // this name is declared within this function scope and does not affect others. 
    alert (name);
}) (); // parenthesis to auto execute function

document.body.innerHTML = name; // however at global scope, it will print out "Brent"
// BY encapsulating, whenever you assign variables with the same name, it wont affect the global scope. 



/*******************************************************************************/

// INHERITANCE


//Example with Typescript: 

//Example of a CLass (how a class is created in typescript shown with Greeter)

class Greeter { // declare a new class Greeter
    greeting: string; // Class has three members, propert called greeting, a constructor and a method greet.
    constructor(message: string) {
        this.greeting = message; // when refering to one of the members of class we prepend this
    }

    greet () {
        return "Hello, " + this.greeting;
    }
}


let greeter = new Greeter("world"); // construct and instance of the Greeter class using new

// Now comes Inheritance 

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`); // string interpolation es6
    }
}

// You can see this where Horse and Snake subclass the base class Animal and gain access to its features.
// Derived classes that contain constructor functions must call super() which will execute the constructor function on the base class.

// Here both Snake and Horse create a move method that overrides the move from Animal, giving it functionality specific to each class.
// The example also shows how to override methods in the base class with methods that are specialized for the subclass. 


class Snake extends Animal { // extends keyword used to create a subclass
    constructor(name: string) { super(name); } 
    move(distanceInMeters = 5) { // override method from base class with specialized subclass method
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}


class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {// override method from base class with specialized subclass method
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

/* 
 Note that even though tom is declared as an Animal, since its value is a Horse, when tom.move(34) calls the overriding method 
 in Horse: 
 
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.

*/

sam.move();
tom.move(34);

/*******************************************************************************/

// POLIMORPHISM

/*In the example above (not typescript, the written example), we had a Programmer object that inherited all of the methods 
of the parent Person object. 

This means that both objects provide a "talk" method, among others. Now imagine that somewhere in our code, there's 
a variable called Bob and it so happens that we don't know if Bob is a Person, 
or a Programmer object. 

We can still call the "talk" method on the Bob object and the code will work. This ability to 
call the same method on different objects and have each of them respond in their own way is called polymorphism.

Poly= many, Morphism=form - Link : https://blog.knoldus.com/2017/02/17/object-oriented-javascript-polymorphism-with-examples/

When: It is used when we want a function’s (let say function HOLA) interface to be flexible enough to accept different 
types or number of parameters. Also, based on changing parameters types or numbers, we might want the function HOLA to 
behave differently (morphism).

How: use case- Take the old example of Person & Employee, where all employees are people, but all people are not employees. Which is 
to say that people will be the super class, and employee the sub class. People may have ages and weights, but they do not have 
salaries. Employees are people so they will inherently have an age and weight, but also because they are employees they will have 
a salary.

Polymorphism takes advantage of inheritance in order to make this happen.*/

    var shape = function (){};
	shape.prototype.draw = function(){
		return "i am generic shape";
    }
    
	//circle
	var circle = function(){}
	circle.prototype = Object.create(shape.prototype); // gets shape function from above
	circle.prototype.draw= function(){ // gets draw method from above
		return "i am a circle"; 
	}
	//triangle
	var triangle = function (){}
	triangle.prototype = Object.create(shape.prototype);// gets shape function from above
	triangle.prototype.draw= function(23){ // gets draw method from above and adds a parameter of (size)
		return "this is triangle";
	}
	//printing shapes
	var shapes = [new shape(), new circle(), new triangle(23)];
	shapes.forEach (function (shapeList){
		console.log(shapeList.draw());
    });
    

/*******************************************************************************/

// CLOSURE

// A Closure is nothing more than a function that has a reference to a private variable. 
// A function being inclosed in another function (a bubble).
//Explained here : https://www.youtube.com/watch?v=-jysK0nlz7A


function rainbow () {
    var counter = 0;

    unicorn(); // u can call unicorn inside rainbow function since it's inside the scope 

    function unicorn() { // unicorn function defined inside rainbow function
    // this means unicorn is a local variable to the rainbow function. 
    } 
}

/* unicorn(); could not call unicorn down here because it is outside of the scope of the rainbow function 
because unicorn is only local to rainbow. */


function rainbow () {
    var counter = 0;
    function unicorn() { // unicorn function defined inside rainbow function
        // unicorn is a local variable to the rainbow function. 
    }
}

rainbow(); //when calling rainbow function, that means var counter and function unicorn should be executing. 
//each time you call rainbow(); a new function unicorn is declared and defined.
// all of the data the variable and function is enclosed (that's why they call it closure.)


// SECOND EXAMPLE OF CLOSURE : https://www.youtube.com/watch?v=HjJQ-lvTgWg

/* A closure is an inner function that has access to the outer function's variables in addition to it's own variables and global
variables. The inner function has access not only to the outer function's variables, but also to the outer function's parameters. You
create a closure but adding a function inside another function. 

Anytime you have a nested function, you have a closure there. */

function addNumbers(firstNumber, secondNumber, thirdNumber, fourthNumber) {
    var returnValue = "Result is : "; // initialize variable
    // This inner function has access to the outer function's variables & parameters
    function add() {
        return returnValue + (firstNumber + secondNumber + thirdNumber + fourthNumber);
    }
    return add(); // outer function is going to call inner function which is add
    //without parenthesis, will get inner function expression. 
}

var result = addNumbers(10,20,30,40);
document.write(result);
// Result is 100 

/* When we call addNumbers function, it initializes the return value variable which is the string "Result is: ", 
then it calls add function. 

add function is concatinating the string Result is, with the first, second, third, and fourth number (10,20,30,40), 
that's why we get Result is 100 as the output. 
*/