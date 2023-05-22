// let a = {
//     name : 'John',
//     surname : 'Smith'
// }

// function getFullName(a, b, c){
//     console.log(a, b, c);
//     console.log(`${this.name} ${this.surname}`);
// }

// getFullName.call(a, 'hey', 'you', `what's up`)
// getFullName.apply(a, ['hey', 'you', `what's up`])

// let bind = getFullName.bind(a, 'Hey,', 'you', `what's up?`)

// bind()
// ===========================================================
let a = {
    name : 'John',
    surname : 'Smith'
}
let b = {
    name : 'John',
    surname : 'Smith'
}
function getFullName(a, b, c){
    console.log(a, b, c);
    console.log(`${this.name} ${this.surname}`);
}
getFullName.call({name:'Harry'}, 'hey', 'you', 'how')