// ////////////// LET, VAT, CONST, Global Scope,TEMPLATE LITERALS, ARROW FUN  ///////////////////////////
// 1. var
// function app(){
//     var name = "malik";
//     if(true){
//         var age = "22";
//     console.log(name);
//     console.log(age);
//     }
//     console.log(name);
//     console.log(age);
// }
// app();


// 2. let
// function app(){
//     let name = "malik";
//     name = "muhammad";
//     if(true){
//         let age = "22";
//     console.log(name);
//     console.log(age);
//     }
//     console.log(name);
//     console.log(age);
// }
// app();

// 3. const
// app();
// function app(){
//     const name = "malik";
//          name = "muhammad";  //error
//     if(true){
//         const age = "22";
//     console.log(name);
//     console.log(age);
//     }
//     console.log(name);
//     console.log(age);
// }

// 4. Global scope
// var name = "malik";
// let name2 = "muhammad";
// const name3 = "jahangir";
// function app(){
    
//     if(true){
//     console.log(name);
//     console.log(name2);
//     console.log(name3);
//     }
    
//     console.log(name);
//     console.log(name2);
//     console.log(name3);

// }
// console.log(name);
// console.log(name2);
// console.log(name3);
// app();
// console.log(name);
// console.log(name2);
// console.log(name3);


// 5. TEMPLATE LITERALS

// function abc(a=10, b=20){
//     return a+b;
// }
// var ans = abc();
// console.log(`Sum of a and b is ${ans}`);


// fad arrow function ()=>

// let app = (name,lastName="muhammad")=>{
//     return `Name of coder is ${name} ${lastName}`;
// }
// console.log(app("malik"));

// also short syntax
// const app = (name,lastName="muhammad") =>`Name of coder is ${name} ${lastName}`;
// console.log(app("malik"));


// ////////////////////////////////////////////////// ARRAYS  //////////////////////////////////////////////////////////////////////////



// * Traversal (with loop of ES-6 feature)
// * Search and Filter 
// * How to Sort and Compare 
// * Insert, Add, Replace and Delete Element
// * Map(), Reduce(), Filter()



// ----------------------------------------------------------------------
// * Traversal with loop's

// let arr = ["hamza", "junaid", "owais", "ashar", "umer", "talha"];
// console.log(arr[4]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);  //last element

// for (let i = 0; i < arr.length; i++) 
// {
//     console.log(arr[i]);  
// }

// for in loop (ES-6 feature)
// let arr = ["hamza", "junaid", "owais", "ashar", "umer", "talha"];

// for (const i in arr) {
//    console.log(arr[i]);
// }
// for of loop (ES-6 feature)
// let arr = ["hamza", "junaid", "owais", "ashar", "umer", "talha"];

// for (const e of arr) {
//    console.log(e);
// }

// For Each Loop (Combination of for each and for in loop, it is not support this keyword)


// let arr = ["hamza", "junaid", "owais", "ashar", "umer", "talha"];

// arr.forEach((element, index, arr)=>{
//       console.log(`name ${element} index ${index} of array ${arr}`);
// });





// ----------------------------------------------------------------------
// * Search and Filter 


// Array.prototype.IndexOf and Array.prototype.LastIndexOf

// let arr = ["hamza", "junaid", "owais", "ashar", "umer", "talha"];

// console.log(arr.indexOf("owais"));
// // console.log(arr.indexOf("haider")); // return -1 if not found
// console.log(arr.indexOf("umer",2)); //searching start with index 2 return umer index 4
// console.log(arr.indexOf("junaid",2)); //searching start with index 2 return -1

//  searching from last element, second argument of index not working here
// console.log(arr.lastIndexOf('owais')); 
// console.log(arr.lastIndexOf('haider')); //return -1 if not found


// Array.prototype.includes()
// let arr = ["hamza", "junaid", "owais", "ashar", "umer", "talha"];
// console.log(arr.includes("hamza")); //check element availabe or not in array return True/False
// console.log(arr.includes('owais',4)); //search from index 4


// Array.prototype.find() and findIndex
// find
// const prices = [22,50,9,21,14,45,55];

// console.log(prices.find((e)=> e>50 )); //return one element which is found first
// console.log(prices.find((e)=> e>55 )); //return undefine if not found

// findIndex

// console.log(prices.findIndex((e)=> e>50 )); //return one element which is found first
// console.log(prices.findIndex((e)=> e>55 )); //return -1 if not found




//  Array.prototype.filter()
// return new array after filter any element or condition
// return empty array if its not found

// const prices = [22,50,9,21,14,45,55];

// let newPrices = prices.filter((e,i)=> e>20); 
// console.log(newPrices); // return element which is greater than 20

// let newPrices = prices.filter((e,i)=> i>2); 
// console.log(newPrices); // return element after index 2 

// let newPrices = prices.filter((e,i,arr)=>arr); 
// console.log(newPrices); // return whole array not logic work, its check only for concept understand 



// ------------------------------------------------------------------------
// How to Sort and Compare 

// Array.prototype.sort()
// alphabetic sort here
// const month = ["mar", "jan", "dec","april", "may"];
// console.log(month.sort());

// const prices = [22,50,9,21,14,45,55];
// console.log(prices.sort()); //it work only string






// --------------------------------------------------------------------------
// * Insert, Add, Replace and Delete Element



// ELEMENT ADD



// push (add element from last)
// let Friend = ["owais", "ashar", "umer", "talha"];

// Friend.push("hamdan");

// console.log(Friend);

// var CheckReturn = Friend.push("anus","moon");
// console.log(CheckReturn) //return length of array

// unshift (add element from first)

// let Friend = ["owais", "ashar", "umer", "talha"];

// Friend.unshift("hamdan");

// console.log(Friend);

// var CheckReturn = Friend.unshift("anus","moon");
// console.log(CheckReturn) //return length of array

// another example
// const arr = [1,2,3,5];
// arr.unshift(4,6);
// console.log(arr);



// ELEMENT DELETE

// pop (delete element from last)
// let Friend = ["owais", "ashar", "umer", "talha"];

// Friend.pop();
// console.log(Friend);

// var CheckReturn = Friend.pop(); 
// console.log(CheckReturn); //return deleted element


// shift (delete element from last)

// let Friend = ["owais", "ashar", "umer", "talha"];

// Friend.shift();
// console.log(Friend);

// var CheckReturn = Friend.shift();
// console.log(Friend); 
// console.log(CheckReturn); //return deleted element

// ELEMENT UPDATE
// splice //add and remove element

// const month = ["jan", "mar","april", "jun"]
// first pass index number,  second how many elemt delete, third what add
// month.splice(1,0,"feb");
// console.log(month);


// const month = ["jan", "mar","april", "jun"]
// let checkReturn = month.splice(2,1,"feb"); 
// console.log(month);
// console.log(checkReturn); //return deleted elements

// // delete only
// const month = ["jan", "feb", "mar","april", "jun"]
// const upM = month.splice(1,Infinity)  //infinity delete all from index 1
// console.log(month);

// ////////////////////////////////////////////////////////////////////////
// MAP,REDUCE AND FILTER



// MAP()
// const array1 = [1,4,9,16,25];
// // num > 9

// let newArr = array1.map((e,i,arr)=>e>20);
// console.log(newArr);  //only condition statement map() return answer in t/f form

// MAP() RETURN VALUES AND INDEX
// let newArr2 = array1.map((e , i , arr)=>{
//     return `${i} and the value is ${e} belong to arr ${arr}`;
// })
// console.log(newArr2);


//   Challenge
// ///////////////////////////////////////

// 1, Find the square root of each element in an array?

// let arr = [25, 36, 49, 64, 81];

// let sqRoot = arr.map((e, i, arr)=>{
//     return Math.sqrt(e);
// });

// console.log(sqRoot);

// 2, Multiply each element multiply by 2 and return only thosee element which are greater than 10?
// chaing effect
// let arr = [2, 3, 4, 6, 8];

// let sqRoot = arr.map((element) => element*2).filter((currElement)=> currElement>10);
// console.log(sqRoot);

// --------------------------------------------------
// REDUCE()

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
// // accumulator mean what operation here sum is operation
// let sum = arr.reduce((accumulator, e, i, arr) => {
//     return accumulator+=e;
// })

// console.log(sum); //sum of array is 13



// let arr = [5,6,2];
// // accumulator mean what operation here sum is operation
// let sum = arr.reduce((accumulator, e, i, arr) => {
//     return accumulator+=e;
// },150) // add 150 and sum of array, accumulator add array in to 150


// console.log(sum); //sum of array is 163

// Convert 2d, 3d into 1d array using reduce 

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




// ////////////////////////////
// apply reduce above code
// chainable Method 

// let arr = [2, 3, 4, 6, 8];

// let sqRoot = arr.map((element) => element*2).filter((currElement)=> currElement>10).reduce((acc, e)=> acc+=e);
// console.log(sqRoot);





// ////////////////////////////////////////////////// String  //////////////////////////////////////////////////////////////////////////











