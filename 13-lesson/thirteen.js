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
//     console.log(
//         `${months[date.getMonth()].slice(0,3)}${sign}${date.getDate()}th${sign}${date.getFullYear()}`);
// }
// short(['January', 
// 'February', 
// 'March', 
// 'April', 
// 'May', 
// 'June', 
// 'July', 
// 'August', 
// 'September', 
// 'October', 
// 'November', 
// 'December'], ' ')
// ============================================================
// const hoursMinuts = (sign) => {
//     let date = new Date();
//     console.log(`${date.getHours()}${sign}${date.getMinutes()} PM`);
// }

// hoursMinuts(':')
// ====================================================
// let a = {name:'me', age:17, gender:'male', info:{test:'IELTS'}}

// let {name, age, gender, info:{test}} = a

// console.log(name, age, gender);
// =====================================================
// const moment = () => {
//     const format = () => {
//         let LT = [function justTime  (sign=':') {
//             let date = new Date();
//             return console.log(`${date.getHours()}${sign}${date.getSeconds()} 'PM`);
//         } ]
//     }
// }

// moment('LT')
// ====================================================
// function just() {
//    test.name = "web";
// }

// just();
// console.log(just);
// ============================================================
// let a = 5.0035;

// console.log(a.join());
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// =========================================
const moment = () => {
    moment.locale = (title) => {
        let time = new Date();
        let hours = time.getHours() % 12;
        let minuts = time.getMinutes();
        let seconds = time.getSeconds();
        let weekday = time.getDay();
        let date = time.getDate();
        let month = time.getMonth()+1;
        let year = time.getFullYear();
        let sign;
        let nameMonth = [
            'December',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November'
        ];
        let weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Thurswday',
            'Wednesday',
            'Friday',
            'Saturday'
        ]; 
        
        time.getHours() < 12 ? sign = 'AM' : sign = 'PM'
    
        if (title === 'LT') return `${hours}:${minuts} ${sign}`;
        else if (title === 'LTS') return `${hours}:${minuts}:${seconds} ${sign}`
        else if (title === 'L') return `${month < 10 ? '0' + month : month}/${date < 10 ? '0' + date : date}/${year}`
        else if (title==='l') return `${month}/${date}/${year}`
        else if (title==='LL') return `${nameMonth[month]} ${date}, ${year}`
        else if (title==='ll') return `${nameMonth[month].slice(0,3)} ${date}, ${year}`
        else if (title==='LLL') return `${nameMonth[month]} ${date}, ${year} ${hours}:${minuts} ${sign}`
        else if (title==='lll') return `${nameMonth[month].slice(0,3)} ${date}, ${year} ${hours}:${minuts} ${sign}`
        else if (title==='LLLL') return `${weekdays[weekday]}, ${nameMonth[month]} ${date}, ${year} ${hours}:${minuts} ${sign}`
        else if (title==='llll') return `${weekdays[weekday].slice(0,3)}, ${nameMonth[month]} ${date}, ${year} ${hours}:${minuts} ${sign}`
    }
}
moment()
console.log(moment.locale('l'))
// =============================================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// console.log(getTime('llll')); 
// let a = [1,2,3,4]

// let b = a.reduce((a,b)=> a += b,0)

// console.log(b);
// ==========================================
// let a = {
    // age:17
// }

// let b = new Map();

// a.name = 'me'
// b.name = 'he'

// b.set('name', 'myself')
// console.log(b);
// console.log(a);
// console.log(a,b.name);
// console.log(b,a.name);
// console.log(b.size);
// console.log(b.get('name'));
