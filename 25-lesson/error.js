// try {
//     console.log(number);
// } catch  {
//     console.log('Ups, went something wrong');
// }
// ===============================================
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
//===============================================
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
// ======================================================
// try {
//     console.log(number);
// } catch (error){
//     console.log(error.name);
// }
// ==================================
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
// =================================================================
// try {
//     throw new Error('Ups, something went wrong!')
// } catch (error){
//     // console.log('Ups, something went wrong!');
// }
// ============================================================
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
// ==================promise:then, catch and finally=================
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
// ==================================================================
// ====================Promise all================================
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
