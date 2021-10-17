//Promises (mean succes(fullfilled) or fail(reject))
///////////////
// fetch return promises
// best alternative of Ajax method

// here we only see how to consume promises 
// creation of promises is advance concept


// through Promises...........
// GET https://icanhazdadjoke.com/
// const jokes = document.querySelector('#jokes');
// const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = ()=> {
    
//     const setHeader = {
//         headers:{
//             Accept: "application/json"
//         }
//     }


//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res)=>res.json()).then( (data)=> {jokes.innerHTML = data.joke})
//     .catch((err)=>console.log(err))
// }


// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

// ------------------------------------------------------------
// THrow Async and Await............

const generateJokes = async()=> {
    
    try{

        
        const setHeader = {
            headers:{
                Accept: "application/json"
            }
        }
        
        
        const res = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
        
    }catch(err){
        console.log(err)
    }
}




















