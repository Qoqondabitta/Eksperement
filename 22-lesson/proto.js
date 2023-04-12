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