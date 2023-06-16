let users = [
    {id:1, name : 'me'},
    {id:2, name : 'she'},
    {id:3, name : 'he'},
    {id:4, name : 'it'},
]
const ball = document.querySelector('#ball')
const container = document.querySelector('#container')
const stadium = document.querySelector('#stadiumPicture')
    stadium.onclick =(e)=>{
        ball.scrollBy(e.x, e.y)
        // console.log(e.x, e.y);
}
// container.classList.add('border')
container.classList.toggle('me')
container.classList.toggle('men')
container.classList.remove('men')
console.log(container);

function onDelete(id){
    users.filter(value=>value.id!==id)
}
function readData(){    
    users.forEach(value=>{
        const div= document.createElement('div')
        const btn = document.createElement('button')
        // div.innerHTML = `${value.id}.${value.name} <button onclick="console.log('${value.id}')")>click</button>`
        div.append(btn)
        addEventListener('click', ()=>onDelete())
        btn.innerHTML = `<button onclick="console.log('${value.id}')">click</button>`
        container.append(div)
    })
}