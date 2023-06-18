// let a = {name : 'John', _password : 'unknown', age : 17}
// let b = {
//     from : 1,
//     to : 11
// }
// let proxy = new Proxy(b, {
//     has(b, property){
//         return b.from <= property && b.to >= property
//     }
// })
// console.log(Reflect.has(b, 2));
// Reflect.set(b, 'to', '9') // false
// b.to = 9 // true
// console.log(11 in proxy);
// console.log(Object.isExtensible(a));
// Reflect.set(a, 'title', 'student')
// Reflect.ownKeys(a, Object.keys(a).filter((value)=>value.includes('_')===false ? console.log(value):false))
// Reflect.preventExtensions(a)
// Reflect.has(a, 11)
// console.log(Reflect.isExtensible(a));

// console.log(a);
// console.log(a);
// console.log(Reflect.get(a, 'age'));
// let proxy = new Proxy(a, {
//     ownKeys(a){
//         return Object.keys(a).filter((value) => value.includes('_') === false ? console.log(value) : false)
//     }
// })
// console.log(proxy);

// for(i in proxy){
    // console.log(i);
// }