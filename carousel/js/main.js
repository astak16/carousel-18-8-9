let buttons = $('.buttons > span')
let images = $('.images > img')
for(let i = 0; i < buttons.length; i++){
    $(buttons[i]).on('click',function(e){
        let index = $(e.currentTarget).index()
        let p = index * -500
        $('.images').css({
            transform:'translate('+ p +'px)'
        })
        n = index
        setClass(buttons.eq(n))
    })
}
let n = 0;
let size = images.length
playSlide(n%size)
let timeId = setCarousel()
$('.images').on('mouseenter',function(){
    clearInterval(timeId)
})
$('.images').on('mouseleave',function(){
    timeId = setCarousel()
})
function setClass($button){
    $button.addClass('red').siblings().removeClass('red')
}
function playSlide(index){
    buttons.eq(index).trigger('click')
}
function setCarousel(){
    return setInterval(function(){
        n += 1
        playSlide(n%size)
    },3000)
}



