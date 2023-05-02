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
let a = 'antonyJoshua'
let obj = {}
// let count = 0
for(i in a){
    if(obj[i]){
        obj[i]=obj[i]+1
    } else {
        obj[i] = 1
    }
}
console.log(obj);