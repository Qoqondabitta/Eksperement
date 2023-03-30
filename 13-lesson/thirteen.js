// const dddd = (weekdays) => {
// let date=  new Date();
// console.log(weekdays[date.getDay()]);
// }
// dddd(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
// ========================================
// const fullDate = (months,sign,tick,letter) => {
//     let date = new Date();
//     console.log(`${months[date.getMonth()]}${sign}${date.getDate()}th${sign}${date.getFullYear()},${sign}${date.getHours()}${tick}${date.getMinutes()}${tick}${date.getSeconds()}${sign}${letter}`);
// }
// fullDate(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ' ', ':', 'pm')
// ===============================================
// const short = (months,sign) => {
//     let date = new Date();
//     console.log(`${months[date.getMonth()].slice(0,3)}${sign}${date.getDate()}th${sign}${date.getFullYear()}`); 
// }
// short(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ' ')
// ============================================================
// const hoursMinuts = (sign) => {
//     let date = new Date();
//     console.log(`${date.getHours()}${sign}${date.getMinutes()} PM`);
// }

// hoursMinuts(':')
// ====================================================
let a = {name:'me', age:17, gender:'male', info:{test:'IELTS'}}


let {name, age, gender, info:{test}} = a

console.log(name, age, gender);