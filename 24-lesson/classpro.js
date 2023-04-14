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
class Animals {
    constructor (name){
        this.name = name
    }
}
class Rabbit extends Animals {
    constructor(name){
        // this.name = name
        super(name)
        // this.created = Date.now()
        // super.name = this.name
        }
}
let rabbit = new Rabbit('White Rabbit')
console.log(rabbit.name);