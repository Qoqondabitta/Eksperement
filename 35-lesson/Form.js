const forma = document.forms[0]
const forms = document.forms[1]
// const formName = document.forms.register
// console.log(forma[1]);
// console.log(formName.re);
// console.log(formName.re.value);
// console.log(formName.select);
// console.log(select);
// console.log(select.options[2]);
// console.log(select.value = 'ru');
// console.log(select.selectedIndex = 2);

forma[0].onblur = (event)=>{
    if(!event.target.value.includes('@')){
        fault.innerHTML = 'The email you typed is not decent(it does include "@")'
    } else if(event.target.value.length===0){
        fault.innerHTML = `Not a valid email`
    }
}
forma[0].onfocus=()=>{
    fault.innerHTML = null
}
    // fault.innerHTML = null
//  else {
// }
function sayHello(value ){
   if(value==='uz') {
    return  "Assalamu alekum"
   } else if(value==='ru'){
    return 'Zdravstvuyte'
   } else if(value==='en'){
    return 'Hi'
   }
}
hello.innerText = sayHello(forms.select.value)
forms.select.addEventListener('input', ({target:{value}})=>{
    hello.innerText = sayHello(value)
})
const boxHolder = document.querySelector('#boxHolder')
const boxItem = document.querySelectorAll('#boxItems')
const checkPassword = (value)=>{
    if(value.length>1 && value.length>=8){
        boxItem[0].style.backgroundColor = 'green'
        boxItem[1].style.backgroundColor = 'green'
        boxItem[2].style.backgroundColor = 'green'
        boxItem[3].style.backgroundColor = 'green'
        return {message:'strong password'}
    } else if(value.length===0){
        boxItem[0].style.backgroundColor = 'rgb(236, 231, 231)'
        boxItem[1].style.backgroundColor = 'rgb(236, 231, 231)'
        boxItem[2].style.backgroundColor = 'rgb(236, 231, 231)'
        boxItem[3].style.backgroundColor = 'rgb(236, 231, 231)'
        return {message:''}
    } else {
        boxItem[0].style.backgroundColor = 'yellow'
        boxItem[1].style.backgroundColor = 'yellow'
        boxItem[2].style.backgroundColor = 'rgb(236, 231, 231)'
        boxItem[3].style.backgroundColor = 'rgb(236, 231, 231)'
        return {message:'normal password'}
    }
}
forma[1].addEventListener('input', ({target:{value}})=>{
    warning.innerText = checkPassword(value).message
    boxHolder.style.display = 'block'
    boxHolder.style.cssText = `
    padding: 5px 5px 5px 0;
    display: flex;
    column-gap: 5px;
    `
})