let users = [
    {id:1, name : "me"},
    {id:2, name : 'she'},
    {id:3, name : 'he'},
    {id:4, name : 'it'},
]
const container = document.querySelector('#container')
const button = document.querySelector('#boxBtn')
const box = document.querySelector('#boxHolder')
const boxChild1 = document.querySelector('#boxChild1')
const boxChild2 = document.querySelector('#boxChild2')
const boxChild3 = document.querySelector('#boxChild3')
const boxChild4 = document.querySelector('#boxChild4')
for(i in users){
    if(boxChild1) {
        boxChild1.prepend(users[0].id)
    boxChild1.append(users[0].name)
    } if(boxChild2) {
        boxChild2.prepend(users[1].id)
        boxChild2.append(users[1].name)
    }  if(boxChild3) {
        boxChild3.prepend(users[2].id)
        boxChild3.append(users[2].name)
    } if(boxChild4) {
        boxChild4.prepend(users[3].id)
        boxChild4.append(users[3].name)
    }
}
function onRemove(id){
    let res = users.filter(value=>value.id!==id)
    users = res
    box.innerHTML = null
    readRemove()
    console.log(res);
}
onRemove()
function readRemove(){
    users.forEach(value=>{
        button.addEventListener('click', ()=>onRemove(value.id))

    })
}
function onDelete(id){
    let res = users.filter(value=>value.id!==id)
    users = res
    container.innerHTML = null
    readData()
    console.log(res);
}
const btn = document.createElement('button')
function readData(){   
    if(!users.length) container.innerHTML = 'No data' 
    users.forEach(value=>{
        // box.prepend(value.id)
        const div= document.createElement('div')
        const btn = document.createElement('button') 
        btn.innerHTML = 'delete'
        btn.addEventListener('click', ()=>onDelete(value.id))
        div.innerHTML = `${value.id} ${value.name}`
        div.append(btn)
        // btn.innerHTML = `<button onclick="console.log('${value.id}')">click</button>`
        container.append(div)
    })
}
readData()
// container.classList.add('border')
// container.classList.toggle('me')
// container.classList.toggle('men')
// container.classList.remove('men')
// console.log(container);

const ball = document.querySelector('#ball')
const stadium = document.querySelector('#stadiumPicture')
stadium.onclick =(e)=>{
    ball.addEventListener('click', ball.scrollBy({
        behavior:"smooth",
        top : e.y,
        left : e.x
    }))    
        // console.log(e.x, e.y);
}