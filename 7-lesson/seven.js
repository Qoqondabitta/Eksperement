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
//     for(i of b[0]){
//         obj.countryCode += i
//     }
//     for(j of b[1]){
//         obj.companyCode += j
//     }
//     for(l of b[2]){
//         obj.cityCode += l
//     }
//     for(f of b[3]){
//         obj.telephoneCode += f
//     }
//     console.log(obj);
// }
// number('+998 90 111 6554')
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
// let a = 'webAcademy'`

// console.log(a.search());