const title = document.querySelector('.title')
const button = document.querySelector('.btn')
const range= new Range()
range.setStart(title.firstChild, 0)
range.setEnd(title.firstChild, 10)
window.getSelection().addRange(range)
button.addEventListener('click', ()=>{
    range.deleteContents()
})