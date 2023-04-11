
// function getData(){
    // setInterval(()=>{
    // return fetch('https://jsonplaceholder.typicode.com/users').then((res) => 
    // res.json()
    // ); 
    // },0)
    
// }
function getData(){
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => 
    res.json()
    );   
}


function getCached(func) {
    let cache = new Map()
    return function(x){
        if(cache.has(x)) {
            console.log(cache.get(x));
            return cache.get(x)
        }
        let res = func()
        return cache.set(x, res)
    }
}

getData = getCached(getData)