//while (1) {
//    console.log('Sarvar');
//    console.log('Abdulloh aka');
//    continue
//    console.log('me');
//}
//====================================
//for ( i = 1; i < 4; i++){
//   for( j = 3; j > 1; j--)
//   console.log(j + i);
//
//}
//===========================================
//for (let i = 0; i < 98; i++) {
//    if ((i % 3 == 1 || i % 3 == 2)) {
//        console.log(i, '-tub son');
//    } else if (i % 5 == 1 || i % 5 == 2 || i % 5 == 3 || i % 5 == 4) {
//        console.log(i, '- tub son');
//    }else if (i % 2 == 0) {
//        console.log(i, '-natural son');
//    }
//     else if (i % 7 == 1 || i % 7 == 2 || i % 7 == 3 || i % 7 == 4 || i % 7 == 5 || i % 7 == 6) {
//        console.log(i, '-tub son');
//    } else {
//        console.log(i, 'natural son');
//    }
//
//}
//===================================================================================================
//for (let i = 0; i < 10; i++) {
//    for (let j = 0; j < 8; j +=2) {
//        if (`(${i} % ${j} != 0) == ${i % j}`) {
//            console.log(i, `-tub son`);
//        } else {
//            console.log(i, `-natural son`);
//        }
//
//    }
//}
//===============================================================
//while ( i = 1) {
//    console.log(`number ${i}!`);
//    console.log(++i);
//    console.log(i < 4);
//}
//for (let i = 3; i < 100; i++) {
//    if (i%2==1) {
//        console.log(i);
//    }
//}
//========================================
//let i = 1;
//
//while (i < 4) {
//    console.log(`Number ${i++}!`);
//}
//=========================================================================
//let i = 0;
//
//while (i++ < 3) {
//    console.log(i);
//}
//console.log(`====================`);
//
//let j = 3;
//
//while (j) {
//    console.log(j--);
//}
//
//console.log(`====================`);
//
//let c = 0;
//
//while (++c < 5) {
//    console.log(c);
//}

// let i = 5;
// console.log(i++);
// console.log(i);
//===================================================================================================================
//let a = +prompt('son kriting')
//
//if (a == 0) {
//    alert(  0 );
//}
//
//if (a == 1) {
//    alert( 1 );
//}
//
//if (a == 2 || a == 3) {
//    alert( '2,3' );
//}
//===================================================================================================
//let a = 'me';
//
//console.log(a);
//
//function it(a, b,) {
//    console.log(a,b,);
//}
//
//it('me', 'we', 'he')
//=======================================================================================================
//let a = 'me'
//
//switch (a) {
//    case 'me':
//        console.log('you');
//        break;
//
//    default:
//        console.log('he');
//        break;
//}
//==============================================================================
//function me() {
//
//}
//
//console.log(me);
// ===========================================================================
//let name = 'Abdulahad'
//
//function it(name) {
//    console.log(name);
//}
//
//it('Abdulahad')
//it('Sarvar')
//it('Samandar')
//it('Ahmadali')
// ========================================================================
//function a() {
//    alert("Hello my friend")
//}
//=========================================================================================
//function it(a) {
//    return a / 100;
//}
//
//console.log(it(5) === 5);
//console.log(parseInt(it(5)));
//==================================
// defaul parametre
//function it(a) {
//    if (a === undefined) {
//        console.log('Not necessary');
//    } else {
//        console.log(a);
//    }
//}
//
//it(1)
//it()
//========================================================
//function expression
//func('Abdulahad', 16, 7)
//func('Abdulahad', 17, 7.5)
//func('Humoyun', 17, 5.5)
//func('Qizbola', 17, 6.5)
//func('Bowqa qizbola', 17, 7.5)
//const func = function (name, age, score) {
//    console.log(`${name} - 'sinfdoshlar`, (`${age} - "yosh"`), `${score} - 'IELTS bal'`);
//}
//
//func('Abdulahad', 16, 7)
//func('Abdulahad', 17, 7.5)
//func('Humoyun', 17, 5.5)
//func('Qizbola', 17, 6.5)
//func('Bowqa qizbola', 17, 7.5)
//function functions (name, age, score) {
//    console.log(`${name} - 'sinfdoshlar`, (`${age} - "yosh"`), `${score} - 'IELTS bal'`);
//}
//========================================================================================================
//const arrow = () => 'hey';
//
//console.log(arrow());
//==========================================================================================
//
//
//function it(a) {
//   console.log("hello my friend")
//   console.log("hello my cousine")
//   console.log("hello my friend")
//   console.log("hello my friend")
//   console.log("hello my friend")
//   console.log("hello my friend")
//   console.log("hello my friend")
//   console.log("hello my fellow")
//}
//===================================================
//function declaration, function expression, arrow function
///funcDec('Abdulahad', 17) // function call
/// function funcDec (name, age) {
///     console.log(age, name);
/// }
//console.log(a);
//let a  = 'me';
// 2) function expression
//const a = function (name, age) {
//    console.log(`${name} - 'student`, age);
//}
//a('Abdulahad', 17)
//=============================================================
// 3) arrow function
//const a = () => 'hey'; // this
//
//console.log(a());
// default parametre
//function tg(surname) {
//    if (surname === undefined) {
//        console.log('not essenitial');
//    } else {
//        console.log(surname);
//    }
//}
//
//tg('Sultonov')
//====================================================================
//
//function a (name) {
//    console.log(name);
//}
//
//console.log(parseInt(a()));
//clean code === chiroyli manoli nomlash getGpa
//=============================================================
//function min (a, b) {
//   if (a < b) {
//       console.log(a);
//   } else {
//       console.log(b);
//   }
//}
//
//min(2, 1);
//========================================================================
//function pow(a, b) {
//    console.log(a ** b);
//}
//
//pow(3, 5)
//pow(3, 3)
//pow(3, 5)
//================================================================
// function checkAge(age) {
//     if (age => 18) {
//         return true;
//     } else {
//         return ('Do your parens allow you?');
//     }
// }

// console.log(checkAge(8));

// function second(old) {
//     old > 18 ? console.log(true) : console.log('Do your parens allow you?');
// }

// second(10);

//function second(old) {
//    old > 18 || 'Do your parens allow you?'
//}
//console.log(20);
//
//second(17)

//const ask = (question, yes, no) => {
//    if (console.log(question)) yes();
//    else no()
//}
//
//ask(
//    "Do you agree?",
//    function() {console.log("You agreed.");},
//    function() {console.log("You canceled the execution.");},
//);
//========================================================
//Homework
// let user = {}
// console.log(user);
//let user = {name : 'John'}
//console.log(user.name);
//console.log(user['name']);
// let user = {name : 'John', surname : 'Smith'}

// console.log(user.name, user.surname);
// console.log(user['name'], user['surname']);
//=============================================================
// let user = {name : 'John', surname : 'Smith', name : 'Pete'}

// console.log(user.name, user.surname);
// console.log(user['name'], user['surname']);
// let user = {name : 'John', surname : 'Smith', name : 'Pete'}

// delete user.name
// console.log(user.name, user.surname);
// console.log(user['name'], user['surname']);
//=======================================================

// let res = 0;
// if (v[0] > res) {
//     res = v[0];
// }
// if (v[1] > res) {
//     res = v[1];
// }
// console.log(res);
//     if (v[2] > res) {
//         res = v[2];
// }
// console.log(res);
// let v = Object.values(obj);
// console.log(v);
// function name(jamshid) {
//     let res = 0
//     for (i = 0; i < jamshid; i++) {
//         jamshid.
//     }
//     // console.log(res);
// }

// name(v)

// let obj = {
//     eshmat: 10,
//     toshmat: 5,
//     gulmat: 200
// }
// let sum = 0
// const plus = (str) => {
//     for (i in str) {
//         sum += str[i]
//     }
//     console.log(sum);
// }
// plus(obj)

// let obj = {
//   eshmat: 10,
//   toshmat: 5,
//   gulmat: 200,
// };
// let sum = 0;
// for (i in obj) {
//   sum += obj[i];
// }
// console.log(sum);
//================================
// let a = 'he';

// function expres() {
//     let a= 'me';
//     console.log(a);
// }

// expres()
//=========================================
// let a = 'he';

// function expres() {
//     console.log(a);
//     let a= 'me';
// }

// expres()
//=========================================
// let a = 'Habib'

// switch (a) {
//     case 'Messi':
//         console.log(`7-ta oltin to'p, 6-ta oltin butsa, Jahon chempioni, 2-ta the best, 2-marta Jahon Chempionati eng yaxshi oyinchisi.`);
//         break;
//     case 'Ronaldo' :
//         console.log(`5-ta oltin top, 4-ta oltin butsa`);
//         break;
//     case 'Habib':
//         console.log(`UFC da maglubyatsiz seriya yagona rekord, P4P ning qiroli`);
//         break;
//     case 'McGregor':
//         console.log(`iki vazn chempionlik kamari sohibi, jangini eng kop muhlis tomosha qilgan`);
//     default:
//         console.log(`Va bu sensan hechvaqosiz`);
//         break;
// }
//==========================================================
// =======================Optional chaining==========================
// let user = {
//   name : 'John',
//   surname : {surname : 'Smith'}
// }
// console.log(user.surname.surname);
// delete user.surname
// console.log(user.surname?.surname);
// let user = {
//   name : 'John'
// }
// user = null
// console.log(user?.name);
// function makeUser(){
//   return{
//       name:"John",
//       ref:this
//   };
// }
// let user=makeUser();
// console.log(user.ref.name)
// ===========================================
// const random = ()=>{  
//   let second = parseInt((Math.random()*100)/2)
//   return second === 0 ? second = 1 : console.log(second);
  
// }
// random()
// ==========================================================
let players = {
  Captain : {
    name : 'Harry Kane',
    number : 10,
    fullName : `Harry kane`
  },
  Goalkeeper : {
    name : 'Jordan Pickford',
    number : 1,
    fullName : `Jordan Pickford`
  },
  Defender : {
    name : 'Trent Alexander-Arnold',
    number : 66,
    fullName : `Trent Alexander-Arnold`
  },
  Midfielder : {
    name : 'Jude Bellingham',
    number : 20,
    fullName : `${this.name} plays under the number ${this.number}`
  }
}
console.log('started');
// function findPlayer(player, optional, ){
//   setTimeout(()=>{
//     if(player === optional.name){
//       (optional.fullName())
//     } else {
//       (console.log('There is not such a player in England national team'))
//     }
//   }, 2000)
// }
// let next = findPlayer('Jude Bellingham', players.Midfielder)
// console.log(next);
// console.log('finished');

// function findPlayer(player, optional, callback){
//   setTimeout(()=>{
//     if(player === optional.name){
//       return callback(optional.fullName)
//     } else {
//       return callback(console.log('There is not such a player in England national team'))
//     }
//   }, 2000)
// }
// findPlayer('Jude Bellingham', players.Midfielder, (final)=>{
//   console.log(final)
//   console.log('finished');
// })
// ================================================
// let b = -1.345
// let a = 1.565

// console.log(Math.round(a));
// console.log(a.toPrecision(2));
// console.log(a.toPrecision(4));
// console.log(a.toFixed(1));
// console.log(a.toFixed(2));
// console.log(a.toFixed(3));
// console.log(a.toFixed(4));
// console.log(Math.SQRT1_2);
// console.log(parseInt(a));
// console.log(Math.trunc(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.floor(b));
