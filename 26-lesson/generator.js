function* data(){
    yield 1
    yield 2
}

const generator = data()
const gr1  = data()

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// ================================================================
// console.log(generator.next());
// console.log(generator.next());
// console.log(gr1.next());
// =======================loop of generator==========================
// ====================for loop=======================
// for (i of generator){
    // console.log(i);
// }
// ======================array spread operator===================
console.log([...generator]);