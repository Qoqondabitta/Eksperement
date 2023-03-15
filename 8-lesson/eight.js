// function it() {
//     console.log('he');
// }

// let a = {
//     name : 'me',
//     it () {
//         console.log('he');
//     }
// }

// it()
// a.it()
//===========================================================
// function adn () {
//     this.name = 'he';
//     // console.log(this);
// }

// console.log(new adn().name);
//==================================================
// function a () {
//     console.log('Hi');
// }

// let b = {
//     name : 'it',
//     f () {
//       console.log('Shukur');
//     }
// }

// a()
// console.log(b);
// console.log(Object.keys(b));
// b.f()
//=================================================
// function a () {
//     console.log('Hi');
// }

// let b = {
//     name : 'it',
//     a,
// }

// a()
// b.a()
//=================================================
// let a = {
//     d : 'c',
//     b () {
//         console.log( `Third is ${a.d}` );
//         console.log( `Third is ${this.d}` );
//     }
// }

// let f = a;
// a = null;

// f.b()
//============================================
// let id1 = Symbol('he')

// let obj = {
//     [id1] : 'she'
// }

// console.log(obj[id1]); 
//===================================================
// let id1 = Symbol('he')
// let id2 = Symbol('he')

// let obj = {
//     [id1] : 'she',
//     ['id2'] : 'iy'
// }

// console.log(obj[id2]); 
// console.log(obj['id2']); 
//===========================================================
// let a ={
//     b : 'c',
//     d : 'f',
//     e : 'g'
// }

// for (value in a) {
//     console.log(value);
// }
//==================================
// for (value in a) {
//     console.log(value);
// }
// let a ={
//     b : 'c',
//     d : 'f',
//     e : 'g'
// }

// const {b, d, e} = a

// console.log(d);
//===========================================
// let b ='m';

// let a ={
//     b : 'c',
//     d : 'f',
//     e : 'g'
// }
// for (value in a) {
//     // console.log(value);
// }

// const { b : newB, d, e } = a;

// console.log(newB);
// console.log(a.b);
//========================================================
// function e() {
//     return 'f';
// }

// let a = {
//     b : 'c',
//     d : function () {
//         return 'u'
//     },
//     e,
//     h () {
//         return 'hi';
//     }
// }

// console.log(a['h']);
//============================================================
// let a = {
//     me : 'hge'
// }

// a = null

// console.log(a);
//=================================================
// let a = {
//     me : 'hge',
//     g ()  {
//         return () => {
//             //    console.log(`yes ${a.me}`);
//                console.log(`yes ${this.me}`); 
//         }
//     }
// }

// a = null

// // console.log(a);
// // console.log(a.g);
// console.log(a.g); 
//==========================================================
// function a () {
//     console.log('m');
// }

// let obj = {
//     hey () {
//         console.log('h9');
//     },
//     a,
//     k : function () {
//         console.log('klmn');
//     }
// }

// console.log(a.hey());
//==========================================================
