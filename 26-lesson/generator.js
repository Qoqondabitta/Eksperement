// function* data(){
//     yield 1
//     yield 2
// }

// const generator = data()
// const gr1  = data()

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
// console.log([...generator]);
// try {
//     console.log(number);
//     console.log(a);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
// class a {
//     getInfo(){
//         console.log('Here is child');
//     }
// }
// class b extends a {
//     getChild(){
//         console.log('Here is parent');
//     }
//     getBoth(){
//         this.getChild()
//         super.getInfo()
//     }
// }
// let c = new b()
// c.getBoth()
// ==================================================
class a {
    #name = 'me'    
    set getPrivate(value){
        this.#name = value
        console.log(value);
    }
    get getPrivate(){
        console.log(this.#name);
    }
}
let b = new a()
b.getPrivate






















