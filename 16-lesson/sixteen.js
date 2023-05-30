// ======================Block scope {}============================
// {
//     let a = 'b'
// }
// console.log(b);  // is not defined
// we cannot access to the information located inside the block scope outside of it, but we can access to
//  to that info if that info is assigned to the var not let
// {
//     var a = 'b'
// }
// console.log(a);
// Block scope includes : if, switch, for loop and while.  
// if (1) {
//     var a = 'b'
// }
// console.log(a);
// ====================function scope============================
// difference between block scope and function scope is that, although you assign info with let or var no
// matter this info can be used only inside the scope not outside the scope of function, but in block scope you 
// info with var can be used the outside the block scope. 
// function test () {
//     var a = 'b'
// }
// test()
// console.log(a); // a is not defined
// =========================Global scope==========================
// GLOBAL SCOPE includes this, global, globalThis and window
// Har qanaqa scope da ihtiyoriy function da yozamizmi block da
// yozamizmi tawqariga chiqariw uchun har qanday scopedan bzga 
// special keywordlar kereboladi(tepada sanab otirilganlar)
// This objectda function da orab turuvchiga teng bob qoladi 
// oqibatda uni vazifasi ozgaribketib qoladi va
// tawqarida iwlatibomidi lkn unga alternativ raviwda bizda global 
// bor. window dom bln iwlatiladi, globalThis esa vanilla Js bln
// window node js da iwlamidi, global esa backend bln iwlatiladi
// global ham node js da iwlidi faqat browserni console da 
// iwlamidi globalThis esa hammasi bln iwluradi har qadnday 
// holatda, chunki hamma browser lar ham globalni support qimagan,
// bu backend da node js bln iwlidi.
// ==========================Closure=============================
// Mlum bir scope da ozini scope idan tawqaridagi bolgan  
// malumotni iwlatiw closure diyiladi
// let a = 'b';
// function c (){
//     console.log(a);
// }
// c()
// let a = 'b';
// function c (){
//     return function d () {
//         console.log(a);
//     } 
// }
// c()()
// =====================Lexical Environment========================
// bu oz ichiga local memory va outer variable ni oladi.
// function ni scope ichida yurgizilib iwlatilinib bolgan 
// kodlar lexical environment orqali avtamaticheski heap dan 
// ochib ketadi. L.E iwlaw tarziga misol :
// let a = 'b';
// function test () {
        // agar variable function ichida bomasa tawqaridan
        // oladi variable ni, lkn agar scope ichida bolsa unda
        // owani oladi, birinchi ichidagini qidiradi
        // bomasa kn tepaga chiqadi.
        // log(a)
// }
// test()
// 
// ===================================May 21, 2023==================================
// let id = setInterval(() => {
//         let time = 10
//         console.log(time--);
//         if (time === 0) {
//                 clearInterval(id)
//         }
// }, 1000);
// ===========================================================================
// for(let i = 1; i<5;i++){
        

// }
// for(let i = 5;i<9;i++){
        

// }
// console.log(i);
// =================================preparation for exam=====================================
// function create(){
//         create.he = 'me'
// }
// create()
// console.log(create.he);
// ===============the next one ife========== 
// (()=>{
//         var a = 'b'
        
// })()
// console.log(a);
// =========nfe==============
// const test = function exam(number){
//         if(number === 1)return number =+ 1
//         else return number = number + exam(number-1)
// }
// console.log(test(2));
// ==========wrapped arrow function==============
// let a = {
//         c : 'b',
//         k : function (){
//             return ()=>{
//             console.log(this.c);
//             }
//         }
// }
// a.k()()
// ===========================================
// return non-primitive bolganidan keyin this yoqolib qoladi