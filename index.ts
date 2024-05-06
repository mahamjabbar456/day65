/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

// Function to calculate the area of a triangle
function AreaofTriangle(base:number,height:number):number {
     return 1/2*base*height;
}

let base = 5;
let height = 10;
console.log(`The Area of triangle is ${AreaofTriangle(base,height)}`);

/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// Optional parmeter
function greeting(name:string , age?:number){
    if(age!=undefined){
    console.log(`My name is ${name} and my age is ${age}`);
}else{
        console.log(`My name is ${name}`);
    }
}
greeting("John");
greeting("John",18);

// Default Parameter
function greetingDefault(name:string,age:number = 25){
    console.log(`My name is ${name} and my age is ${age}`);
}
greetingDefault("Alice");
greetingDefault("Alice",18);

/***************************
 * FUNCTION REST PARAMETER *
 ***************************/

function multiply(...num:number[]):number{
    let multi = 1;
    for(let i = 0;i<num.length;i++){
        multi *= num[i];
    }
    return multi;
}

console.log(`The multiply of these numbers is ${multiply(2,3,4,5,6,7,8,9)}`);

/******************
 * ARROW FUNCTION *
 ******************/

const multiplyTwoNumber = (num1:number,num2:number):number => {
    return num1*num2
}

console.log(`Arrow function is ${multiplyTwoNumber(4,5)}`);

/**********************
 * ANONYMOUS FUNCTION *
 **********************/

const add = function (num1:number,num2:number):number {
    return num1 + num2;
}
console.log(`Anonymous function is ${add(5,6)}`);

/****************
 * VOID & NEVER *
 ****************/

function greet(name:string):void{
    console.log(`My name is ${name}`);
}
greet("Maham");

// function throwError(message: string): never {
//     throw new Error(message);
//   }

// throwError("Wrong");