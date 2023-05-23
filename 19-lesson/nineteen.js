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
// let a = {
//     name : 'John',
//     surname : 'Smith'
// }
// let b = {
//     name : 'John',
//     surname : 'Smith'
// }
// function getFullName(a, b, c){
//     console.log(a, b, c);
//     console.log(`${this.name} ${this.surname}`);
// }
// getFullName.call({name:'Harry'}, 'hey', 'you', 'how')
// ===============================================================================================
// let player ={
//     name : 'Leo',
//     number : 10,
//     nationality : "Argentina"
// };
// function getInfo(comment){
//     console.log(`${this.name} is from ${this.nationality} and plays under the number ${this.number}`, comment);
// }
// getInfo.call(player, ', who won every major trophy that every professional player dreams.')
// getInfo.apply(player, [', who won every major trophy that every professional player dreams.'])
// let bind = getInfo.bind(player, ', who won every major trophy that every professional player dreams.')
// bind()