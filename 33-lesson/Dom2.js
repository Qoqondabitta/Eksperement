const test = document.querySelector("#test")
const button = document.querySelector("#button")
test.style.border = '1px solid black'
test.style.background = 'Red'
test.style.height = '200px'
test.style.width = '1000px'
test.style.overflow = 'scroll'
// button.onclick = ()=>{
//     test.scroll(0, 30)
// }
// console.log(test.scrollHeight);
// console.log(test.scrollWidth);
const newName = test.cloneNode(true)
console.log(newName); 