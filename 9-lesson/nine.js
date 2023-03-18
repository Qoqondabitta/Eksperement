// let a = `I love me`;

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);
// console.log(a[8]);
//====================================================================
// let a = `I love me`;
// let b = `me`

// console.log(a[-1]);
// console.log(b.charAt(1));
// console.log(a.at(-1));
//=====================================================================
// let a = `I Love me and I`;
// let b = `me`
// let c = `+998 (90) 111-65-54`
// let d = `12345678`
// let e = '3+6-7'
// let f = ' 234'

// console.log(b[b.length -2]);
// // console.log(a.split(a.toUpperCase(0, 2, 7)));
// console.log(b.charAt(2));
// console.log(b.at(-0));
// console.log(b.toUpperCase(3));
// console.log(a.toLowerCase);
// console.log(a.indexOf('I', 1));
// console.log(a.lastIndexOf('I', 7));
// console.log(c.includes('65'));
// console.log(c.startsWith('+998'));
// console.log(c.endsWith('54'));
// console.log(d.slice(1,-5));
// console.log(d.substring(1,7));
// console.log(d.substr(1,5));
// console.log(eval(e));
// console.log(f.trim().length);
// console.log(f.trimEnd().length);
// console.log(f.trimStart().length);
// console.log(a.toLocaleUpperCase(0, 2, 7));

// function tel(num) {
//     console.log(num.padStart(13, '+998'));
// }

// tel('901116554')
// tel('909621180')
// tel('930088217')
// tel('930067413')
//===================================================================
// let b = 'a'
// let a = `Abdulahad and Sardor and Anvar`

// console.log(a);
// console.log(b[3]);
// console.log(b.charAt(3));
// console.log(b.at(-3));
// console.log(a[a.length-3]);
// console.log(b.toUpperCase(2));
// console.log(b.toLowerCase(0));
// console.log(a.includes('as'));
// console.log(a.startsWith('Ab'));
// console.log(a.endsWith('r'));
// function telephone(number) {
//     console.log(number.padStart(19, '+998'));
// }

// telephone(' (90) 111-65-54')
// telephone(' (90) 962-11-80')
// console.log(a.slice(4, -1));
// console.log(a.substring(28, 25));
// console.log(a.substr(0, 6));
// console.log(eval('3+6-7'));
// console.log(b.trim()); // b.trimStart/End
// console.log(b.split(''));
// console.log(b.concat('against', ' versus'));
// console.log(b.search(/4d/i));
// for (i in b) {
//     console.log(i);
// }
// for (i of b) {
//     console.log(i);
// }
// console.log(b.localeCompare('A'));
//===================================================================
//                     Homework

// let a = 'Web-Brain Academy'

// if (a.includes('Aca')) {
//     console.log('yes');
// } else {
//     console.log('no');
// }
//=========================================================
//Task2
// let surname = 'abaabbb'
// console.log(surname);
// let a = 0;
// let b = 0;
// let d = 'd';
// let u = 'u';
// let l = 'l';
// let k = 'k';
// let h = 'h';
// let e = 'e';
// let j = 'j';
// let o = 'o';
// let n = 'n';
// let s = 's';
// let x = 'x';

// for (i = 0; i < surname.length; i++){
//     if ( surname[i] == a) {
//        a++
//     } else {
//         b++
//     }

// }

// console.log(a, b);
//========================================================
// function truncate(title, number) {
//     console.log(title.slice(0, number));
// }

// truncate('webbrain academy', 10)
//===========================================================
// function currency(str) {
//    if (str[i] = '$') {

// }
// }

// currency('$1200')
// let res = {}
// function GetCount(title) {
//     for(i of title) {
//         if (res[i]) {
//             ++res[i]
//         } else {
//             res[i] = 1
//         }
//     }
//     console.log(res);
// }

// GetCount('webbrainacademy')
// let res = "";
// function truncate(res, curency) {
//   for (i of curency) {
//     if (i !== "$") {
//       res += i;
//     }
//   }
//   console.log(res);
// }
// truncate(res, "$1200");
// let a = 'webbrain academy';
// let b = 'webbrain academy';

// if (a === b) {
//     console.log('Boshqalarga qaraganda koproq oxwawrogi');
// } else if (a.includes(b)) {
//     console.log('sal oxwawrogi');
// } else {
//     console.log('bowqlarga qaraganda oxwamaydigani');
// }
//===============================================================
// function first(a, b) {
//     if (a === b) {
//     console.log('Boshqalarga qaraganda koproq oxwawrogi');
// } else if (a.includes(b)) {
//     console.log('sal oxwawrogi');
// } else {
//     console.log('bowqlarga qaraganda oxwamaydigani');
// }
// }

// first('webbrain academy', 'Academy')
//===============================================================
// function quantity(a) {
//     let res = {};
//     for (i of a) {
//         if ([i] in res) {
//             ++res[i]
//         } else {
//             res[i] = 1
//         }
//     } console.log(res);
// }

// quantity(`webbrainacademy`)
//============================================================
// function word(a) {
//         if (a.startsWith([0]) == a.endsWith([a.length])) {
//             console.log(`ustoz aytgan so'z`);
//         } else {
//             console.log(`ustoz aytgan so'zni teskarisi`);
//         }
// }

// word('kiyib') // ustoz aytgan soz

// console.log(a.indexOf('kiy') == a.lastIndexOf('kiy'));
// if (a.indexOf('kiy') == a.lastIndexOf('kiy')) {
//     console.log(`ustoz aytgan so'z`);
// } else {
//     console.log(`ustoz aytgan so'zni teskarisi`);
// }

// let b = `kiyik`;

// function word(a) {
//     for (i of a) {
//         if (a.startsWith([0]) == a.endsWith([a.length -1])) {
//             console.log(`ustoz aytgan so'z`);
//         } else {
//             console.log(`ustoz aytgan so'zni teskarisi`);
//         }
//     }
// }

// word('kiyib')

// function pananim(a) {
//   // for (i of a) {
//   if (a[0] == a[a.length - 1] && a[1] == a[a.length -2] && a[2] == a[a.length -3]) {
//     console.log(`ustoz aytgan so'z`);
//   } else {
//     console.log(`ustoz aytgan so'zni teskarisi`);
//   }
//   // }
// }

// pananim(`noouiuoon`);

// let a = `kiyik`;

// console.log(a[a.length -2]);
//======================================================
// function curency(a) {
//   if (isNaN(a[0])) {
//     console.log(+(a.slice(1)));
//   } else {
//     console.log(parseInt(a));
//   }
// }

// curency(`$5000`)
//=======================================
// function password(a) {
//   let obj = {number:0, letter:0, char:0}
//   for (i of a) {
//     if (isFinite(i)) {
//       obj.number++
//     } else if (i.toLowerCase() !== i.toUpperCase()) {
//       obj.letter++
//     } else {
//       obj.char++
//     }
//   } 
//   console.log(obj);
// }

// password('Adn_6554@#$%Abdulakhad')
//=========================================================
// function last(a) {
//   let res = ' '
//    for ( i in a) { 
       
//     if((a[i -1] === ' ' || a[i-1] === undefined)) {
//       console.log(a[i].toUpperCase());
//     } else {
//       console.log(a[i]);
//     }
//    } console.log(res += a[i]);
// }

// last(`web brain academy`)
//===============================================
// function last(a) {
//   let res = ' '
//    for ( i in a) { 
//     res += 
//     a[i-1] === " " || a[i-1] === undefined 
//     ? a[i].toUpperCase()
//     : a[i];
//   }
//   console.log(res);
// }
// last(`web brain academy`)
// function repeat(a) {
//   let res = ''
//   for(i of a) {
//       res += i + i      
//   }
//   console.log(res);
// }
// repeat('webbraaainn')
//=================================================
// function counting(a) {
//   let res = ''
//   for (i in a) {
//     if(i in res) {
//       i += res++
//     } else {
//       i += res
//     }
//   }
//   console.log(res);
// }

// counting('weeebbbbbraaiinn')
//======================================================
// let a = 107;
// console.log(a.toString(2));
// function binary(number) {
//   let b = ''
//   for(i in number) {
// if (i === i+1) {
//   b += i++
// } 
//   }
// }

// binary(`10001111111001`)
//======================================================
// const text = (str) => {
//     let res = ""
//     let count = 1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++
//         } else {
//             res += str[i]
//             if (count > 1) {
//                 res += count
//                 count = 1
//             }
//         }
//     }
//     console.log(res)
// }
// text("weebbbrrrraaaaaiiiiiinnnnnnn")
//==================================================
// function getBynary(num) {
//     let bynar = num.toString(2);
//     let one = "";
//     let zero = "";
//     for (vl in bynar) {
//         switch(bynar[vl]) {
//             case "1":
//             one += "1";
//             break;
//             case "0":
//             zero += "0";
//         }
//     }
//     console.log(bynar);
//     if (one > zero){
//       console.log(`1 dan ${one.length} ta qatnashgan`);
//     } else {
//       console.log(`0 dan ${zero.length} ta qatnashgan`);
//     }
    
    
// }
// getBynary(5);
//=======================================================
