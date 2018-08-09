let log = console.log.bind(console)
let buttons = document.querySelectorAll('.buttons > span')
let imagesWrapper = document.querySelector('.imagesWrapper')
let images = document.querySelectorAll('img')
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(e){
        // log(i)
        let currentTarget = e.currentTarget
        let p = i * -500
        imagesWrapper.style.transform = 'translate('+ p +'px)'
        n = i
        buttons[n].classList.add('red')
        siblingsDeleteClass(buttons[n],'red')
    })
}

let n = 0;
let size = images.length
buttons[n%size].click()
let timeId = setCarousel()

imagesWrapper.addEventListener('mouseenter',function(){
    clearInterval(timeId)
})
imagesWrapper.addEventListener('mouseleave',function(){
    timeId = setCarousel()
})

function setCarousel(){
    return setInterval(function(){
        n += 1
        buttons[n%size].click()
    },1000)
}







function siblingsDeleteClass(nodeOrSelector,className){
    let node
    let array = {length:0}
    if(nodeOrSelector === 'string'){
        node = document.querySelectorAll(nodeOrSelector)
    }else{
        node = nodeOrSelector
    }
    let allChildren = node.parentNode.children
    for(let i = 0; i < allChildren.length; i++){
        if(allChildren[i] !== node) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove(className)
    }
}
