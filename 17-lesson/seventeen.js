// {
//     var a = 'b'
// }
// {
//     var a = 30
// }
// pasdagi variable yuqoridagi variablega tasir qilib ornini 
// egalavoladi, oldinlari(let chiqiwidan oldin) buni oldini oliw 
// uchun IIFE bor bogan, bu var ni local  qilib uni faqat scope ichida
// iwlatsa boladigan qib qoyadi
// IIFE ni formulasi : 
// (()=>{
//     var a = 'b'
// })()
// console.log(a);
// mana mana bu holatda node js topomadi var ni chunki u endi global 
// emas local bob qoldi
// =======================NFE==============================
// const moment = function test() {
    // test.local = 'web'
// }
// moment()
// console.log(moment.local);
// NFE bzga function ga ikinchi nom biriktiradi qaysiniki biz faqat
// functionni block scope ichidagina chaqirolamiz yo
// iwlatolamiz tawqarida iwlatsa eror beradi
// ========================new Function===================
// bzga odiy function yasaberadi
// let a = new Function(`console.log('hey')`)
// a()