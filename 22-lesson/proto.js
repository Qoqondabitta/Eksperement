// =================prototype with object===================
// let a = {a : 'b', c : 'd'}
// let b = {e : 'f'}

// a.__proto__=b

// console.log(a.e);
// let student  = {name : 'Abdulahad', surname : 'Turgunaliev'}
// let student1  = {name : 'Sarvar', surname : 'Turgunaliev'}
// let student2  = {name : 'Samandar', surname : 'Turgunaliev'}
// let student3  = {name : 'Ahmadali', surname : 'Turgunaliev'}
// let student4  = {name : 'John', surname : 'Smith'}

// console.log(Object.values(student2))
// Object.prototype.fullName = function () {
//     console.log(this.name, this.surname);
//     return this
// }

// student2.fullName(student2)
// =====================================================
// Object.prototype.fullName = function () {
//     console.log(this);
//     return this
// }

// student2.fullName(student2)
// ================prototype with  an array=====================
// let a = [1, 2, 3, 4, 5, 5, 6]

// Array.prototype.remove = function (element) {
//     let res = a.filter((value)=>value !== element)
//     console.log(res);
// }

// a.remove(5)
// =========================reviewing proto by myself============
// let a = {age:17}
// let b = {name:'me'}

// a.__proto__=b
// console.log(a);
// console.log(a.name) // the data in b object are set in a object's
                    // proto but we cannot see it when we call a object
                    // as data of b is in proto not in a object,
                    // that is to say, behind a scene
// ====================prototype================================
// let a = {name:'John', last:'Smith'}
// let b = {name:'Harry', last:'Kane'}
// let c = {name: 'Leo', last:'Li'}

// Object.prototype.getFullName = function(){
//     console.log(this.name, this.last);
//     return this;
// }

// b.getFullName()
// =================prototype with string========================
// let a = 'John';
// let b = 'Smith';
// let c = 'Kane'

// String.prototype.getFirstLetter = function (value){
//     console.log(value.slice(0, 1));
// }
// a.__proto__.getSecondLetter = function (value) {
//     console.log(value.slice(0, 1));
// }

// // c.getFirstLetter(c)
// b.getSecondLetter(b)
// ===================================================
// let a = {name:'John', last:'Smith'}
// let b = {name:'Harry', last:'Kane'}
// let c = {name: 'Leo', last:'Li'}

// Object.prototype.remove = function (value){
//     // console.log(value);
//     delete this.value
//     // console.log(this);
// }

// a.remove('last')
// console.log(a.last);
