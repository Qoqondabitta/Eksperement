// let player = {
//     club : "Barcelona",
//     number : "10",
//     _name : 'Lionel' 
// }
// let proxy = new Proxy(player, {
//     get(target, property){
//         // if(property.startsWith('_')) return false
//         return target[property]
//         // return 'me'
//         // console.log(target, property);
//         // return 'hey babe'
//     }
// })
// let proxy = new Proxy(player, {
//     set(target, property, value){
//         if(property === '_name') return false
//         target[property] = value
//         return true
//     }
// })
// proxy.trophy = 'EPL'
// proxy._name = 'Harry'
// console.log(proxy);
// console.log(proxy.club);
// console.log(proxy.club);
// console.log(proxy.trophy);