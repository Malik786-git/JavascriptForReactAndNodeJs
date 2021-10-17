// Higher Order and Call Back Function
//  A function which take another fun as a arguments is called Higher Order Function
//  A function which pass arguments to another fucntion is called Callback Function
// const add = (a,b)=>{
//     return a+b;
// }

const { setupMaster } = require("cluster");
const { setTimeout } = require("timers");

// const sub = (a,b)=>{
//     return Math.abs(a-b);
// }
// const mul = (a,b)=>{
//     return a*b;
// }

// const calculator = (num1, num2, operator)=>{
//     return operator(num1,num2);
// }
// calculator(5,4,add)// calculator higher order fun and add , mul, sub is callback fun
// console.log(calculator(5,4,add));   // inderctly call add(5,2)



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// asynchronous js 
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hoisting
// we have creation phase and exevution phase 
// Hoisting in Js is a mechanism where variable and function declerations are moved to the top of their scope before the code

// console.log(myName);
// var myName;
// myName = 'jahangir';

// output during creation phase

// var myName = undefine ;
// console.log(myName);
// myName = 'jahangir';


// After EcmaSrcipt 2015
// Hoisting avoided by using let  
// console.log(myName);
// let myName;
// myName = 'jahangir';

///////////////////////////////////////////////////////////////////////////////
// Scope Chain and Lexical Scoping

// Lexical scoping means the inner function can get access to their parent function varaiables but the vice-versa is not true
// let a = 'Hellow World ';

// const first = () => {
//     let b = "how are you ";

//      const second = () => {
//          let c = "Hii, I am fine";
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
// OR better way

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


















