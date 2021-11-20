
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// LET, VAT, CONST, ARROW FUN, TEMPLATE LITERALS////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { setInterval, clearInterval } = require("timers");
const { inflate } = require("zlib");


// var /////////////////////////
// var myName = "Malik Jahangir";
// console.log(myName)
// myName = "Malik Jahangir Warsi";
// console.log(myName)


// let /////////////////////////
// let myName = "Malik Jahangir";
// console.log(myName)
// myName = "Malik Jahangir Warsi";
// console.log(myName)


// const ///////////////////////
// const myName = "Malik Jahangir";
// console.log(myName)
// myName = "Malik Jahangir Warsi";
// console.log(myName)    //error




///////// Let Vs Var ////////////
// var
// function data(){
//  var myName = "Malik Jahangir";
//  console.log(myName);
//  if(true){
//      var lastName = "Warsi";
//     console.log(myName);
//     console.log(lastName);
//  } 
//     console.log(lastName);
// }

// data();

// console.log(myName);   //error
// console.log(lastName);  // error

// let
// function data(){
//     let myName = "Malik Jahangir";
//     console.log(myName);
//     if(true){
//         let lastName = "Warsi";
//        console.log(myName);
//        console.log(lastName);
//     } 
//        console.log(lastName);  //error
//    }
   
//    data();
//    console.log(myName);   //error
//    console.log(lastName);  // error


////////////////////////////////////////
// global scope
// let myName = "Malik Jahangir";  
// function data(){
    
//     console.log(myName);
//     if(true){
//         let lastName = "Warsi";
//        console.log(myName);
//        console.log(lastName);
//     } 
//    }
  
//    data();  
   


// function data(){
    
//     console.log(myName);
//     if(true){
//         let lastName = "Warsi";
//        console.log(myName);
//        console.log(lastName);
//     } 
//    }
  
//    data();  
//    let myName = "Malik Jahangir";   //error out of scope 
//////////////////////////////////////////

// Template Literals (Template String
// for (let index = 1; index <= 10; index++) {
//     let t = 12;
//     // console.log(t +"x" +index +"=" +t*index);  //old way
//     console.log(`${t} x ${index} = ${t*index} `);
// }

////////////////////////////////////////////
// default Patameters

// function multi(a,b){
//     return a*b;
// }
// console.log(multi(2,5));


// function multi(a,b=5){
//     return a*b;
// }
// console.log(multi(2)); // alway pass value get by first parameter in function here get a

// function multi(a=2,b=5){
//     return a*b;
// }
// console.log(multi());


//////////////////////////////////
// Fat Arrow Function ()=>
// old way
// console.log(sum());
// function sum(){
//     return `Sum = ${11+15}`;
// }

// new way
// console.log(sum()); //error
// const sum = ()=>{
//     let x=10; b=10;
//     let sum = x+b;
//     return `Sum = ${sum}`;
// }
// console.log(sum());  //run

// const sum = ()=>{
//     return `Sum = ${(a=11)+(b=15)}`;
// }
// console.log(sum());  //run

// Also for one line of return code

// const sum = ()=>{ return `Sum = ${(a=11)+(b=15)}`;} //undefine,because not found return
// const sum = ()=> `Sum = ${(a=11)+(b=15)}`;  //run, Without { }  no need to return
// console.log(sum());  //run


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// ARRAYS  /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Traversal 
// * Search and Filter 
// * How to Sort and Compare 
// * Insert, Add, Replace and Delete Element
// * Map(), Reduce(), Filter()

// var myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// in Js, we have array class and arrays are the prototype of this class

// var arr = new Array;  //optional
// var arr =  ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// var myFriend = ["hamza", "owais", "ashar", "umer","areeb"];
// console.log(myFriend[1]); 

// for last element get

// console.log(myFriend.length);
// console.log(myFriend[myFriend.length-1]);

// simple for loop
// var myFriend = ["hamza", "owais", "yusra owais", "ashar", "umer","areeb"];

// for (let i = 0; i < myFriend.length; i++) 
// {
//     console.log(myFriend[i]);  
// }

// for in loop ES-6

// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// for (let elements in myFriend) 
// {
//    console.log(elements); 
// }

// for of loop ES-6

// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// for (let elements of myFriend) 
// {
//     console.log(elements);  
// }

// For Each Loop (Combination of for each and for in loop)
// we dont use break and contunue statement in for Each
// Array.prototype.forEach()
// calls a function for each element in array

// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// myFriend.forEach((elem, index, array)=>{
//     console.log(array);
// });


// myFriend.forEach(function(element, index, array){
// //    console.log(element); 
//    console.log(element+" index: "+index +" arrays" +array); 

// });
/////////////////////////////////////////////////////////////////
// practice to check more
// no. of run depend on size of array
// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// myFriend.forEach(function(element, index, array){
//        console.log(array);
//        console.log(element);
//        console.log(index);
//     });
////////////////////////////////////////////////////////////////////
// through fat arrow function
// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];


// // but is not support this argument, this argument support only tradisional function
// myFriend.forEach((element, index, array) => {
//        console.log(element);
// });

///////////////////////////////////////////
// Methods In Arrays
///////////////////////////////////////////
// Search and filter
///////////////////////////////////////////
// 1.  Array.prototype.indexOf() and LastIndexOf()
// return -1 if it is not found

// let Friend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];
//  search first element se hugi

// console.log(Friend.indexOf('areeb'));
// console.log(Friend.indexOf('owais',1)); //searching of owais from index 2
// console.log(Friend.indexOf('talha',2)); //searching of talha from index 2


//  search last element se hugi
// console.log(Friend.lastIndexOf('areeb'));

/////////////////////////////////////////////
// 1.  Array.prototype.includes()
// let Friend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// console.log(Friend.includes('owais')); //return true / false
// console.log(Friend.includes('Owais')); //return true / false caseSencitive

// console.log(Friend.includes('owais',2)); //search from index 1


/////////////////////////////////////////////
// 1.  Array.prototype.find() and findIndex


// const prices = [22,50,9,21,14,45,55];
// // prices > 50

// const x = prices.find(val => val>40);
// console.log(x);
// const f = prices.find((currVal)=>{
//     return currVal > 50;
// });

// console.log(f); // return only one 

// console.log(prices.find((c) =>c > 150)); //return undefine if not found
//////////////////////////////////////
// find Index (we get element index)
// const prices = [22,50,9,21,14,45,55];
// prices > 50
// console.log(prices.findIndex((c) =>c > 50));  // return -1 if not found
// console.log(prices.findIndex((c) =>c < 50));

/////////////////////////////////////////////
// 1.  Array.prototype.filter()
// return new array after filter any element or condition
// return empty array if its not found
// const prices = [22,50,9,21,14,45,55];
// price <50...

// console.log(prices.filter((ele)=> ele<50));

/////////////////////////////////////////////
// 1.  Array.prototype.sort()
// alphabetic sort here
// const month = ["mar", "jan", "dec","april", "may"];
// console.log(month.sort());

// const prices = [22,50,9,21,14,45,55];
// console.log(prices.sort()); //it work only string


///////////////////////////////////////////
// Methods In Arrays
///////////////////////////////////////////
// CRUD (create, read, update, delete)
///////////////////////////////////////////

// let Friend = ["owais", "ashar", "umer", "talha"];
// //push 

// Friend.push('hamza');
// console.log(Friend)
// // // return array length
// const c = Friend.push('shah','zubair','kuch bh');
// console.log(Friend)

// console.log(c)

//////////////////////////////////////////////////////
// let Friend = ["owais", "ashar", "umer", "talha"];
// // //unshift // add element starting 

// Friend.unshift('hamza');
// console.log(Friend)
// // return array length
// const c = Friend.unshift('shah','zubair','kuch bh');
// console.log(Friend)

// console.log(c)

// 2ns example

// const arr = [1,2,3,5];
// arr.unshift(4,6);
// console.log(arr);

//////////////////////////////////////////////
// POP
// const city = ["karachi", "hyderabad", "multan", "lahore"];
// console.log(city);
// city.pop();  //remove last element and return it
// console.log(city);

// var whatReturnPop = city.pop()
// console.log(city);
// console.log(whatReturnPop);

//////////////////////////////////////////////
// shift
// const city = ["karachi", "hyderabad", "multan", "lahore"];
// console.log(city);
// city.shift();  //remove first element and return it
// console.log(city);

// var whatReturnShift = city.shift()
// console.log(city);
// console.log(whatReturnShift);

/////////////////////////////////////////////
// Update 
// splice //add and remove element

// const month = ["jan", "feb", "mar","april", "jun"]
// // first pass index number, second delete elemt, third what to be add
// // const newMonth = month.splice(2,1,"May");
// // console.log(month);
// const newMonthss = month.splice(2,2,"Dec");
// console.log(month);

// // // what return
// console.log(newMonthss); // return how many element delete is return

//////////////////////////////////////////////
// Update

// const month = ["jan", "feb", "mar","april", "jun"]
// Update Feb
// add element index 1, delete index 1, insert Febuary in index one
// const upM = month.splice(1,1,"Febuary")
// const upM = month.splice(1,month.length,"Febuary")  // delete all from index 1

// console.log(month) 
// console.log(upM) // return delete element

// // delete only
// const month = ["jan", "feb", "mar","april", "jun"]
// const upM = month.splice(1,Infinity)  //infinity delete all from index 1
// console.log(month);
/////////////////////////////////////////////////
////////////////////////////////////////////////

// MAP() (it is not distrub original array, while forEach() change original array)
// return new array which you want in form of F/T...

// const array1 = [1,4,9,16,25];
// // num > 9

// let newAtt = array1.map((e , i , arr)=>{
//     return e > 9
// })

// console.log(newAtt);
// console.log(array1);

/////////////////////////////////
// const array2 = [1,4,9,16,25];

// let newArr2 = array2.map((e , i , arr)=>{
//     return `${i} and the value is ${e} belong to arr ${arr}`;
// })
// console.log(newArr2);
//////////////////////////////////////////
//   Challenge
/////////////////////////////////////////

// 1, Find the square root of each element in an array?

// let arr = [25, 36, 49, 64, 81];

// let sqRoot = arr.filter((e, i, arr)=>{
//     return Math.sqrt(e);
// });

// let qRoot = arr.map((e, i, arr)=>{
//     return Math.sqrt(e);
// });
// console.log(sqRoot);

// 2, Multiply each element by 2 and return only thosee element which are greater than 10?
// chaing effect
// let arr = [2, 3, 4, 6, 8];

// let sqRoot = arr.map((element) => element*2).filter((currElement)=> currElement>10);
// console.log(sqRoot);

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Reduce Method
//////////////////////////////////////////////////////////////////


// flatten an array means to convert the 3d or 2d array into a single dimensional array
// Also
// the reduce method execute ta reducer function (that you provide) 
// on each element of the array, resulting in a single output value

// Basically reduce method take four arguments:
// Accumulator  // argument 
// Current value  // argument
// Current index // argument
// Source Array // argument

// // i want sum of array
// let arr = [5,6,2];
// // // accumulator mean what operation here sum is operation
// let sum = arr.reduce((accumulator, e, i, arr) => {
//     return accumulator+=e;
// })

// console.log(sum); //sum of array is 13

////////////////////////////////////////////////////////////



// let arr = [5,6,2];
// // // accumulator mean what operation here sum is operation
// let sum = arr.reduce((accumulator, e, i, arr) => {
//     return accumulator+=e;
// },10) // add 150 and sum of array, accumulator add array in to 150


// console.log(sum); //sum of array is 163



//////////////////////////////
// apply reduce above code
// chainable Method 

// let arr = [2, 3, 4, 6, 8];

// let sqRoot = arr.map((element) => element*2).filter((currElement)=> currElement>10).reduce((acc, e)=> acc+=e);
// console.log(sqRoot);


/////////////////////////////////


// // Convert 2d, 3d into 1d array using reduce 

// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let flatArray = arr.reduce((acc,e)=> acc.concat(e));
// console.log(flatArray);

// this condition above logic not work! solve ES-2020 see soon
// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9,[10,11,12]]
// ];
// let flatArray = arr.reduce((acc,e)=> acc.concat(e));
// console.log(flatArray);


// indexOf, lastIndexOf, include, find, findIndex, push, pop, unshift, shift, splice, filter, map, reduce...

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// STRING ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Escape Character
// Finding a String in a String
// Searching for a String in a Strig
// Extracting String Parts
// Replacing String Content
// Extracting String Character
// Other Useful Methods We COVER

// String in Js: Zero or more characters written inside quoted.
// used single and double quoted
// string can be created as primitives
// from string literals, or as object, using Sting() contructor

// let myName = "Malik Programmer";
// let myName2 = "Malik Coder";

// let myName3 = new String("Malik Developer"); // not recommended

// console.log(myName);
// console.log(myName2);
// console.log(myName3);

// find lenght of string
// console.log(myName2.length); // include spaces


// // Escape Character   \


// let uni = "10 Universitie\"s";
// console.log(uni);


// let uni1 = "10 Universitie's"; //no error
// console.log(uni1);



// let uni2 = '10 Universitie"s'; // no error
// console.log(uni2);

// Find a string in a string
// String.prototype.indexOf()
 
// const A = "I am the Computer Scientist";
// console.log(A.indexOf("am")); // return index of a

// const B = "I am the Computer Scientist";
// console.log(B.indexOf("m",4)); // search m from index 4

// String.prototype.lasrindexOf() // baxkword search

// const C = "I am the Computer Scientist";
// console.log(C.lastIndexOf("m")); // search backword and find m of Computer first, so return index of m of Computer


// const D = "I am the Computer Scientist";
// console.log(D.search("m")); // same work as indexOf, But here we no use second argument(index) like indexOf("t",4)

// ----------------------------------------------------------------------------------------------------------------
// Extract String Parts

// three method.....

// 1
// slice(start, end) => extracts a part of a string and returns the extracted part in a new string.
// let str = "Apple, Banana, Mango";
// let res = str.slice(0,4) // get appl, because me give index from 0 to 4(here 4-1) mean it select only 0 to 3, select before 4 string character
// console.log(res);
// let res2 = str.slice(7,-2) // -2 mean travers all string and remove last two string character
// console.log(res2);




// 2
// substring(start, length) => similar use like slice, but we dont argu negative value (0, -5) etc
// let str = "Apple, Banana, Mango";
 // let res = str.substring(0, 4) 
// let res = str.substring(1, -4) // dont work -4 here, only read before index 1 so it return 0 index character

// console.log(res);

// let res2 = str.substring(0, -4) // dont work -4 here, only read before index 0 so it return nothing because before zero nothing string exist
// console.log(res2);

// 3
// substr(start, end)
// let str = "Apple, Banana, Mango";
//  let res = str.substr(2, -4)  // it retun " " if we give any negative value
// console.log(res);

// let res1 = str.substr(0, 4)  // both positive arg, similar work as sclice method
// console.log(res1);

// let res2 = str.substr(-5)  // only one arg, which is negative so it return backwork string, which is main purpuse of this function
// console.log(res2);


// -----------------------------------------------------------------------------------------------------
// Replace String Content()
// String.prototype.replace(destination,soure);

// let a = `malik jahangir malik`;

// let b = a.replace("malik", "Muhammad") // replace who get firt here change malik before jahangir. donot change original string, only return new string
// console.log(b);                       // if any condition it not find malik so it never change, it also case sensitive  



// Quiz...
// how to display only 200 character from long paragraph like social media discription page..
// Solve 
//  console.log(para.slice(0,200));


// ----------------------------------------------------------------------------------------------------------

// Extracting String Character
// charAt METHODS (which index what value)

// let str = "Malik Jahangir";
// console.log(str.charAt(0));

// charCodeAt Methords (return UTF-16 code (integer range b/w 0 to 65535))

// let str = "Malik Jahangir";
// console.log(str.charCodeAt(0)); // return 77 because the Unicode of M is 77 


// Quiz...
// find unicode of last character of string

// // solution 1
// let str = "malik malik jahangir";
// let lastChar = str.substr(-1);
// console.log(lastChar.charCodeAt()); 

// solution 2...
// let str = "Malik Jahangir";
// let last = str.length;
// console.log(str.charCodeAt(last-1));

// property Access
// Es-5 2009 allow property access [] on string

// let str = "Malik Jahangir";
// console.log(str[1]); // access character of string as an index 

// -----------------------------------
// Useful METHODS
// upper and lower case
// let str = "malik jahangir";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// concatinate
// let str1 = "malik";
// let str2 = "jahangir";
// console.log(str1.concat(str2));
// console.log(str1.concat("_", str2));
// console.log(str2); // not change original


// trim Method (remove white space)
// let str1 = "            malik               ";
// let str2 = "            malik        jahangir       ";  // only remove before and after string white spaces

// console.log(str1.trim());
// console.log(str2.trim());

// -------------------------------------
// Convert String into Array //

// let x = "a,b,c,d";
// console.log(x.split(","));
// console.log(x.split("."));
// let a = "1 2 3 7";
// console.log(a.split(" "));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Date and Time Objext /////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Javascript Date objects represent a single moment in the time in a platform independent format. 
// Date object contain a Number that represents milliseconds since 1 January 1970 UTC............

// Creating Date Object, We have four ways 
// 1. new Data()
// 2. new Data(year, month, day, hours, minutes, seconds, milliseconds)
// 3. new Data(date string)
// 4. new Data(milliseconds)


// new Date() created with new Date constructor

// let currdate = new Date();
// console.log(currdate);
// console.log(new Date());
// console.log(new Date().toLocaleString()); //perfect time zone of our country
// console.log(new Date().toString()); //perfect time zone of international starndart

// console.log(Date.now()); // from 1 January 1970 to now! return inthe form of milliseconds


// 2. new Data(year, month, day, hours, minutes, seconds, milliseconds)

// Note: january is 0 month and december is 11 month is JS 
// var d = new Date(2021, 5, 24, 20, 3, 30, 0);
// console.log(d.toLocaleString()); 

// var d1 = new Date(2021, 0, 24); // also get time automatically
// console.log(d1.toLocaleString());  


// at least two agument
// console.log(new Date(2021)); // return 1/1/1970
// console.log(new Date(2021,0)); //   return  1/1/2021



// 3. new Data(date string) create a new date obj  form a date string

// var dd = new Date("October 13, 2021 11:01:00");
// console.log(dd)
// console.log(dd.toLocaleString()) // get perfect time


// 4. new Data(milliseconds)

// var dd = new Date(1627655469000);
// console.log(dd.toLocaleString()) // get perfect time




// Methods Of DATE


// const d = new Date();

// console.log(d.toLocaleString());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());


// return in milliseconds

// console.log(d.setFullYear(2022, 10, 5));
// console.log(d.setFullYear(2022));
// console.log(d.setMonth(10));
// console.log(d.setDate(5));


// Time Methods

// const d = new Date();

// console.log(d.getTime());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());


// milliseconds return show properly in BROWSEER. 
// console.log(d.setHours(5));
// console.log(d.setMinutes(5));
// console.log(d.setSeconds(5));
// console.log(d.setMilliseconds(5));


// Practical Time And Date Methods
// new Date().toLocaleDateString();
// new Date().toLocaleTimeString();
// new Date().toLocaleString();





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Math Object in JS ////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// get Pi value
// console.log(Math.PI);


// round value get 
// let number = 10.51;
// console.log(Math.round(number));

// power similar to expression write in js like 2**3
// console.log(Math.pow(2,3));
// console.log(2**3);

// Square root

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(26));


// // absolute value (convert negative to positive)
// console.log(Math.abs(-25));
// console.log(Math.abs(-25.55));
// console.log(Math.abs(-5));
// console.log(Math.abs(5));
// console.log(Math.abs(2-5)); // 2-5 = -3 => absoluter = 3


// ceil function return x rounded up to its nearest integer
// console.log(Math.ceil(9.1)); 
// console.log(Math.ceil(9.5)); 
// console.log(Math.ceil(1.9)); 


// floor function oposite to ceil
// console.log(Math.floor(9.1)); 
// console.log(Math.floor(9.5)); 
// console.log(Math.floor(1.9)); 


// min and max 
// console.log(Math.min(0,150,22,30)); 
// console.log(Math.max(0,150,22,30)); 
 


// random return number between 0 (inclusive) and 1, so we get number we multiply it 10
// console.log(Math.random()); 
// console.log((Math.random()*10)); 
// console.log(Math.floor(Math.random()*10)); //get random number b/w 1 to 10


// Math.trunc() return the integer part of number
// console.log(Math.trunc(4.6)); // for positive number it work like math.floor 
// console.log(Math.trunc(-4.6)); // for negative number it work like math.ceil






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Time Events  in Js ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1. setTimeout(fun, millisecond) =>Execute a function, after waiting  specified of milliseconds

// setTimeout(() => {
//     console.log("Hello World");
// }, 5000);

//2.  setInterval(fun, millisecond) => Same as setTimeout(), but repeat the execution of the function continuously like digital clocl 

// setInterval(()=>{
//     console.log("Hello World");
// },1000);



//3. clearTimeout() use to stop setTimeoutEvent
// var x = setTimeout(() => {
//     console.log("Hello World");
// }, 5000);

// clearTimeout(x); 

//4. clearTimeout() use to stop setTimeoutEvent
// var x = setInterval(() => {
//     console.log("Hello World");
// }, 1000);

// setTimeout(() => {
//     clearInterval(x)
// }, 6000);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Object Oriented in Js ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  let bioData = {
//      name         : "malik" ,
//      age          :  18 ,
//      getData      : function(){ console.log(bioData.name)}
//  }
//  bioData.gender = "male";
// console.log(bioData);
// delete bioData.gender;
// console.log(bioData);
// bioData.getData();


// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     gender       : "male"
// }


// var mykeys = Object.keys(bioData)
// // console.log(mykeys);

// for (const e of mykeys) {
//     console.log(bioData[e])
// }

// another way After ES-6


// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     getData(){ console.log(bioData.name)}
// }

// console.log(bioData.age);
// bioData.getData()

// Object inside the Object


// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     edu: {
//         subject:"programmingC++",
//         semester:3
//     }
// }

// console.log(bioData.edu.subject);




// THIS

// console.log(this) // run on browser
// console.log(this.alert('hellow')) // run on browser




// run on browser, current contex of this is also window
// function x (){
// console.log(this) 
// }
// x();



// let names = "kuchBH"

// function x (){
//     console.log(this.names) 
//     }
//     x();
    
// important part
 // here contex of this is Obj, so we access any obj property like bio.name etc
// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     getData(){ 
//         console.log(this);
//         console.log(this.age);
//     }
// }

// bioData.getData()


// what the output of this only change fun type use fat arrow func..
// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     getData: ()=>{ 
//         console.log(this); // here contex is windows not Object, because we not use this in fat arrow fun
//         console.log(this.age);
//     }
// }

// bioData.getData() 


// ES - 6 PART

// Array DESTRUCTURING

// const myData = ["malik", 18, "C++"]
// let [name, age, subject] = myData;

// console.log(age);

// const student = ["ashar", 20, "js"];

// let [name, age, subject, gender="male"] = student;

// console.log(name, age, subject, gender)
 


// const myData = ["malik", 18, "C++"]
// let [name, age, subject, uni="Dawood"] = myData;

// console.log(uni);


// Object Destructuring



// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     uni : "dawood" 
// }

// let {name1, age2, uni2, sub="Cpp"} = bioData;
// console.log(name1);
// console.log(sub);



// Object Properties

// we use now use Dynamic Properties

// let myName = "name";


// let bioData = {
//     [myName]         : "malik" ,
//     age          :  18 ,
//     uni : "dawood" 
// }

// console.log(bioData);





// let myName = "malik"
// let age = 18

// let bioData = {
//     myName:myName,  //automatically detect the value
//     age:age
// }

// console.log(bioData);

// let x = 20;
// let y = 30;

// const numbers = {
//     x,
//     y
// }
// console.log(numbers)


// let myName = "name"
// let age = 18

// let bioData = {  myName, age  }

// console.log(bioData);


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// Spread Operator(...)


// const colors = ['red', 'blue', 'orange', 'green'];
// const myColors = colors;  // here copy referece



// console.log(myColors);
// console.log(myColors[0]);
// myColors[0] = 'grey';  
// console.log(myColors[0]);
// console.log(colors[0]); 



// old way
// const colors = ['red', 'blue', 'orange', 'green'];
// const myColors = ['red', 'blue', 'orange', 'green', 'white', 'black'];

// new way
// const colors = ['red', 'blue', 'orange', 'green'];
// const myColors = [...colors, 'white', 'black'];



// console.log(myColors);
// console.log(myColors[0]);
// myColors[0] = 'grey';
// console.log(myColors[0]);
// console.log(colors[0]); 



// let a = [1,2];
// let b = [3,4];
// let c = [...a, ...b];
// console.log(c);



//Note: all concept of spread operatot in Object 

///////////////////////////////////////////////////////////////////////////////////////////
// ES-7 (2016)
//////////////////////////////////////////////////////////////////////////////////////////

// 1 array inclucde

// const colors = ['red', 'blue', 'orange', 'green'];
// console.log(colors.includes('red'))

// ** operator (Exponentional Operator)

// console.log(2**3)



///////////////////////////////////////////////////////////////////////////////////////////
// ES-8 (2017)
//////////////////////////////////////////////////////////////////////////////////////////
// Padding in string
// let name = "malik".padStart(7);
// console.log(name);
// let name1 = "malik".padEnd(7);
// console.log(name1);

// Object  .Values() and >entries()   {obj to array}


// const person = {name:"Fred", age:22};
// console.log(Object.values(person));
// console.log(Object.values(person)[0]);
// console.log(Object.entries(person));
// console.log(Object.entries(person)[0]);




///////////////////////////////////////////////////////////////////////////////////////////
// ES-9 (2018)
//////////////////////////////////////////////////////////////////////////////////////////

// Spread Operator in Object Already done above 

///////////////////////////////////////////////////////////////////////////////////////////
// ES-10 (2019)
//////////////////////////////////////////////////////////////////////////////////////////

// flat array concept


// const arr = [
//     [1,2],
//     [3,4],
//     [5, [7,8] ]
// ]

// console.log(arr.flat());
// console.log(arr.flat(2));


// const arr1 = [
//     [1,2],
//     [3,4],
//     [5, [7, [9,10]] ]
// ]

// console.log(arr1.flat());
// console.log(arr1.flat(2));
// console.log(arr1.flat(3)); // or 
// console.log(arr1.flat(Infinity));  // no need to write number




// Object  .fromValues() and fromentries()   { array to Obj}


// const person = {name:"Fred", age:22};

// const x = Object.entries(person)

// console.log(Object.fromEntries(x));


///////////////////////////////////////////////////////////////////////////////////////////
// ES-11 (2020)
////////////

// Big Int

 
// let noRange = Number.MAX_SAFE_INTEGER;
// console.log(noRange);
// console.log(9007199254740991 + 12); // wrong answer because out of range ans expected

// // here we use BigInt freature of ES 2020 using (n)
// console.log(9007199254740991n + 12n); // this number type is Bigint


// NULLISH
// run in browser
// const foo = null ?? 'malik';
// console.log(foo)


// ES 2014

// use strict mode (work in browser)
// "use strict";
// x = 3.14;
// console.log(x);






 

