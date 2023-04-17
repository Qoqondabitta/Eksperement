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


