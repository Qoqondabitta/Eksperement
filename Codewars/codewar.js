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