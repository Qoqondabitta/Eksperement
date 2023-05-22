// ======================Block scope {}============================
// {
//     let a = 'b'
// }
// console.log(b);  // is not defined
// block scopedagi malumotni ozidan tawqarida iwlati bomidi
// Lekinn agar let orniga var iwlatsak unda uni qiymati chiquradi
// {
//     var a = 'b'
// }
// console.log(a);
// Block scope ga if, switch, for loop, while kiradi  
// if (1) {
//     var a = 'b'
// }
// console.log(a);
// ====================function scope============================
// function scopeni blockdan farqi wundaki function ichidagi 
// variable ni siz faqat uni ichida iwlatolas tawqarisidamas
// hoh u variable let yokida var bln ochilgan boliwidan qatinazar 
// function test () {
//     var a = 'b'
// }
// test()
// console.log(a); // a is not defined
// =========================Global scope==========================
// bu turdagi scope ga 'this, global, globalThis and window' kiradi
// Har qanaqa scope da ihtiyoriy function da yozamizmi block da
// yozamizmi tawqariga chiqariw uchun har qanday scopedan bzga 
// special keywordlar kereboladi(tepada sanab otirilganlar)
// This objectda function da orab turuvchiga teng bob qoladi 
// oqibatda uni vazifasi ozgaribketib qoladi va
// tawqarida iwlatibomidi lkn unga alternativ raviwda bizda global 
// bor. window dom bln iwlatiladi, globalThis esa vanilla Js bilan
// window node js da iwlamidi, global esa backend bilan iwlatiladi
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