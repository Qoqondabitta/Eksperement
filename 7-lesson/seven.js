// let obj = {
//     name : `John`,
//     surname : `Smith`,
//     name : `Pete`
// }
// obj.age = 17,
// delete obj.name
// console.log(obj);
// console.log(Object.values(obj)); 
//=================================================
// function dec(a) {
//     return a;
// }

// console.log(dec('man'));
//====================================================
// let obj = {
//     name : 'John',
//     Age : 17
// }

// let user = obj

// // console.log(user);
// console.log(user==obj);
// console.log(user=== obj);
// let obj = {
//     name : 'John',
//     Age : 17
// }

// let user = structuredClone(obj);

// obj.name = 'man'

// console.log(user);
// console.log(obj);
// console.log(user==obj);
// console.log(user=== obj);
//=====================================================
// let obj = {
//     name : 'John',
//     Age : 17
// }

// let user = {
//     info : 'boy'
// }

// console.log(Object.assign(obj, user));
//=========================================================
// let obj = {
//     name : 'John',
//     Age : 17
// }

// let user = {
//     info : 'boy'
// }

// obj = {...obj, ...user}

// console.log(obj);
//==================================================
// let key = 'title';

// let obj = {
//     name : 'John',
//     'date of birth' : 17,
//     [key] : 'study' // title : 'study'
// }
// obj.name = 'John'
// obj.info = 'boy'
// console.log(obj[key]);
// console.log(obj['title']);
// console.log(obj.title);
//=====================================
// let obj = {
//     name : 'John',
//     'date of birth' : 17    
// }

// let user = obj;

// obj.name = 'John'
// obj.age = 18

// console.log(user);
// console.log(user == obj);
// console.log(user=== obj);
//===================================================
// let obj = {
//     name : 'John',
//     'date of birth' : 17    
// }

// let user = structuredClone(obj)

// obj.name = 'Man'

// console.log(user);
// console.log(obj);
// console.log(user==obj);
// console.log(user===obj);
//======================================================
// let a ={
//     me : 'he',
//     he : 'sun'
// }

// let b = {
//     she : 'it'
// }

// delete b
// b =null

// console.log(Object.assign(a, b));
//=======================================================
// let a ={
//     me : 'he',
//     he : 'sun'
// }
// let b = {
//     she : 'it'
// }


// obj = {...a, ...b}

// console.log(obj);
//================================================
// let adn = {
//     b : 200,
//     c : 300,
//     d : 100
// }
// let e = 0;
// for (i in adn) {
//     e += adn[i]
// }
// console.log(e);
// console.log(adn);
//===================================================
// let obj = {
//     a : 200,
//     b : 300,
//     c : 'hi'
// }

// let d = 0;
// for (i in obj) {
// if (typeof obj[i] == 'number') {
//     console.log(obj[i] * 2);
// } 
// if (typeof obj[i]=="string") {
//     delete obj[i]
// }
// }
//=========================================
// let obj = {
//     a : 3
// }

// let user = {
//     b : 5
// }

// console.log(Object.assign(obj, user));
// console.log(obj == user);
// console.log(obj === user);
// let obj = {
//         a : 3
//     }
    
//     let user = {
//         b : 5
//     }
//     let f = Object.assign(obj)
//     console.log(f);
//     console.log(obj == f);
//     console.log(obj === user);
//=================================================== 
//     console.log(obj ===);
// ======================================================================================================
// let a = 'Bro6554#$5'
// let obj = {letter:0, number:0, sign:0}
// for(i of a){
//     if(i.toLocaleLowerCase()!== i.toLocaleUpperCase()){
//         obj.letter++
//     } else if (isNaN(i)===false){
//         obj.number++
//     } else {
//         obj.sign++
//     }
// }
// console.log(obj);
// let password = 'John6554@#$%Smith'

// let obj = {letter : 0, number : 0, sign : 0}
// for(value of password){
//     if(value.toUpperCase()!==value.toLowerCase()){
//         obj.letter++
//     } else if(isNaN(value)===false){
//         obj.number++
//     } else {
//         obj.sign++
//     }
// }
// console.log(obj);
// ==============================================================================================
// let a = 'antonyJoshua'
// let obj = {}
// // let count = 0
// for(i in a){
//     if(obj[i]){
//         obj[i]=obj[i]+1
//     } else {
//         obj[i] = 1
//     }
// }
// console.log(obj);
// ==============================================================================================================================
// const telephoneNumber = (number)=>{    
//     if (number.slice(0, 4)==='+998'){
//         console.log(number);
//     } else {
//         console.log(number.padStart(17, '+998 '))
//     }
// }
// telephoneNumber('+998 90 111 65 54')
// =====================================================================================================================
// const currency = (number)=>{
//     let gain = ''
//     for(i of number){if(isNaN(i)===false)gain += i}
//     console.log(gain);
// }
// currency('$1200')
// ===================================================================================================================
// const number = (a)=>{
//     let b = a.split(' ')
//     let obj = {countryCode:'', companyCode:'', cityCode:'', telephoneCode:''}
//     for(i of b[0]){obj.countryCode += i}
//     for(j of b[1]){obj.companyCode += j}
//     for(l of b[2]){obj.cityCode += l}
//     for(f of b[3]){obj.telephoneCode += f}
//     console.log(obj);
// };number('+998 90 111 6554')

// ===================================================================================================================
// const divide = (b, number)=>{return console.log(b.slice(0, number))}; 
// divide('antonyJoshua', 12)
// ====================================================================================================================
// let a = 'web brain academy it center'
// let b = ''
// for(i in a){
//     if (a[i-1]===' ' || a[i-1]=== undefined) {
//         b += a[i].toUpperCase()
//     } else {
//         b += a[i]
//     }
// }
// console.log(b);
// ===================================================================================================================
// const check = (a, b)=>{
//     if (a.includes(b)===true) {
//         console.log('Yes');
//     } else {
//         console.log("No");
//     }
// }
// check('webAcademy', 'web')
// let a = 'webAcademy'

// console.log(a.search());
// ================================================================================================================
// let a = 'webAcademy'
// console.log(a.search(/aca/i)); 
// console.log(a.concat(' is good person, I think so.').length);
// console.log(a.length);
// console.log(a.padStart(4, ' a'));

// console.log(a.charAt[-1]);
// console.log(a.at(-1));
// =============================================================================================================
// let athlete = {
//     MMA : {
//         name : 'Kabib',
//         record : '29-0',
//         fullName : 'Kabib Nurmagomedov' 
//     },
//     soccer : {
//         name : 'Messi',
//         record : '7-6-4-2-1',
//         fullName : 'Lionel Messi'
//     }
// }
// console.log('started');
// ================================================async await function=======================================================
// let a = new Promise((resolve, reject)=>{
//     setTimeout(() => {
        
//         if(athlete.MMA.name === 'Kabib' && athlete.MMA.record === '29-0'){
//             return resolve(`${athlete.MMA.fullName} has one of the amazing careers in UFC history.`)
//         } else {
//             return reject('Sorry to inform this, but there is no such an athlete with data provided above')
//         }
//     }, 3000);
// })
// const check = async()=>{
//     res = await a
//     console.log(res);
//     console.log('finished');
// }
// check()
// ========================================Promise=============================================================
// let a = new Promise((resolve, reject)=>{
//     setTimeout(() => {
        
//         if(athlete.MMA.name === 'Kabib' && athlete.MMA.record === '29-0'){
//             return resolve(`${athlete.MMA.fullName} has one of the amazing careers in UFC history.`)
//         } else {
//             return reject('Sorry to inform this, but there is no such an athlete with data provided above')
//         }
//     }, 3000);
// })
// let all = Promise.all([
//     new Promise((resolve, reject)=>{
//     setTimeout(() => {
        
//         if(athlete.MMA.name === 'Kabib' && athlete.MMA.record === '29-0'){
//             return resolve(`${athlete.MMA.fullName} has one of the amazing careers in UFC history.`)
//         } else {
//             return reject('Sorry to inform this, but there is no such an athlete with data provided above')
//         }
//     }, 3000);
// }),
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
        
//         if(athlete.MMA.name === 'Kabib' && athlete.MMA.record === '29-0'){
//             return resolve(`${athlete.MMA.fullName} has one of the amazing careers in UFC history.`)
//         } else {
//             return reject('Sorry to inform this, but there is no such an athlete with data provided above')
//         }
//     }, 3000);
// })
// ])
// all.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
// a.then((res)=>console.log(res)).catch((error)=>{console.log(error)}).finally(()=>console.log('finished'))
// ====================================================callback========================================================================
// function check(lg, pw, callback){
//     setTimeout(() => {        
//         if(athlete.MMA.name === lg && athlete.MMA.record === pw){
//             return callback(`${athlete.MMA.fullName} has one of the amazing careers in UFC history.`)
//         } else {
//             return callback('Sorry to inform this, but there is no such an athlete with data provided above')
//         }
//     }, 2000);
// }
// check('Kabib', '29-0', (final)=>{
//     console.log(final);
//     console.log('finished');
// })
// console.log(last);
// console.log('finished');
// ========================================================================================================================
// let athlete = {
//     soccer : {
//         position : 'Forward',
//         number : '10',
//         fullName : 'Harry Kane'
//     },
//     MMA : {
//         position : 'Undefeated champion',
//         number : '29-0',
//         fullName : 'Jorge Smith'
//     }
// }
// function check(lg, pw){
//     setTimeout(() => {        
//         console.log(athlete.soccer.position);
//         if (athlete.soccer.position === lg && athlete.soccer.number === pw) {
//             return `${athlete.soccer.fullName} shu`
//         } else {
//             return `No there is no such a player with data above`
//         }
//     }, 1000);
// }
// let next = check('Forward', '10')
// // console.log(next);
// console.log(next);
// ==============================================================================================================================
// let a = {name : 'bob'}
// let b = {city : 'dad'}
// console.log(Object.assign(b, a));//
// console.log(a); // {name :" bob" }
// console.log(b); // {city:dad name : "bob"}
// ====================================================================
// console.log(Object.assign(b, b));//{city :"dad" city:"dad"}
// console.log(Object.assign(a, a));// {name : "name" name :"name"}
// console.log(b); //{city :"dad"}
// console.log(a); //{name : "name"}
// console.log(b); //{city :"dad"}
// ==============================================================
// let c = {...a, ...b}
// console.log(a); //{name : "bob"}
// console.log(b); // {city:dad}
// console.log(c); // {name : "bob" city:dad}
// =====================================================================
// let named = {
//     title : 'Student',
//     grade : '11',
//     fullName : 'Harry Kane',
//     getData(){
//         console.log(`${this.title} is ${this.grade}-th grade`);//
//     }
// }
// let city = named

// named = null;
// console.log(named.grade);//null 
// console.log(named.title);//null
// console.log(city.title);//student
// console.log(city.grade);// 11
// console.log(city.fullName);//'Harry Kane'
// console.log(city.getData());// student 11 
// console.log(named.getData()); // student is 11 - th grade
// console.log(city);//null
// console.log(named.fullName());//'Harry Kane'
// ===========================================================================================
// let a = 'aba'

// let b = ``
// for(i in a){




//     if (a[i].localCompare(a[i+1])===-1) {
//         let c = a.substring(a[i], 1)
//         b += c
//     } 
    
// }
// console.log(b);
// =======================================================================================
// let a = 'simultaneously'
// let gainer = '';
// let alphabet = `'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
// 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'`
// for (v of alphabet){

//     for(val in a){
//         if (v.localeCompare(a[val]) === 0) {
//             gainer += a[val]
//         }
//     }
// }
// console.log(gainer);
// ====================================================================================================
// let ac = 'academy'
// console.log(ac.valueOf('brain'));