  let cars = [
    {id:1, year:1998, engine:1, brand:`Tico`},
    {id:2, year:2005, engine:1.2, brand:`Matiz`},
    {id:3, year:2010, engine:1.6, brand:`Gentra`},
    {id:4, year:2010, engine:1.5, brand:`Cobalt`},
    {id:5, year:2012, engine:2, brand:`Malibu`},
    {id:6, year:2000, engine:1.2, brand:`Damas`},
    {id:7, year:2018, engine:2.4, brand:`Tracker`}
]

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
let a = [1, 2, 3, 4, 5]
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
let data = new Date();

console.log(data.getTime());
console.log(data.getDate());
console.log(data.getDay());
console.log(data.getMonth());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
