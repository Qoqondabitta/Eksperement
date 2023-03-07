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
//    if (a < b) {
//        console.log(a);
//    } else if (b < a) {
//        console.log(b);
//    } else {
//        console.log(a);
//    }
//}
//
//min(2, 2);
//========================================================================
//function pow(a, b) {
//    console.log(+`${a ** b}`);
//}
//
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
//    old > 18 || old === 'Do your parens allow you?'
//    console.log();    
//}
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
