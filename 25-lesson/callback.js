import {player} from "./mock1.js"

function check (lg, pw, callback){
    setTimeout(() => {        
        if (player.Sterling.club === lg && player.Sterling.number === pw) {
            return callback(`Hitherto Sterling won ${player.Sterling.trophy} and plays under the number 10`)
        } else {
            return callback(`Ouh! Sorry, but there is no such a player with the data provided`)
        }
    }, 3000);
}
console.log('started')
check('Chelsea', '10', (final)=>{
console.log(final)
console.log('finished')
})
// let receive = check('Chelsea', '10')
// console.log(receive)
console.log('finished')