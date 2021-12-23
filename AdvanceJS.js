// Higher Order and Call Back Function.......
//  A function which take another fun as a arguments is called Higher Order Function
//  A function which pass arguments to another fucntion is called Callback Function
// const add = (a,b)=>{
//     return a+b;
// }
// ......................

const { setupMaster } = require("cluster");
const { setTimeout } = require("timers");
//////////////////////////////////////////////
// const sub = (a,b)=>{
//     return Math.abs(a-b);
// }

// const mul = (a,b)=>{
//     return a*b;
// }

// const calculator = (num1, num2, operator)=>{
//     return operator(num1,num2);
// }

// // calculator(5,4,sub)// calculator higher order fun and add , mul, sub is callback fun
// console.log(calculator(5,4,sub));   // inderctly call add(5,2)



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// asynchronous js 
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hoisting
// we have creation phase and execution phase 
// Hoisting in Js is a mechanism where variable and function declerations are moved to the top of their scope before the code

// console.log(myName);
// var myName;
// myName = 'jahangir';

// output during creation phase

// var myName = null ;
// console.log(myName);
// myName = 'jahangir';


// After EcmaSrcipt 2015
// Hoisting avoided by using let  
// console.log(myName);
// let myName;
// myName = 'jahangir';
/////////////////////////////////////
// sayHi();

// definition:When Javascript compiles your code,
//  all variable declarations using var are hoisted/lifted to the top of their functional/local scope (if declared inside a function)
//  or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. 
// This is what we mean by “hoisting”.
// sayHi();

// function sayHi(){
//   console.log('hey');
// }


//////////////////////////////////////////////////////////
// sayHi();
// function sayHi(){
//   console.log('hey');
//   console.log(add(1,2));
// }

// function add (a, b){
//   return a + b;
// }
/////////////////////////////////
// sayHi();
// var add2 = function(a, b){
//   return a + b;
// }
// function sayHi(){
//   console.log('hey');
//   console.log(add2(1,2));
// }



///////////////////////////////////////////////////////////////////////////////
// Scope Chain and Lexical Scoping
// Lexical Scope means that in a nested group of functions
// The inner functions have access to the variables and other resources of their parent scope. 
// This means that the child functions are lexically bound to the execution context of their parents. 
// Lexical scope is sometimes also referred to as Static Scope.
// function func1() {
//     var userName = 'John';
//     // likes is not accessible here
//     function parent() {
//         // userName is accessible here
//         // likes is not accessible here
//         function child() {
//             // Innermost level of the scope chain
//             // userName is also accessible here
//             var likes = 'Coding';
//         }
//     }
//  }
 
 

// Lexical scoping means the inner function can get access to their parent function varaiables but the vice-versa is not true
// let a = 'Hellow World ';

// const first = () => {
//     let b = "how are you ";

//      const second = () => {
        
//         let c = "Hii, I am fine";
//          console.log(a+b+c); 
//      }
//      second()
//     //  console.log(a+b+c); // not allow
// }

// first();

///////////////////////////////////////////////////////////////////////////////
// Closures in JS
// a closure give you access to an outer function scope from an inner fuction


// const outerFun = (a)=>{
//     let b = 5;
//     const innerFun = ()=>{
//         let sum = a+b;
//         console.log(sum)
//     }
//     return innerFun;
// }
// let checkClouser = outerFun(5)
// console.log(checkClouser)
// checkClouser() 

// -----------------------------

// function sportsGame(name){
//     let score = 1;
//     return function abc (){
//       console.log(score++);
//     }
//   }

//    var game = sportsGame('hockey');
//    var game1 = sportsGame('cricket');
//    game();
//    game1();
////////////////////////////////////////////////
// -------------------------------------------/
//Synchronous and Asynchromous Js
//Synchronous....
// const f2 = ()=>{
//    console.log("Run Function 2");
// }


// const f1 = ()=>{
//     console.log("Run Function 1");
//     f2();
//     console.log('f1 end');
//  }
//  f1()
 
//Asynchromous Js
// const f2 = ()=>{
//     setTimeout(()=>{
//         console.log("Run Function 2");
//     },2000);
//  }
 
 
//  const f1 = ()=>{
//      console.log("Run Function 1");
//      f2();
//      console.log('f1 end');
//   }
//   f1()
//  =================================== 

// ENENT LOOP..... (show in picture)

// Function Curring (technique eveluate multi argument)

// function sum(n){
//     // console.log(n);    // display one only
//    return function (n2)
//    {
//         // console.log(n,n2) // display two only
//           return function(n3){
//               console.log(n+n2+n3);
//           }
//     }
// }

// sum(5)(3)(8); // all argument are fullfill
// // OR better way

// const sum = (n1)=>(n2)=>(n3)=> console.log(n1+n2+n3);
// sum(5)(3)(8); // all argument are fullfill


// Callback Hell

// // solve this issue use promise and Fetch Api

// setTimeout(() => {
//     console.log('work is done 1')
//     setTimeout(() => {
//         console.log('work is done 2')
//         setTimeout(() => {
//             console.log('work is done 3')
//             setTimeout(() => {
//                 console.log('work is done 4')
//                 setTimeout(() => {
//                     console.log('work is done 5')
//                     setTimeout(() => {
//                         console.log('work is done 6')
//                     }, 1000);
                    
//                 }, 1000);
                
//             }, 1000);
            
//         }, 1000);
        
//     }, 1000);
    
// }, 1000);



///////////////////////////////////////////////////////////////////////////////////////////
// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple 
// asynchronous operations one after the other. By nesting callbacks in such a way, we easily end up with error-prone,
//  hard to read, and hard to maintain code.Soln: Best code practice to handle it.

// fs.readdir(source, function (err, files) {
//     if (err) {
//       console.log('Error finding files: ' + err)
//     } else {
//       files.forEach(function (filename, fileIndex) {
//         console.log(filename)
//         gm(source + filename).size(function (err, values) {
//           if (err) {
//             console.log('Error identifying file size: ' + err)
//           } else {
//             console.log(filename + ' : ' + values)
//             aspect = (values.width / values.height)
//             widths.forEach(function (width, widthIndex) {
//               height = Math.round(width / aspect)
//               console.log('resizing ' + filename + 'to ' + height + 'x' + height)
//               this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
//                 if (err) console.log('Error writing file: ' + err)
//               })
//             }.bind(this))
//           }
//         })
//       })
//     }
//   })
  
////////////////////////////////////
// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', function() {
//     alert('Finished my homework');
//   });


//////////////////////////////////////////
 
// function fun1(params) {
//     console.log('func 1 run!');
//     fun2();
// }
// function fun2(params) {
//     console.log('func 2 run')
// }

// fun1();

/////////////////////////////////////////////
// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 500 );
//     second();
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
// //   second();
  







