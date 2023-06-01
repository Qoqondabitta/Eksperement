// class Animals {} // this is template for creating object
// let rb = new Animals() // these are objects
// let wf = new Animals()
// console.log(wf);
// =========================creating classes=====================
// class Users {
//     age = 0
//     aging(){
//         console.log(++this.age);
//     }
// }
// let a = new Users() // both of them a and b are not dependent on 
// let b = new Users() // either of them.
// a.aging()
// a.aging()
// a.aging()
// b.aging()
// ==================constructor for parameters====================
// class A {
//     constructor(name){
//         console.log(name);
//     }
// }
// let a = new A('John, you finally did it') // there is no reason to 
// call a object as constructors are run firstly by js automatically
// therefore the parameter that starts with John is demonstrated
// on node js by itself
// =============converting local parameter to global==============
// class A {
//     constructor(name){
//         this.name = name
//     }
//     welcome(){
//         console.log(`Hi ${this.name}, welcome to class.`);
//     }
// }
// let a = new A('my friend')
// a.welcome()
// ====================================================================
// ====================================================================
// ========above example, but with name of method instead of this=======
// class A {
//     title = 'Oh'
//     constructor(name){
//         this.name = name
//         console.log(this.title);
//     }
//     welcome(){
//         console.log(`${this.title} hi ${this.name}, welcome to class.`);
//     }
// }
// let a = new A('my friend')
// a.welcome()
// ====================================================================
// =========================getter and setter==========================
// ==============================set===================================
// class a {
//     constructor(b){
//         this.b = b
//     }
//     set c (value){
//         console.log(value);
//     }
// }
// let d = new a('John')
// d.c = 'Really, is it possible?' 
// ==============================get===================================
// class a {
//     constructor(b){
//         this.b = b
//     }
// //     set c (value){
// //         console.log(value);
// //     }
// get c(){
//     console.log(this); // this belongs a
//     console.log(`${this.b} is after me`);
// }
// }
// let d = new a('John')
// d.c
// =======================computed name============================
// class User {
//     ['aca'+'demy'] (title) {
//         console.log(title);
//     }
// }

// let usr1 = new User()
// usr1.academy('web-brain')
// ===========================Inheritance===============================
// class Players {
//     speed(speed) {
//         console.log(`Runs ${speed}km per hour`);
//     }
// }
// class Kane {
//     info (name) {
//         console.log('Harry Kane');
//     }
// }
// class James {
//     info (name) {
//         console.log('Ris James');
//     }
// }

// let speed = new Players()
// let harry = new Kane()
// let ris = new James()

// harry.info()
// speed.speed(27)
// console.log('===================');
// ris.info()
// speed.speed(31)
// ===============alternative for above example=======================
// class Players {
//     speed(speed) {
//         console.log(`Runs ${speed}km per hour`);
//     }
// }
// class Kane extends Players {
//     info (name) {
//         console.log('Harry Kane');
//     }
// }
// class James extends Players {
//     info (name) {
//         console.log('Ris James');
//     }
// }

// // let speed = new Players()
// let harry = new Kane()
// let ris = new James()

// harry.info()
// harry.speed(27)
// console.log('===================');
// ris.info()
// ris.speed(31)
// in prototype of classes like kane and james data of class players 
// are set, even though they are invisible, therefore we can use method 
// as speed in other classes without typing it in them.
// ======================super====================================
// class Animals {
//     parent (){
//         console.log('He is parent');
//     }
// }
// class Rabbit extends Animals {
//     child (){
//         console.log('He is child');
//     }
//     info (){
//         this.child()
//         super.parent()
//         // console.log('============');
//         // this.info()
//     }
// }
// let rb = new Rabbit()
// rb.info()
// ====================Overriding constructor====================
// class Animals {
//     constructor (name) {
//         this.name = name
//     }
//     speed (speed){
//         console.log(`${this.name} Runs ${speed}km per hour` );
//     }
// }
// class Rabbit extends Animals {
//     constructor(name){
//         super(name)
//     }
// }
// // class Rabbit extends Animals {
// //     constructor(...args){ // if there is only one parameter to send
// //         super(...args)    // then we can just type ...args so that 
// //     }                     // we can send that parameter to parent
// // }
// let rb = new Rabbit('Rabbit')
// let wf = new Rabbit('Wolf')
// rb.speed(10)
// wf.speed(10)
// =====================================================================
// class Animals {
//     constructor (name) {
//         console.log(name);
//     }    
// }
// class Rabbit extends Animals {
//     constructor (...args) {
//         super(...args)
//     }
// }
// // class Rabbit extends Animals {}
// let rb = new Animals('Rabbit')
// let wf = new Animals('Wolf')
// ===========================================================
class Calculator {
    constructor(sign){
        if(sign==='plus') this.sign = '+'
        if(sign==='minus') this.sign = '-'
        if(sign==='multiply') this.sign = '*'
    }
    Cal(...rest){
        console.log(eval(rest.join(`${this.sign}`)));
    }
}
let plus = new Calculator('plus')
let minus = new Calculator('minus')
let multiply = new Calculator('multiply')

multiply.Cal(1, 2, 3, 4)
plus.Cal(1, 2, 3, 4)
minus.Cal(1, 2, 3, 4)










