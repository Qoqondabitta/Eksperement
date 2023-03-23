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
