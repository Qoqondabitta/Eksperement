// new Map Theme
// let b = new Map();
// 
// a.name = 'me'
// b.name = 'he'

// b.set('name', 'myself')
// console.log(a);
// console.log(a,b.name);
// console.log(b,a.name);
// console.log(b.size);
// console.log(b.get('name'));
// b.set(123, 'she')
// b.set(true, 'she')
// console.log(b.has(123));
// console.log(b.has(1234));
// console.log(b.get(123));
// console.log(b);
// console.log(b.delete(123));
// console.log(b);
// b.clear();
// console.log(b);


// console.log(Object.entries(a));
// console.log(Object.values(a));
// console.log(Object.keys(a));
// let b = new Map([['age', 17], ['name', 'me']]);
// console.log(b);
// console.log(b.values());
// console.log(b.keys());
// console.log(b.entries());
// for(i of b) {
//     console.log(i);
// }for(i of b.keys()) {
//     console.log(i);
// }for(i of b.values()) {
//     console.log(i);
// }for(i of b.entries()) {
//     console.log(i);
// }
// console.log(a.keys);
// let c = b.entries();
// c.next()
// c.next()
// console.log(c.next());
// b.set('age', 18)
// console.log(Object.fromEntries(b).age);
// console.log(b.age);
// console.log(Object.fromEntries(b));
// b.forEach((b)=>{console.log(b);})
// new Set Theme
// let a = {age:17}
// let b = new Set();
// b.add(a)
// b.add(a)
// b.add('d')
// console.log(b);
// console.log(b.has(a));
// Distructure
// let age = 16
// let a = {age:17, name:'me', child:{title:'student'}}

// let {age:newName, name, child:{title}} = a;

// // console.log(a.age);
// // console.log(newName, title);

// const c = ([title]) =>  console.log(title);

// c('he')
// distructure array
// let a = [1, 2, 3, 4, 5]

// let [ikki,,uch] = a

// console.log(ikki);
// =====================newDate======================
// let a = new Date();

// console.log(a.getHours());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getDay());
// console.log(a.getMonth());
// console.log(a.getDate());
// console.log(a.getFullYear());
// console.log(a.getTime()) // `1970 yildan bowlkab hisoblaganda milisekundlarni chqariberadi
// =============JSON=====================
// let b = {age:17, name:'me'}

// console.log(JSON.stringify(b, Object.keys(b).filter((vl) => vl !='name'),4));

// let a = `{"age":17,"name":"me"}`
// console.log(JSON.parse(a));
// ====================================
// let a = 11
// for (i=1;i<100;i++) {
//     // console.log(i);
//     if ( i == 2 || i == 3 || i == 5)console.log(`${i}- tub son`);
//     else if ((i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 11 !== 0)) console.log(`${i}- tub son`);                
//     else console.log(`${i}- karali son`);
    
// // console.log(i);
// }
// for (i=1;i<100;i++) {
//     if ( (i == 2 || i == 3 || i == 5))console.log(`${i}- tub son`);
//     else if ((i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 11 !== 0)) console.log(`${i}- tub son`);                
//     else console.log(`${i}- karali son`);
// }
// let n = -5.678

// console.log(Number(n));
// console.log(Math.floor(n));
// console.log(Math.trunc(n));
// console.log(Math.round(n));
// console.log(Math.sign(n));
// console.log(parseInt(n));
// let title = 'name';
// let obj = {
//     name:'webbrain',
//     title:'IT Center',
//     [title]:'Webbrain Academy',
//     title,
// }

// console.log(obj[title]);
// console.log(obj.title);
// console.log(obj.name);
// console.log(null??'webbrain');
// ============================================
// let a = {
//     name : 'Abdulakhad',
//     age : 17, 
//     gender : 'male',
//     title : 'student',
//     status : 'single'
// }

// let b = {
//     name : 'Unknown',
//     age : 'Unknown',
//     gender : 'Unknown',
//     title : 'Person',
//     status : 'Unknown'
// }

// function getInfo(a, b, c) {
//     console.log(`${this.name} is ${this.age} and ${this.gender}. He is ${this.title} and ${this.status}`);
//     console.log(a, b, c);
// }

// getInfo.call(a, 'IELTS 7.5', 'SAT 1370', '41 universities')
// getInfo.apply(b, ['IELTS 7.5', 'SAT 1370', '41 universities'])
// getInfo.bind(a, 'IELTS 7.5', 'SAT 1370', '41 universities')()
// setTimeout((a, b)=>{console.log(a, b); console.log(1);}, 9000, 'hey', 'you')
// const trial = ({trait, id, place}) => {
//     console.log(trait, id, place);
// }

// trial({trait : 'I have entered', id : 41, place : 'universities'})
// const array = ([one, two, three]) => {
//     console.log(one, two, three);
// }
// array(['I have entered', 41, 'universities'])
// let a = {
//     honor : 'I have entered',
//     number : 41,
//     place : 'univeersities' 
// }

// Object.entries(a).map(([key, value]) => {
//     console.log(value);
// })
// let a = {
//     Frontend : [
//         {name : 'React', salary : 1000},
//         {name : 'Vue', salary : 1000}
//     ],
//     Mobile : {
//         ios : [
//             {name : 'Jack', salary : 1500},
//             {name : 'Rose', salary : 1500}
//         ],
//         Android : [
//             {name : 'Tom', salary : 2000},
//             {name : 'Anna', salary : 2000}
//         ]
//     } 
// }

// let salary = 0;
// const getSalary = (data) => {
//     Object.values(data).forEach((values)=>{
//         if (Array.isArray(values)) {
//             let res = values.reduce((prev, cur)=>prev + cur.salary, 0);
//             salary += res
//         } else {
//             getSalary(values)
//         }
//     })
// }

// getSalary(a);
// console.log(salary);
// let a = [1, 2, 3, 9, 4, 6, 5, 5, 7]
// let d = 0
// let b = a.sort((a,b)=>b - a)
// // console.log(b.splice(0,2))
// // console.log(b);
// let c = b.splice(0,2)
// console.log(c);
// console.log(c);
// console.log(c);
// let c = b[0] - b[1]
// console.log(c);
// c 

// console.log(b);
// function lastNumber(arr) {
//     while (arr.length > 1) {
//         let array = arr.sort((a, b) => a - b);
//         let res = array[array.length - 1] - array[array.length - 2];
//         array.splice(array.length - 2, 2);
//         res ? array.push(res) : null;
//     }
//     return arr;
// }
// console.log(lastNumber([12, 43, 12, 13, 42]));
// let a = 3.00546

// console.log(a.toPrecision(4));
// console.log(a.toFixed(3));
// function binary(word) {

//     let a ='weebrainn'
//     let res = "";
//     let count = 1;
//     for ( i = 0; i < a.length; i++) {
//         if (a[i] === a[i+1]) {
//             count++
//         } else {
//             res += a[i]
//             if (count > 1) {
//                 res += count
//                 count = 1
//             }
//             console.log(res);
//         }
//         // console.log(a[i]+1);
//         // if (i == )
//     }
// }
// let ac =  {
//     name : 'me',
//     age : 17,
//     title : 'student'
// }

// console.log(Object.getOwnPropertyDescriptor(ac, 'name'));
// console.log(Object.defineProperty(ac));
// console.log(Object.getOwnPropertyDescriptor(ac));
// ========================NFE==============================
// const first = function second (value) {
//     // second.title = 'web'
//     console.log(`Hi ${value}`);
//     return second
// }

// first('Abdulakhad')
// ==============Faktorial solving==============
// let b = '';
// const math = (a) => {    
//     if (a === 1) return b += 1
//     else {
//         b += a.toString();              
//         return math(a - 1)
//     }    
// }

// math(3)
// console.log(eval(b.split('').join('*')));
// ============================================================
let list = [
    {id : 1, name : 'Toshmat', title : 'CEO'},
    {id : 1, name : 'Eshmat', title : 'CTO'},
    {id : 1, name : 'Toshmat', title : 'CEO'},
    {id : 1, name : 'Eshmat', title : 'CTO'}
]

let big = {ceo:[], cto:[]}

list.map((value)=>{
    if (value.title === 'CEO') {
    let {ceo} = big
    let a = list.filter((value)=>{value.title==='CEO'})
    let b = [...ceo]
    // let b = [...ceo, value]
    console.log(b);
    }
 else { 
    list.filter((value)=>value.title==='CTO')
}
})

// let big = {ceo:[], cto:[]}

// let b = list.sort((a, b) => a.title.localeCompare(b.title)).map((value)=>{
//     if (value.title === 'CEO') {
//         // [...res.ceo, list.value]
//         let c = [...big.ceo, value]
//         // console.log(c);
                 
//     }  
//     if (value.title === 'CTO') {        
//         let d = [...big.cto, value]
//         // console.log(d);
//     }
// })

// console.log(big);


// function password(a) {
//   let obj = {number:0, letter:0, char:0}
//   for (i of a) {
//     if (isFinite(i)) {
//       obj.number++
//     } else if (i.toLowerCase() !== i.toUpperCase()) {
//       obj.letter++
//     } else {
//       obj.char++
//     }
//   }
//   console.log(obj);
// }

// password('Adn_6554@#$%Abdulakhad')
