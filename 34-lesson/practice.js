const image = document.querySelectorAll(".img")
const next = document.querySelector("#next")
const prev = document.querySelector("#previous")
// function nextFunction(e){
//     for(img=0;img<image.length;img++){
//         if(image[img].getAttribute('class').includes('active')){
//             if(image[image.length-1].getAttribute('class').includes('active')){
//                 image[0].classList.add('active')
//                 image[image.length-1].classList.remove('active')
//             } else {
//                 image[img+1].classList.add('active')
//                 image[img].classList.remove('active')
//             }
//                 break
//         }
//     }
// }
// function previousAction(){
//     for(i = 0; i<image.length; i++){
//         if(image[i].getAttribute('class').includes('active')){
//             if(i === 0){
//                 image[i].classList.remove('active')
//                 image[image.length-1].classList.add('active')
//             } else {
//                 image[i-1].classList.add('active')
//                 image[i].classList.remove('active')
//             }
//             break
//         }
//     }
// }
function buttonAction(type){
    for(img=0;img<image.length;img++){
        if(image[img].getAttribute('class').includes('active')){
            if(type==='next'){
            if(image[image.length-1].getAttribute('class').includes('active')){
                    image[0].classList.add('active')
                    image[image.length-1].classList.remove('active')
                } else {
                    image[img+1].classList.add('active')
                    image[img].classList.remove('active')
                }
            } else {
                if(img === 0){
                    image[img].classList.remove('active')
                    image[image.length-1].classList.add('active')
                } else {
                    image[img-1].classList.add('active')
                    image[img].classList.remove('active')
                }
            }
            break
        }
    }
    
} 
next.addEventListener('click', ()=>buttonAction('next'))
prev.addEventListener('click', ()=>buttonAction('prev'))