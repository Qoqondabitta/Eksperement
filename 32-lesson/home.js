// const hold = document.getElementById("imgHolder")
// const img1 = document.querySelector('#imgBox1')
// const img2 = document.querySelector('#imgBox2')
// const img3 = document.querySelector('#imgBox3')
// const img4 = document.querySelector('#imgBox4')
// const title = document.querySelector('#h1')
// console.log(img1.style.width = '250px',);
// console.log(img2.style.width = '250px',);
// console.log(img3.style.width = '250px',);
// console.log(img4.style.width = '250px',);
// console.log(img1.style.height = '250px');
// console.log(img2.style.height = '250px');
// console.log(img3.style.height = '250px');
// console.log(img4.style.height = '250px');
// console.log(hold.style.display = "flex");
// console.log(img1.style.margin = '80px 0px auto 200px');
// console.log(img2.style.margin = '80px 0px auto 10px');
// console.log(img3.style.margin = '80px 0px auto 10px');
// console.log(img4.style.margin = '80px 0px auto 10px');
// // console.log(hold.padding = '200px');
// console.log(title.style.margin = '150px 0px auto 650px');
// console.log(title.style.color = 'red');
// let c = 'font-size'
// console.log(title.c = '150px');
// // console.log(ar);
// console.log(hold.style.gap = '10px');
// =========================Dom | 2 |===============================
// let title = document.querySelector('h1')
// console.log(title.hasAttribute('type'));
// console.log(title.getAttribute('id'));
// console.log(title.removeAttribute('id'));
// console.log(title.setAttribute('class', 'final'));
// console.log(title.createAttribute('class'));
// console.log(title);
// dv.innerHTML = txt
// dv.setAttribute('id', txt)
// const dv = document.createElement('div')
// let txt = document.createTextNode('uk')
// dv.innerHTML = "c"
// console.log(dv.style.border = '1px solid black');
// console.log(dv.style.width = '100%');
// console.log(dv.style.height = '100px');
// dv.prepend(txt)
// dv.before(txt)
// const holder = document.querySelector('.example')
// holder.prepend(dv)
// holder.append(dv)
// holder.before(dv)
// holder.after(dv)
// console.log(holder.append(dv));
// console.log(dv);

// function disRemoveVowel(str) {
//     var a = ''
//     for(i=0;i<str.length;i++){
//       if(str[i]!=='a' &&str[i]!=='e'&&str[i]!=='i'&&str[i]!=='o'&&str[i]!=='u' &&str[i]!=='A'&&str[i]!=='E'&&str[i]!=='I'&&str[i]!=='O'&&str[i]!=='U') a += str[i]
//     }
//    return a;
//   }  
//   disRemoveVowel("seYCNTIincZqmMDQ")
// ======================================================================================
// var isSquare = function(n){
//     let root = Math.sqrt(n)
//     if(root === parseInt(root)) {return console.log(true);}
//     else return console.log(false);
// }
// isSquare(88)
// function highAndLow(numbers){
//     let a = ''
//     let b = numbers.split(' ')
//     let res = b.sort((a, b)=>b-a)
//     // console.log(res);
//     let c = res.splice(0, 1)
//     let d = res.splice(-1, 1)
//     a += c
//     a += d
//     console.log(a.split('').join(' '));
// }
// highAndLow('1 2 4 0 -9')
// console.log(Math.sqrt(-1));
// let b = 1.2132433
// // console.log(1.2132433);
// console.log(parseInt(1.2132433)=== b);
// console.log(1);
// console.log(parseInt(1));
// function findNextSquare(sq) {
//     let root = Math.sqrt(sq)
//     let next = ++root
//     if(parseInt(root)===root) return console.log(Math.pow(next, 2));
//     else return console.log(-1); 
// }
// findNextSquare(121)
// console.log(Math.pow(2, 2));
// function arrayDiff(a, b) {
    // let res = a.filter((value)=>{
        // if(!b.includes(value)){
            // console.log(value);            
        // }
    // })
    // console.log(res);
    // return res
// }
// arrayDiff([2, 0, -1, 2], [])

// arrayDiff([5,10,3,10,-7,-14,-20,-1,14,20,0,-10,-8,15],[5,10,3,10])
// arrayDiff([10,12,13,10,8,0,-5,14,8,-9,-14],[])
// arrayDiff([8,-14,-5,-18,-14,-12,-20,-11,12,-1,11,-20,-3,-11,18,11,0],[8,-14,-5,-18,-14,-12,-20,-11])
// const a = document.querySelector('div')
// // a.style.background = 'red'
// a.style.cssText=`
// `
// function likes(names) {
//         if(names.length===0) {
//             return console.log(`No one likes this`);
//         } else if (names.length===1) {
//             return console.log(`${names[0]} likes this`);
//         } else if(names.length===2) {
//             return console.log(`${names[0]} and ${names[1]} like this`);
//         } else if (names.length===3) {
//             return console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
//         } else if (names.length>=4) {
//             return console.log(`${names[0]}, ${names[1]} and ${names.length-2} others like this`);
//         }
// }
// likes(["han", 'mark', 'sue'])
// function divisors(integer) {
//     let gain = []
//     if(integer) {
//     for(i=2;i<integer;i++){
//         if (parseInt(integer/i)===integer/i) {
//             gain.push(integer/i)
//         } else if(integer % 2 !== 0 && integer % 3 !== 0 && integer % 5 !== 0 && integer % 7 !== 0) {
//             return console.log(`${integer} is prime`);
//         } else if(integer===2||integer==3||integer===5||integer===7 ) {
//             return console.log(`${integer} is prime`);
//         }
//     }
//     return console.log(gain.sort((a, b)=>a-b));
// } 

// };
// divisors(253)
// function divisors(integer) {
//     let gain = []
//     for(i=2;i<integer;i++){
//         if (integer%i!==0) {
            
//         }
//     }
// };
// divisors(253)