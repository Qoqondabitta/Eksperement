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
