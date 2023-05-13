//   let cars = [
//     {id:1, year:1998, engine:1, brand:`Tico`},
//     {id:2, year:2005, engine:1.2, brand:`Matiz`},
//     {id:3, year:2010, engine:1.6, brand:`Gentra`},
//     {id:4, year:2010, engine:1.5, brand:`Cobalt`},
//     {id:5, year:2012, engine:2, brand:`Malibu`},
//     {id:6, year:2000, engine:1.2, brand:`Damas`},
//     {id:7, year:2018, engine:2.4, brand:`Tracker`}
// ]

// let filter = cars.filter((value)=>value.year < 2010)
// let filter = cars.filter((value)=>value.year > 2010)
// let filter = cars.filter((value)=> value.year < 2010)
// let filter = cars.filter((value)=> value.year == 2010)
// let filter = cars.sort((a,b)=> a.year-b.year)
// let filter = cars.sort((a,b)=>a.engine-b.engine)
// let filter = cars.sort((a,b)=> a.brand.localeCompare(b.brand))
// let filter = cars.filter((value)=> value.year < 2000 )
// filter.value.push(endi=`eski`)
// console.log(filter);
// 2010 - 2022 yillarda chiqgan mashinalarga status : "Yangi" degan malumot qoshing ?

// const model = (data) => {
//   let res = data.map((value) =>
//     value.year < 2022 && value.year > 2010
//       ? { ...value, status: "Yangi" }
//       : value
//   );

//   cars = res;
// };
// model(cars);

// const model1 = (data) => {
//   let res = data.map((value)=>value.year <= 2000
//   ? {...value, status: `Eski`}
//   : value
//   );
//   cars = res
// }
// model1(cars);

// const model2 = (data) => {
//   let res = data.map((value)=> value.year > 2000 && value.year <= 2010
//   ? {...value, status: `Norm`}
//   : value
//   )
//   cars = res
// }
// model2(cars)
// console.log(cars);
// ========================================
// let a = [1, 2, 3, 4, 5]
// console.log(a.find((value)=> value == 5));
// console.log(a.findIndex((value)=> value == 4));
// console.log(a.copyWithin(0, 2, 4));
// console.log(a.fill('*', 2, 4));
// ============================================
// let b = [1, 2, [3, [4], 5], 6, 7]
// console.log(b.flat());
// console.log(b.flat(Infinity));
// console.log(b.flat(3));
// let res = b.every((value)=> value ==1)
// let res1 = b.some((value)=> value ==1)
// console.log(res);
// console.log(res1);
// ============================
// let res3 = a.map((value)=>value + 2)
// console.log(res3);
// let next = a.forEach((value)=>value)
// console.log(next);
// ===============================
// console.log(Array.from('web', (v)=>v.toUpperCase()));
// ================================
// let sum = 0
// let res2 = a.map((value)=>sum += value)
// console.log(sum);

// let and = a.reduce((value, curent)=>value + curent,0)
// console.log(and);
// let data = new Date();

// console.log(data.getTime());
// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getMonth());
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getMilliseconds());

// HOMEWORK
// const ten = (a) => b = a.filter((value)=> value>9 && value<100)
// console.log(ten([2, 1, 3, 10, 60, 50, 30, 20, 101]));
// =================================================================
// let a = {
//   b: "c",
//   d: true,
//   e: 17,
//   f: false,
//   g: true,
// };
// let h = "";
// for (i in a) {
//   if (a[i] === true || a[i] === false) {
//     h += `${i}: ${a[i]} `;
//   }
// }

// console.log(h);
// ===========================================================

// console.log(Object.values(a)===true || false);
// function quantity(str) {
//   let res = {};
//   for (i of str) {
//     if (res[i]) {
//       res[i] = res[i] + 1;
//     } else {
//       res[i] = 1;
//     }
//   }
//   console.log(res);
// }

// quantity(`webbrain`);
// ========================================================
// let a = 'AbdulaAkhaD';
// let count = 0;
// let count2 = 0;
// let b = ""
// let c= ''
// for(i of a) {
//     if (i === i.toUpperCase()) {
//         count++
//        b = `Katta harf - ${count}`
//     } else {
//         count2++
//        c= `Kichkina harf - ${count2}`
//     }

// }

// console.log(`${b}
// ${c}`);
// =================================================
// let obj = {title: 'BRO', age: 6}

// console.log(Object.keys(obj));
// let a = "WebBr@in Ac@demy";
// let b = "";
// for (i of a) {
//   if (i !== "@") {
//     b += i;
//   } else {
//     b += "a";
//   }
// }

// console.log(b);
// let a = "webbrraaiin";

// function duble(a) {
//   let res2 = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== a[i + 1]) {
//       res2 += a[i];
//     }
//   }
//   console.log(res2);
// }
// duble(a);
// for (i of a) {
//   if (b[i]) {
//     b += "";
//   } else {
//     b += b[i];
//   }
// }
// console.log(b);
// console.log(a);
// // let a = 'web'
// // let b = 'bew'
// console.log(res2);

// function restrict (a) {
//     let combain = []
//     for(let i = 0; i<a.length;i++){
//         if(a[i] !== a[i+1]){
//             combain=[...combain, a[i]]
//         }
//     }
//     console.log(combain);
// }

// restrict([1, 1, 1, 2, 3, 6, 6, 10])
// ==========================================
// let a = 'we66ra55inacad4my'
// let b = ''
// for(i of a) {
//     if (isFinite(i)) b+=i
// }
// console.log(b);
//====================================
// function test(A, S) {
//     let count = 0;
//     let n = 0;
//     while (n < A.length) {
//       for(let i=n;i<=A.length;i++){
//           let fragment=A.slice(n,i)
//           if(fragment.length){
//               eval((`${fragment.join("+")})/${fragment.length}`))===S?count++:null;
//           }
//       }
//       n++;
//     }
//     return count;
//   }
//   console.log(test([0, 4, 3, -1], 2));


// let str = "10001000000010001";
// function nnool(a) {
//   let b = [];
//   let s = 0;
//   let kk = [];
//   for (i = 0; i < a.length; i++) {
//     a[i] == "1" ? b.push(i) : s
//     a[i] == "1" ? s += 1 : s
//   }
//   function fnuls(b) {
//     let o = b.splice(0, 1);
//     let p = b.splice(0, 1);
//     let gg = p - o - 1;
//     b.unshift(p[0]);
//     return gg;
//   }
//   for (q = 0; q < s; q++) {
//     let nn = fnuls(b);
//     kk.push(nn);
//   }
//   return Math.max(...kk);
// }
// console.log(nnool(str));

// let str = "web"
// let str1 = "bew"
// function get(str, str1) {
//     let res = str.split("")
//     let res1 = str1.split("")
//     res.sort((a, b) => { return a.localeCompare(b) })
//     res1.sort((a, b) => { return a.localeCompare(b) })
//     res = res.toString()
//     res = res1.toString()
//     console.log(res == res1);
// }
// get(str, str1)
// ==========================================================================
// let res = cars.filter((value)=>value.id % 2 === 1)
// let res = cars.sort((a,b)=>a.brand.localeCompare(b.brand)) 
// let res = cars.find((value)=>value.id===1)
// let resFilter = cars.filter((value)=>value.id===1)
// console.log('===========');
// console.log(resFilter);
// let res = a.findIndex((value)=>value===3)
// console.log(a.flat(Infinity));
// let res = a.some((value)=>value % 2 === 0) 
// let res = a.every((value)=>value % 2 === 0)
// let res = a.forEach((value)=>console.log(value))
// let res = a.map((value)=>console.log(value))
// let a = [1, 2, 3, [4], 5, 6, 7]
// let res = a.flatMap((value)=>value + 1)
// let a = [1, 2, 3, 4, 5, 6, 7]
// let res = a.reduce((sum, current)=>{console.log(sum, current) 
// return current}, 0)
// console.log(res);
// let a =  [1, 2, 3, 3, 4, 5, 6, 7]
// let b = 'web'
// console.log(a.splice(0, 3));
// console.log(a.slice(0, -1));
// console.log(b.slice(0, -1));
// console.log(a.substr(1, 3));
// Array.from('web1gg57', (value)=>{if (isNaN(value)===false) {
    //     return console.log(value);
    // }})
    
    // let ar =[1,2,3,4,5,6,9, 10]
    // let res = ar.reduce((sum, current)=>{
        //     return sum + current
        // })
        // console.log(res);
// let cars = [
//     {id:1, year:1998, engine:1, brand:`Spark`},
//     {id:2, year:2005, engine:1.2, brand:`Traverse`},
//     {id:3, year:2010, engine:1.6, brand:`Tahoe`},
//     {id:4, year:2010, engine:1.5, brand:`Cobalt`},
//     {id:5, year:2012, engine:2, brand:`Malibu`},
//     {id:6, year:2000, engine:1.2, brand:`Sonata`},
//     {id:7, year:2018, engine:2.4, brand:`Tracker`}
// ]
// const check =  (n, info)=>{    
//     let res = cars.map((value)=>{
//         return value.id === n ? {...value, ...info} : value
//     })
//     console.log(res);
// }
// check(4, {brand : 'Chevrolet'})
// check(5, {engine : 3})
// check(6, {year : 2005, engine : 5, brand : 'Spark'})
// let count = 0
// let count1 = 0
// Array.from('AbAnmadsafjwpfASSKLKJSHIGUDevnm', (value)=>{
//     if(value === value.toUpperCase()){
//         count++
//     } else {
//         count1++
//     }
// })
// console.log(`${count} - Uppercase`)
// console.log(`${count1} - Lowercase`)        
// ==========================================================================
// let b = ''
// Array.from('web@c@demy', (value)=>{
//     if (value === '@') {
//         value = 'a'
//     }
//     b += value
// })
// console.log(b);
// Array.from('webAca24895743demy', (value)=>{if (isNaN(value)===false) {console.log(value);}})
// ===========================================================================================
// let a  = 'weeddddnhin'
// let c = []
// let d = []
// for(i of a.split('')){
//     if (c.includes(i)===true) {
//         d.push(i)
//     } else {
//         c.push(i)       
//     }
// }
// console.log(c.join(''));
// ==============================================================================================
// let a  ='webb'
// let c = ''
// for(i of a){
//     i += i
//     c += i    
// }
// console.log(c);
// ==============================================================================================
// let a = 'kiyik'
// let b = `${a} is a mentioned word`
// for (let i = 0; i < a.length; i++) {    
//     for (let j = a.length; j > -1; j--) {   
//         if(a[i]===a[j]){
//             a = b;
//         }
//     }
// }
// console.log(b);
// =================================================================================================
// let a = 'web'
// let c = 'bwe'
// let b = a.split('')
// let res = b.sort((a, b)=>a.localeCompare(b))
// let res1 = b.sort((a, b)=>a.localeCompare(b))
// let g = res.join('')
// let n = res1.join('')
// console.log(g === n);
// ========================================================================================
// let a = 'becomeFighterOfYourDream'
// let b = {}
// for(i of a.toLowerCase()){
//     if(b[i]){
//         b[i]++
//     } else {
//         b[i] = 1
//     }
// }
// console.log(b);
// =========================================================================================
// let obj = {name : 'John', title : 'student'}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// ========================================================================================
// let a = [1, 2, 2, 3, 4, 4, 4, 4, 4]
// let b = []
// let res = a.map((value)=>{
//     if (b.includes(value)) {
//         value = ''
//     } else {
//         b.push(value)
//     }
// })
// console.log(b);
// ======================================================================================
// let obj = {
//     title : 'student',
//     age : 2,
//     child : {
//         age : 4,
//         name : 'webBrain',
//         child : {
//             age : 4
//         }
//     }
// }
// let b = 0
// while (obj) {
//     b += obj.age
//     obj.age = obj.child.age
// }
// console.log(b);
// ========================================================================================
// let obj = {
//     age : 17,
//     title : 'student',
//     university : true,
//     boolean : false
// }
// let b = Object.values(obj)
// let res = b.filter((value)=> (value === true) || (value === false) )
// console.log(res);
// ===========================================================================================
// let a = [12, 1, 98147, 34]
// let res = a.filter((value)=>value > 9 && value < 100)
// console.log(res);
// ========================================================================================
// let a = [1, 2, 3]
// let b = [1, 2, 3]
// let c = a.join('')
// let d = b.join('')
// console.log(c, d);
// console.log(c === d);
// console.log(c == d);
// =====================================================================================
// let a = [2, 3, 4, 2]
// let f = null
// while (a.length > 1) {
//     let res = a.sort((a, b)=>a - b)
//     let s = res.splice(0, 2)
//     let  minus = s[1]-s[0]
//     let p = res.push(minus)    
//     f = res    
// }
// console.log(f);
// ========================================================================================
// let b = 'webBrain'
// let a = ''
// let c = b.toLowerCase()
// let d = 1
// for(i=0; i<c.length;i++){
//     if (c[i] === c[i+1]) {
//         d++
//     } else {
//         a += c[i]
//         if (d>1) {
//             a += d
//             d = 1
//         }
//     }
// }
// console.log(a);
// ================================================================================================
