{
// try {
//     console.log(number);
// } catch  {
//     console.log('Ups, went something wrong');
// }
}
// ===============================================
{
// try {
//     console.log(number);
// } catch (error){
//     console.log(error);
// }

// try {
//     console.log(number);
// } catch (error){
//     console.log(error.message);
// }
}
//===============================================
{
// try{
//     class a {
//     name = 'me'
// }
// class b extends a {
//     super(name)
//     getName(){
//         console.log(this.name);
//     }
// }

// let c = new b()
// c.getName()
// } catch(error){
//     console.log(error.message);
// }
}
// ======================================================
{
// try {
//     console.log(number);
// } catch (error){
//     console.log(error.name);
// }
}
// ==================================
{
// try {
//     console.log(number``);
//     JSON.parse('{name:"me"}')
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
// }
//
// try {
//     throw new Error('Ups, something went wrong!')
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
// }
}
// =================================================================
{
// try {
//     throw new Error('Ups, something went wrong!')
// } catch (error){
//     // console.log('Ups, something went wrong!');
// }
}
// ============================================================
{
// let database = {
//     us1 :{
//         username:'John',
//         password :111,
//         FullName: 'John Smith'
//     },
//     us2 :{
//         username:'Harry',
//         password :222,
//         FullName: 'Harry Kane'
//     }
// }
// console.log('started');
}
// ==================promise:then, catch and finally=================
{
// let promise = new Promise((resolve, reject)=>{
//     if (database.us1.username==='John'&&database.us1.password===111) {
//         resolve('yes')
//     } else {
//         reject('no')
//     }
// })

// promise.then((b)=>console.log(b))
// .catch((err)=>{console.log(err)})
// .finally(()=>{console.log('finished');})
}
// ==================================================================
// ====================Promise all================================
{
// let all = Promise.all([
//     new Promise((resolve, reject)=>{
//             if (database.us1.username==='John'&&database.us1.password===111) {
//                 resolve('yes')
//             } else {
//                 reject('no')
//             }}),
//     new Promise((resolve, reject)=>{
//             if (database.us1.username==='John'&&database.us1.password===111) {
//                 resolve('yes')
//             } else {
//                 reject('no')
//             }})
// ])
// all.then((res)=>console.log(res)).catch((err)=>{console.log(err)})
}
// ================================================================
// ====================handling problem with callback===============
// console.log('Started');
// const login = (name, code, callback)=>{
//     setTimeout(()=>{
//         if (database.us1.username === name && database.us1.password === code) {
//             return callback(console.log('Congratulations'))
//         } else {
//             return callback(console.log('No'))
//         }
//     })
// }
// login('John', 111, (check)=>{
//     // console.log(check);
//     console.log('finished');
// })
// ================================================================
// =============================async function======================
// let b = new Promise((resolve, reject)=>{
//     if (database.us1.username==='John'&&database.us1.password===111) {
//     resolve('yes')
//     } else {
//     reject('no')
//     }})

// const getData = async ()=>{
//     let a = await b;
//     console.log(a);
//     console.log('finished');
// };
// getData();
// ========================25/04/2023======================
// let a = {
//     Sam : {
//         name : 'Sam',
//         password : 12344321,
//         fullName : 'Sam Murphy'
//     },
//     Peter : {
//         name : 'John',
//         password : 1116554,
//         fullName : 'Peter Parker'
//     }
// }
// console.log('started...');
// const login = (check, lg, pw, callback)=>{
//     setTimeout(()=>{

//         if (check.name === lg && check.password===pw) {
//             return callback(`${check.fullName}, welcome to Facebook`)
//         } else {
//             return callback('Ups, wrong password, try again later.')
//         }
//     }, 3000)
// }
// login(a.Sam, 'Sam', 12344321, (b)=>{
//     console.log(b);
//     console.log('finished');
// })
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// const login = (check, lg, pw)=>{
//     setTimeout(()=>{

//         if (check.name === lg && check.password===pw) {
//             return `${check.fullName}, welcome to Facebook`
//         } else {
//             return 'Ups, wrong password, try again later.'
//         }
//     }, 1000)
// }
// // const login = (check, lg, pw)=>{
// //     if (check.name === lg && check.password===pw) {
// //         return console.log(`${check.fullName}, welcome to Facebook`);
// //     } else {
// //         return console.log('Ups, wrong password, try again later.');
// //     }
// // }
// let b = login(a.Sam, 'Sam', 12344321)
// console.log(b);
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// console.log('finished');
// let a = {
//     John : {
//         name : 'John',
//         password : 12344321,
//         fullName : 'John Smith'
//     },
//     Peter : {
//         name : 'Peter',
//         password : 6554,
//         fullName : 'Peter Parker'
//     }
// }
// console.log('started'); //1
// const login = (check, lg, pw, callback)=>{
//     setTimeout(()=>{
//         if (check.name===lg && check.pw===pw) {
//             return callback(`${check.fullName}, welcome to the Facebook!`) //2
//         } else {
//             return callback(`Sorry, but password or login is wrong!`) //2
//         }
//     }, 1000)
// }
// login(a.John, 'John', 12344321, (b)=>{
//     console.log(b);
//     console.log('finished'); //3
// })

// let a = {
//     name : 'a',
//     b : 'c'
// }
// for (i in a){
//     console.log(a[i]);
// }
// let a = 13
// let b = {x:24, y:21, z:18}
// const getMin = (c)=>{
//     for(i in b){
//         d=`${b[i]-c}`
//     }
//     console.log(Math.min(d));
// }
// getMin(a)
// let a = 'beautiful'
// count=0
// let no = 0
// for(i of a){
//     if (i==='a'||i==='e'||i==='i'||i==='o'||i==='u') {
//         ++count
//     } else {
//         no++
//     }
// }
// console.log(`${++count}-that letters`)
// console.log(`${no++}-not that letter`)
// ===========================================================
// let ladder = {
//     step : 0,
//     up(){
//         this.step++
//     },
//     down(){
//         this.step--
//     },
//     showStep : function(){
//         console.log(this.step);
//     }
// };
// console.log(ladder.up().down().showStep().down().showStep());
// let a = '1010100'
// let b = 0
// let c = 0
// for(i in a){
//     if (a[i]==='1') {
//         ++b
//     } else {
//         ++c
//     }
// }
// console.log(`1- dan ${b} ta`);
// console.log(`0- dan ${c} ta`);
// const calculate = (a, b, c)=>{
//     console.log(Math.max(a, b, c)-Math.min(a, b, c));
// }
// calculate(12, 43, 78)
// const randomInteger = (a)=>{
//     let a = Math.random()*100
//     let b = parseInt(a)
//     if(b<a){
//         console.log(b);
//     } else {
//         b=b/2
//         console.log(parseInt(b));
//     }
//     // console.log(b);
// }
// randomInteger(50)

// console.log(Math.random(5)*10);

// let a = 123456
// let b = 0
// const calculator = (a)=>{
//     let c = a.toString()
//     for(i in c){
//         b += +c[i]   
//     }
//     console.log(b);
// }
// calculator(a)
// =====================================
// let players = {
//   Captain : {
//     name : 'Harry Kane',
//     number : 10,
//     fullName : `Harry kane`
//   },
//   Goalkeeper : {
//     name : 'Jordan Pickford',
//     number : 1,
//     fullName : `Jordan Pickford`
//   },
//   Defender : {
//     name : 'Trent Alexander-Arnold',
//     number : 66,
//     fullName : `Trent Alexander-Arnold`
//   },
//   Midfielder : {
//     name : 'Jude Bellingham',
//     number : 20,
//     fullName : `${this.name} plays under the number ${this.number}`
//   }
// }

// console.log('started');
// let check = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(players.Captain.name === 'Harry Kane' && players.Captain.number === 10){
//       resolve('Harry Kane plays under the number 10')
//     } else {
//       reject ('There is no such a player in England national soccer team')
//     }
//   }, 2000)
// });
// let all = Promise.all([
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(players.Captain.name === 'Harry' && players.Captain.number === 10){
//         resolve('Harry Kane plays under the number 10')
//       } else {
//         reject ('There is no such a player in England national soccer team')
//       }
//     }, 2000)
//   }),
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(players.Captain.name === 'Harry' && players.Captain.number === 10){
//         resolve('Harry Kane plays under the number 10')
//       } else {
//         reject ('There is no such a player in England national soccer team')
//       }
//     }, 2000)
//   })
// ]);
// all.then((res)=>console.log(res)).catch((error)=>console.log(error))
// ============================================================================
{
// console.log('started');
// let check = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(players.Captain.name === 'Harry Kane' && players.Captain.number === 10){
//       resolve('Harry Kane plays under the number 10')
//     } else {
//       reject ('There is no such a player in England national soccer team')
//     }
//   }, 2000)
// });
// let final = async ()=>{
//   res = await check
//   console.log(res);
//   console.log('finished');
// }
// async function final(){
//   res = await check
//   console.log(res);
//   console.log('finished');
// }
// final()



// check.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
}
// ================================video tutorial on callback functions=======================================================
{
// let player = {
//   forward : {
//     name : 'HLuis',
//     number : 9,
//     origin : 'England'
//   },
//   "Right Winger" : {
//     name : 'Lionel',
//     number : 10,
//     origin : 'Argentina'
//   }
// }
// console.log('started');
// let promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(player["Right Winger"].name === 'Lionel' && player["Right Winger"].number === 10){
//       resolve('Lionel Harry is from Argentina.')
//     } else {
//       reject('Ouh, sorry but there is no such a player with the information provided above!')
//     }
//   }, 2000)
// })
// let all = Promise.all([
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(player["Right Winger"].name === 'Lionel' && player["Right Winger"].number === 10){
//         resolve('Lionel Harry is from Argentina.')
//       } else {
//         reject('Ouh, sorry but there is no such a player with the information provided above!')
//       }
//     }, 2000)
//   }),
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(player["Right Winger"].name === 'Lionel' && player["Right Winger"].number === 1){
//         resolve('Lionel Harry is from Argentina.')
//       } else {
//         reject('Ouh, sorry but there is no such a player with the information provided above!')
//       }
//     }, 2000)
//   })
// ])
// all.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
// let async = async()=>{
//   res = await promise
//   console.log(promise);
//   console.log('finished');
// }
// async()
// promise.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
}
// ==========================toFixed and toString======================================
{
// let a = 1234564874896
// let b = 0
// const calculator = (a)=>{
//     let c = a.toString()
//     for(i in c){
//         b += +c[i]   
//     }
//     console.log(b);
// }
// calculator(a)
// let a = 1.0465
// console.log(toFixed(a));
}
// ====================================================================================
// ======just recalling callback, promise and async await====================
{
// let player = {
//     Barcelona : {
//         name : 'Lionel',
//         position : 'Right Winger',
//         number : '10 and he is captain'
//     }, 
//     Liverpool : {
//         name : 'Jordan Henderson',
//         position : 'Midfielder',
//         number : '14 and he is captain'
//     }
// }
// console.log('started');
}
// ======================================async await function=============================================
{
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {        
//         if (player.Barcelona.name==='Lionel' && player.Barcelona.position==='Right Winger') {
//             resolve(`${player.Barcelona.name} plays under the number ${player.Barcelona.number}.`)
//         } else {
//             reject('Ouh, sorry but there is no such a player with the data given')
//         }
//     }, 1000);
// })
// const another = async()=>{
//     let res = await promise
//     console.log(res);
//     console.log('finished');
// }
// another()
}
// ======================================promise and promise all========================================
{
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
        
//         if (player.Barcelona.name==='Lionel' && player.Barcelona.position==='Right Winger') {
//             resolve(`${player.Barcelona.name} plays under the number ${player.Barcelona.number}.`)
//         } else {
//             reject('Ouh, sorry but there is no such a player with the data given')
//         }
//     }, 1000);
// })
// // promise.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=> console.log('finished'))
// let all = Promise.all([
//     promise = new Promise((resolve, reject)=>{
//         setTimeout(() => {
            
//             if (player.Barcelona.name==='Lionel' && player.Barcelona.position==='Right Winger') {
//                 resolve(`${player.Barcelona.name} plays under the number ${player.Barcelona.number}.`)
//             } else {
//                 reject('Ouh, sorry but there is no such a player with the data given')
//             }
//         }, 1000);
//     }),
//     promise = new Promise((resolve, reject)=>{
//         setTimeout(() => {
            
//             if (player.Barcelona.name==='Lionel' && player.Barcelona.position==='Right Winger') {
//                 resolve(`${player.Barcelona.name} plays under the number ${player.Barcelona.number}.`)
//             } else {
//                 reject('Ouh, sorry but there is no such a player with the data given')
//             }
//         }, 1000);
//     })
// ])
// all.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
}
// ========================================Callback====================================================
{
    // function login(lg, pw, callback){
    //     setTimeout(() => {        
        //         if(lg === player.Barcelona.name && pw === player.Barcelona.position){
//             return callback(`${player.Barcelona.name} plays under the number ${player.Barcelona.number}.`)
//             } else return callback('Ouh, sorry but there is no such a player with the data given')
//         }, 3000);
// }
// login('Lionel', 'Right Winger', (par)=>{console.log(par);console.log('finished');})
// console.log(take);
}
// =========================================================================================================
{
    // try {
    // if (a===false) {
    //     throw ('You are using the variable that is  not defined')
    // }
//     throw new ReferenceError ('Just give some value to the a, then call it')
//     console.log(a);
// } catch(err){
//     console.log('Error happened :', err.name);
//     console.log('Error happened :', err.message);
// }
}
// ==================================================================================================
// ===============================================Callback new Tutor===================================================
{
let cars = [
    {id : 1, name : 'Spark', year : 2012},
    {id : 2, name : 'Traverse', year : 2021},
    {id : 3, name : 'Tahoe', year : 2020},
]
function render (looper){
    setTimeout(() => {
    looper.forEach(value=>{
        console.log(value);
    })        
    }, 1000);
}
// render(cars)
function deleteCar(id, callback){
    setTimeout(() => {
    let res = cars.filter(value=>value.id !== id)
    cars = res  
    callback(cars)     
    }, 3000);    
}
// deleteCar(1, render)
function addCar(car, callback){
    setTimeout(() => {        
    cars = [...cars, car]
    callback(cars)
    }, 2000);
}
// addCar({id:4, name : 'Tracker', year : 2019}, render)
}
// ==========================================================================
// ================================Promise===================================
{
    let cars = [
        {id : 1, name : 'Spark', year : 2012},
        {id : 2, name : 'Traverse', year : 2021},
        {id : 3, name : 'Tahoe', year : 2020},
    ]
    function render (){
        setTimeout(() => {
        cars.forEach(value=>{
            console.log(value);
        })        
        }, 1000);
    }
    // render()
    function deleteCar(id){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                let res = cars.filter(value=>value.id !== id)
                cars = res 
                let error = false
                if (!error) resolve() 
                else reject('There is an error that you should fix')
                }, 3000);  
        })
    }
    // deleteCar(1).then(render).catch(error=>console.log(error))
    function addCar(car){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {        
                cars = [...cars, car]
                let error = false 
                if(!error) resolve()
                else reject('There is an error that you should fix')
                }, 2000);
        })
    }
    // addCar({id:4, name : 'Tracker', year : 2019}).then(render).catch(error=>console.log(error))
}
// =============================Async await function=====================================
{
    let cars = [
        {id : 1, name : 'Spark', year : 2012},
        {id : 2, name : 'Traverse', year : 2021},
        {id : 3, name : 'Tahoe', year : 2020},
    ]
    function render (){
        setTimeout(() => {
        cars.forEach(value=>{
            console.log(value);
        })        
        }, 1000);
    }
    // render()
    // function deleteCar(id){
    //     return new Promise((resolve, reject)=>{
    //         setTimeout(() => {
    //             let res = cars.filter(value=>value.id !== id)
    //             cars = res 
    //             let error = false
    //             if (!error) resolve() 
    //             else reject('There is an error that you should fix')
    //             }, 3000);  
    //     })
    // }
    // deleteCar(1).then(render).catch(error=>console.log(error))
    // async function wait(){
    //     await deleteCar(1).then(render).catch(error=>console.log(error))
    // }
    // wait()
    // async function deleteCar(id){            
    //             let res = await cars.filter(value=>value.id !== id)
    //             cars = res        
    //             render()
    // }
    // deleteCar(1)
    function addCar(car){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {        
                cars = [...cars, car]
                let error = false 
                if(!error) resolve()
                else reject('There is an error that you should fix')
                }, 2000);
        })
    }
    // addCar({id:4, name : 'Tracker', year : 2019}).then(render).catch(error=>console.log(error))
}
 