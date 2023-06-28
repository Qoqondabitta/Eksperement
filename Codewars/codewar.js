// function mask(code){
//     if(code.toUpperCase()) return code.splice()
// }
// let a = [1, 2]
// console.log(a.splice(0, 2, 4));
// let a = [1,  'me', 10, true, false, 4, 5, 6, 7, 8, 9, 10]
// console.log(a.splice(0, a.length-4));
// console.log(a.slice(1, 1));
// let a = '23409732857234809572'
// let b = a.split('')
// let c = b.fill('*', 0, b.length-4)
// console.log(c);
// console.log('================================================');
// function mask(code){
//     if(code.length<5) return console.log(code);
//     else {
//         let b = code.split('')
//         let c = b.fill('*', 0, b.length-4)
//         return console.log(c.join(''));
//     }
// }
// mask('9572irhu')
// ===================================================================
// let a = 'aaabbbcccaadd'
// let b = []
// let c = []
// for(vl in a){
//     if(a[vl]===a[vl -1]) b.push(a[vl])
//     else c.push(a[vl])
// console.log(a[vl+1], vl);
// console.log();
// }
// console.log(c);
// var uniqueInOrder=function(iterable){
//     var s = []
//     for(i in iterable){
//         if(iterable[i]!==iterable[i-1]) s.push(iterable[i])
//     }
//     return console.log(s);
// }
// uniqueInOrder([1, 2, 3])
// console.log(b);
// function last(a) {
//   let res = ' '
//    for ( i in a) {
//     res +=
//     if((a[i -1] === '-')) {
//       console.log(a[i].toUpperCase());
//     } else {
//       console.log(a[i]);
//     }
//    } console.log(res += a[i]);
// }

// last(`-web-brain-academy`)
// ========================23.06.2023===========================================
// let b = ['bc', 'sale', 'te']
// let a = ['academic', 'bale', 'readme']
// console.log(c);
// function inArray(array1,array2){
//     let c = []
//     let d = []
//     let res = array1.map(value=>{
//         return array2.filter(vl=>{
//             if(vl.includes(value)){
//                 if(c.includes(value)) d.push(value)
//                 else {
//                     c.push(value)
//                 }
//             }
//         })
//     })
//     return console.log(c.sort((a, b)=>a.localeCompare(b)));
// }
// inArray(['bc', 'sale', 'te'], ['academic', 'bale', 'readme'])
// inArray(['ic', 'sale', 'me', 'me'], ['academic', 'bale', 'readme'])
// console.log(res);
// console.log(a.includes(b));
// cars.sort((a,b)=> a.brand.localeCompare(b.brand))
// let a = 78671
// let b = ''
// let c = b + a
// let d = []
// let k;
// let n;
// let m;
// console.log(k, 7e5, n);
// for(i=1;i>2;i++){
//     let k = +`${parseInt(a / +`1e${c.length-i}`)}`
//     let n =  +`${k}e${c.length-i}`
//     // m = d.push(n)
//     // console.log(m);
//     console.log(n);
//     break
// }

// console.log(+`1e${c.length-1}`);
// let i =1
// while (+`1e${c.length-i++}`>1) {
//     d.push(a % +`1e${c.length-1}`)
//     d.push(a % +`1e${c.length-i++}`)
//     // console.log(d.join('+'));
//     // console.log(i);
// }
// console.log(b + a);
// let test=['me', 'he']
// console.log(test.join('+'));
// let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let b = ''
// let c = 'webAcademy'
// for(i of a){
//     for(j of c.toLowerCase()){
//         if(i===j){
//             b += i
//         }
//     }
// }
// console.log(b);
// class Calculator {
//     constructor(action){
//         if(action==='plus'){
//             this.plus = '+'
//         } if(action==='minus') this.minus = '-'
//         if(action==='times') this.times = '*'
//         if(action==='dividedBy') this.divided = '/'

//     }

// }
// let a = [12, 3, 5, 6]
// let b = [47, 9, 36, 25, 144]
// let res = a.sort((a, b)=>a-b)
// let power = b.sort((a, b)=>a-b)
// let d;
// for(j of a){
//     for(i of b){
//         if(i === j ** 2){
//             return console.log(true);
//         } else {
//             return console.log(false);
//         }
//     }
// }
// console.log(d);
// let a = [12, 3, 5, 6]
// let b = [ 9, 36, 25, 144]
// let res = a.sort((a, b)=>a-b)
// let power = b.sort((a, b)=>a-b)
// let f =  a.map(value =>value * value).every((v, i)=>v===b[i])
// console.log(f);
// let a = ['academic', 'purpose', 'get', 'masterDegree', 'is', 'to', 'degree']
// let b = a.splice(0, 2).join('')
// let c = a.splice(0, 2).join('')
// let k = a.splice(0, 2).join('')
// console.log(c);
// d.push(b)
// d.push(c)
// d.push(k)
// console.log(d.sort((a, b)=>b.length-a.length)[0]);
// console.log(a.splice(0, 2).join(''), a);
// function longestConsec(star, k) {
//   let d = [];
//   for (i = 0; i < star.length; i++) {
//     d.push(star.slice(i, k + i).join(""));
//   }
//   let g = d.sort((a, b)=>b.length-a.length)[0]
//   return g;
// }
// console.log(
//     longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// );
// let d = []
// while(a.length>0){
// d.push(a.splice(0, 2).join(''))
// }
// let g = d.sort((a, b)=>b.length-a.length)[0]
// console.log(g);
// ===================================================================================
// let a = {A:1, B:2}
// a['C']=3
// Object.entries(a).map(([data])=>console.log(data))
// function compare(first, second){
//   let a = first.split('')
//   let b = second.split('')
//   let c = a.sort((a, b)=>a.localeCompare(b))
//   let d = b.sort((a, b)=>a.localeCompare(b))
//   let e = c.join()
//   let f = d.join()
//   return f === e
// }
// console.log(compare('asd', 'dsa'));
// let obj1 = {title:'web'}
// let obj2 = {title:'web'}
// console.log(obj1===obj2, obj1==obj2);
// let a = [2, 3, 12, 1, 34]
// let order = a.sort((a, b)=>b-a)
// console.log(order);
// let a = [2, 3, 12, 1, 34]
// a.splice(2, 0, 'web')
// console.log(a);
let a = 'abc'
let b = []
for(i=0;i<a.length;i++){
    if(a.length%2===0){
        let v = c.join('').slice(i, i++)
        b.unshift(v)
    } else {
        let c = a.split('')
        c.push('_')
        let g = c.join('').slice(-2)
        b.push(g)
    }
}

// let d = a.split('')
// d.push('_')
// let g = d.join('').slice(-2)
// b.push(g)
// let v = d.join('').slice(0, 2)
// b.unshift(v)

console.log(b);