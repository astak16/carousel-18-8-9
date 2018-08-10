let log = console.log.bind(console)
let $imagesWrapper = $('.imagesWrapper')
let $img = $imagesWrapper.children('img')
let $buttonsWrapper = $('.buttons')
let $buttons = $('.buttons > span')
let $firstCopy = $img.eq(0).clone(true)
let $lastCopy = $img.eq($img.length-1).clone(true)
let current = 0

makeFakeSlide()
$imagesWrapper.css({transform:'translateX(-500px)'})
$buttons.eq(0).addClass('red').siblings().removeClass('red')
bindEvent()

let timer = setInterval(function () {
    getSlide(current+1)
},2000)

$('.previous').on('click',function(){
    getSlide(current-1)
})
$('.next').on('click',function(){
    getSlide(current+1)
})

$('.window').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer = setInterval(function () {
        getSlide(current+1)
    },2000)
 })




function makeFakeSlide(){
    $imagesWrapper.append($firstCopy[0])
    $imagesWrapper.prepend($lastCopy[0])
}
function bindEvent(){
    $buttonsWrapper.on('click','span',function(e){
        let $button = $(e.currentTarget)
        let index = $button.index()
        getSlide(index,$button)
    })
}
function getSlide(index,$button) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }

    if (current === 0 && index === $buttons.length - 1) {
        // 从第一张到最后一张
        //index = 0 时，轮播在第一张；当我按下第五张时，index 变为 4，因为 current 要到结束后才会变成 index，所以这时 current 还是等于 0
        $imagesWrapper.css({transform: 'translateX(0px)'})
            .one('transitionend', function () {
                $imagesWrapper.hide().offset()
                $imagesWrapper.css({transform: `translateX(${(index + 1) * -500}px)`}).show()
            })
    } else if (current === $buttons.length - 1 && index === 0) {
        // 从最后一张到第一张
        //index = 4 时，轮播在第五张；当我按下第一张时，index 变为 0，因为 current 要到结束后才会变成 index，所以这时 current 还是等于 4

        log(current)
        $imagesWrapper.css({transform: `translateX(${(index + current + 2) * -500}px)`})
            .one('transitionend', function () {
                $imagesWrapper.hide().offset()
                $imagesWrapper.css({transform: `translateX(${(index + 1) * -500}px)`}).show()
            })
    } else {
        log(1)
        $imagesWrapper.css({transform: `translateX(${(index + 1) * -500}px)`})
    }
    current = index
    $buttons.eq(index).addClass('red').siblings().removeClass('red')


}