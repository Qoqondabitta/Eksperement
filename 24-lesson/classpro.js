// =======================static variable=========================
// class Students {
//     age = 0
//     static year = 0;    
//     getYear (){
//         console.log(++Students.year);
//     }
//     getAge(){
//         console.log(++this.age);
//     }
// }

// let st1 = new Students();
// let st2 = new Students();

// st1.getAge()
// st1.getAge()
// st1.getAge()
// st2.getAge()
// console.log('================================');
// st1.getYear()
// st1.getYear()
// st1.getYear()
// st2.getYear()
// ===========================static method============================
// class a {
//     static age = 0;
//     static getAge(){
//         console.log(++this.age); // ++a.age
//     } 
// }
// a.getAge()
// a.getAge()
// a.getAge()
// a.getAge()
// ==================================================================
// ====================private and public variables=================
// ==================================================================
// ====================private ones==============================
// class Protected {
//     _name = "web"
// }

// let a = new Protected()
// console.log(a._name); // node js : web
// =======================private ones=======================
// class a {
//     // _b = 'c'
//     #d = 'e'
//     getName() {
//         console.log(this.#d);
//     }
// }
// let f = new a();
// console.log(f); // a{}
// f.getName() // e
// console.log(a.#d); // error
// =======converting private to public with getter and setter=======
// class a {
//     #b = 'c'
//     get getName (){
//         console.log(this.#b);
//     }
//     set getName(value) {
//         this.#b = value
//     }
// }
// let d = new a()
// d.getName
// d.getName='b'
// d.getName
// =========================Built in classes=========================
// class a extends String{}
// let b =new a()

// console.log(b.length);
// ========================instance of===============================
// console.log(b instanceof Object);
// console.log(b instanceof String);
// console.log(b instanceof Array);
// console.log('==========================');
// console.log('==========================');
// ============================BigInt========================
// let c = 40982305783459083n
// console.log(c instanceof BigInt);
// console.log(c instanceof Object);
// =============================null==============================
// let c = null;
// console.log(c instanceof null); // error
// let c;
// console.log(c instanceof undefined);//error right side is not an object
//==========================Boolean=======================
// let c = true 
// console.log(c instanceof Object);
// console.log(c instanceof Boolean);
// ===============================String==========================
// let f = 'web'
// console.log(f instanceof String);
// console.log(f instanceof Object);
// =====================================Array==================
// let c = []
// console.log(c instanceof Array); //true
// console.log(c instanceof Object); //true
// ===========================Number======================
// let e = 123
// console.log(e instanceof Number);
// =========================================================
// ===========================Function=========================
// let d = ()=>{}
// console.log(d instanceof Function);
// console.log(d instanceof Object);
// ====================================================
// ==========================Mixins==============================
// class a {
//     getName (){
//         console.log('no name');
//     }
//     _name = 'web'
// }
// let b = {
//     getInfo(){
//         console.log('no info');
//     },
//     name : 'web'
// }
// Object.assign(a.prototype, b)
// let c = new a()
// // c.getInfo()
// console.log(c);
// =============================Homework=============================
// =================task 1========================
// class Animals {
//     constructor (name){
//         this.name = name
//     }
// }
// class Rabbit extends Animals {
//     constructor(name){
//         // this.name = name
//         super(name)
//         // this.created = Date.now()
//         // super.name = this.name
//         }
// }
// let rabbit = new Rabbit('White Rabbit')
// console.log(rabbit.name);
// ============================================================
// class a {
//     constructor(value){
//         console.log(value);
//     }
// }
// let b = new a('Is it right!');
// class a {
//     name = "I" // we are putting I into this
//     constructor(value){
//         console.log(this.name);
//     }
// }
// let b = new a();
// console.log(b);
// =================================================================
// class a {
//     constructor (value){
//         console.log(value);
//     }
//     // name = 'web'
//     age = 0
//     getAge (){
//         // console.log(++this.age);
//     }
// }
// let b = new a('Is it right?') // 1-object
// // let c = new a() // 2-object
// // b.getAge()
// // b.getAge()
// // b.getAge()
// // c.getAge()
// // console.log(b);
// class a {    
//     constructor (value){
//         this.value = value
//     }
// }
// let b = new a('Is it right?') // 1-object
// console.log(b.value);
// let c = new a() // 2-object
// ===========================================================
// class a {    
//     ['we' + 'brain'](value){
//         console.log(value);
//     }
// }
// let b = new a()
// b.webrain('hey')
// =======================================================
// class a {    
//     speed(speed){
//         console.log(`Lion runs ${speed}km per hour`);
//     }
// }
// class b extends a {
//     getInfo(){
//         console.log('Lion');
//     }
// }
// let c = new b('Lion')
// c.speed(50)
// ===========================================================
// class a {
//     constructor(name){
//         this.name = name
//         console.log(name);
//     }
// }
// class b extends a {
//     constructor(name){
//         super(name)
//     }
// }
// let c = new b('Hi')
// c.name
// =====================================================
// class a {
//     name = 'me'
//     set getInfo(value){
//         console.log(value);
//     }
//     get getInfo(){
//         console.log(`${this.name}`);
//     }
// }
// let b = new a();
// b.getInfo = 'myself'
// b.getInfo
// ================================================================
// class a{
//     getParent(){
//         console.log('You are right, finally!');
//     }
// }
// class b extends a{
//     getInfo(){
//         console.log('You are in the child section!');  
//         // super.getParent()      
//     }
//     getBoth(){
//         this.getInfo()
//         super.getParent()
//     }
// }
// let c = new b()
// // c.getParent()
// c.getBoth()
// ==============================================================
// class a {
//     #name = 'myself'
//     get getInfo(){
//         console.log(`${this.#name}`);
//     }
//     set getInfo(value){
//         this.#name = value
//         console.log(value);
//     }
// }
// let b = new a()
// b.getInfo
// // console.log(b.value);
// =====================================================
// class a{
//     static age = 0
//     static getAge(){
//         console.log(++this.age);
//     }
// }
// let b = new a()
// // let c = new a()
// a.getAge()
// a.getAge()
// a.getAge()
// a.getAge()
// c.getAge()
// =============================================================
// class a extends Array{}

// let b = new a()
// console.log(b instanceof Array);
// console.log(b instanceof Object);
// class a extends Number{}
// let d = [];

// let b = new a()
// console.log(d instanceof Array);
// console.log(b instanceof Object);
// =========================================================
// class a {
//     _name = 'web'
// }
// let v = {
//     name : 'we',
//     getInfo(){
//         console.log('me');
//     }
// }
// // let c = new a()
// Object.assign(a.prototype, v)
// // console.log(v._name);
// let c = new a()
// // console.log(c);
// console.log(c._name);































































