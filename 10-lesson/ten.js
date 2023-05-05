// let a = [1,  'me', 10, true, false]

// // console.log(a.slice(1));
// // let b = a.splice(2)
// a.pop()
// a.pop()
// console.log(a.splice(1, 1, 'can wear number'));
// console.log(a);
//==============================
// let a = [1,  'me', 10, true, false];

// console.log(a.indexOf(true));
//=======================================
// let a = [1, 9, 10, 5] 
// let b =''

// a.join('+')
// b += a
// console.log(b);
// console.log(a.join('+'));
// console.log(eval(a.join('+')));
// ======================================
// function calculate(a) {
//     let b = '';
//     b += a
//     // console.log(a.join('+'));
//     // console.log(eval(b)); 
//     console.log(b);   
//     return b;
// }

// console.log(calculate(b));
// calculate()
// console.log(a);
// calculate(eval(a))
// console.log(calculate());
//=========================================
// function calculate(array) {
//     console.log(eval(array.join('+')));
// }

// calculate([1, 9, 10, 5]);
// ====================================================
// function comparison(first, second) {
//     for (i in first )
//     for( i in second) 
//     if (first[i] === second[i]) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// comparison([17], [7])
// ==========================================================
//  let a = ['me', 'he']
//  let b ={};
//  console.log(a.join())
//  for( i of a)
//  for (j of i) {     
//     if([j] in b) {
//        ++b[j] 
//     }else {  
//        b[j] = 1  
//     }
// } console.log(b)

// console.log(b[j]);

// for(i of a[i])// {
//     if (i in b) {

//     }
// }
// console.log(i);
// console.log(j);
// console.log(a[i]);
// b += i
// console.log(b);
// function (params) {
    
// }
// function quantity(a) {
//     let res = {};
//     for (i of a) {
//         if ([i] in res) {
//             ++res[i]
//         } else {
//             res[i] = 1
//         }
//     } console.log(res);
// }

// quantity(`webbrainacademy`)
//  let a = ['menda u', 'hesenemi']
//  let b ={};
// //  console.log(a.join())
//  for( i of a)
//  for (j of i) {     
//     if([j] in b) {
//        ++b[j] 
//     }else {  
//        b[j] = 1  
//     }
// } console.log(b)

// console.log(b[j]);
//===================================================
// console.log('121212'.split(2).join(2));
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
// const capitilize1 = (str) => {
//     let res = "";
//     for (key in str) {
//       if (str[key - 1] === "-") {
//         res += str[key].toUpperCase();
//     } else {
//         res += str[key];
//     }
//     }
//     return res;
//   };
//   console.log(capitilize1("-mister-akram").split('-').join(''));
//   console.log(capitilize1.join());
// const camel = (a) => {
//     let res = "";
//     for( i in a) {
//         if(a[i - 1] == '-') {
//             res += a[i].toUpperCase();
//         } else {
//             res += a[i];
//         }
//     } return(res);
// };

// console.log(camel('-web-brain-academy').split('-').join(''));
// let v = [5, 4, 3, 2, 1]
// let b = new Array(5)
// let a = [1, 2, 3]
// console.log([] + '0');
// v[3]=10
// console.log(v.toString());
// console.log(v.join(''));
// console.log(v.pop());
// v.push(2)
// v.shift()
// v.unshift(3)
// v.pop()
// console.log(v.concat([6, 7, 8], [true]));
// console.log(v.includes(1));
// console.log(v.indexOf(7));
// console.log(v.lastIndexOf(7));
// console.log(v.reverse());
// console.log(v.length)
// console.log(v.join('+'));
// console.log(v.toString());
// console.log(Array.isArray(v));
// v.slice(1, 3)
// console.log(v);
// console.log(v.slice(1,3));
// console.log(v.splice(1, 3), v);
// console.log(v);
// console.log(b);
// =====================================04.05.2023=============================================
// let a = 'academy';
// console.log(a.valueOf('a'));
// let a = ['he', 'me']
// a[0] = 'she'
// console.log(a[0]);
// let a = ['a', 1, true] 
// for(i = 0; i < a.length; i++){
//     console.log(a[i]);
// }
// let b = new Array(1)
// console.log(b);
// let a = ['me', 'he']
// console.log(a.reverse());
// let a = 'me+and+you'
// console.log(a.split('+'));
// ====================================================================================================
// let a = {}
// let e = 'academy, It center, brain'
// let b =  e.toLowerCase()
// let d= ''
// for(i in b){if(b[i].toUpperCase() !== b[i].toLowerCase()){d += b[i]}}
// for(j of d){
//     if (a[j]) a[j]++
//     else a[j] = 1    
// }
// console.log(a);
// ================================================================================================
// let a = '-list-style-image'
// let b = ''
// for(i in a){
//     if (a[i-1] === '-') b += a[i].toUpperCase()
//     else if(a[i].toUpperCase() !== a[i].toLowerCase()) b += a[i]    
// }
// console.log(b);
// =================================================================================================
// const comparison = (a, b, c, d)=>{c = a.join(); d = b.join(); return console.log(c == d); };
// comparison([1, 2, 3, true, 'barcelona'], [1, 2, 3, true, 'barcelona is better than real madrid']);
// =================================================================================================
// let a = 23415
// let d = 0
// while (a) {
//     d += a % 10
//     a = parseInt(a / 10)
// }
// console.log(d);
// ===========================================================================================
// let a = 'academy'
// for
console.log([] + '0');
console.log([] + 0);
console.log([]=='0');
console.log([]==0);