// import {player} from "./mock1.js"
let player = {
    Sterling: {
        club : 'Chelsea',
        number : '10',
        trophy : 'EPL'
    }, 
    Stones : {
        club : 'Manchester city',
        number : '5',
        trophy : 'EPL'
    }
}

console.log('started');
// let  a = new Promise((resolve, reject)=>{
//     setTimeout(() => {        
//         if (player.Sterling.club === 'Chelsea' && player.Sterling.number === '10') {
//         return resolve(`Hitherto Sterling won ${player.Sterling.trophy} and plays under the number 10`)
//         } else {
//         return reject(`Ouh! Sorry, but there is no such a player with the data provided`)
//         }
//     }, 3000);
// })
// const final = async()=>{
//     let b = await a
//     console.log(b);
//     console.log('finished');
// }
// final()
// let all = Promise.all([
//     new Promise((resolve, reject)=>{
//         setTimeout(() => {        
//             if (player.Sterling.club === 'Chelsea' && player.Sterling.number === '10') {
//             return resolve(`Hitherto Sterling won ${player.Sterling.trophy} and plays under the number 10`)
//             } else {
//             return reject(`Ouh! Sorry, but there is no such a player with the data provided`)
//             }
//         }, 3000);
//     }),
//     new Promise((resolve, reject)=>{
//         setTimeout(() => {        
//             if (player.Sterling.club === 'Chelsea' && player.Sterling.number === '10') {
//             return resolve(`Hitherto Sterling won ${player.Sterling.trophy} and plays under the number 10`)
//             } else {
//             return reject(`Ouh! Sorry, but there is no such a player with the data provided`)
//             }
//         }, 3000);
//     })
// ])
// all.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
// a.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finally'))
// =========================================================================================================
// function check (lg, pw, callback){
//     setTimeout(() => {        
//         if (player.Sterling.club === lg && player.Sterling.number === pw) {
//             return callback(`Hitherto Sterling won ${player.Sterling.trophy} and plays under the number 10`)
//         } else {
//             return callback(`Ouh! Sorry, but there is no such a player with the data provided`)
//         }
//     }, 3000);
// }
// console.log('started')
// check('Chelsea', '10', (final)=>{
// console.log(final)
// console.log('finished')
// })
// let receive = check('Chelsea', '10')
// console.log(receive)
// console.log('finished')
import { player } from "./mock1";

function check(lg, pw){
    if (player.Sterling.number === pw && player.Sterling.club === lg) {
        return `Sterling plays under the number 10 and won ${player.Sterling.trophy}`
    } else {
        return `There is no such a player with the given data`
    }
}
check('Chelsea', '10')