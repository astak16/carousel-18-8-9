init()
let n = 1
setInterval(function(){
    leave(getImg(n)).one('transitionend',function(e){
        enter($(e.currentTarget))
    })
    current(getImg(n+1))
    n+=1
},2000)

function x(num){
    if(num>5){
        num = num % 5
        if(num === 0){
            num = 5
        }
    }
    return num
}

function init(){
    $('img:nth-child(1)').addClass('current').siblings().addClass('enter')
}
function getImg(n){
    return $(`img:nth-child(${x(n)})`)
}
function current($node){
    return $node.removeClass('enter').addClass('current')
}
function enter($node){
    return $node.removeClass('leave').addClass('enter')
}
function leave($node){
    return $node.removeClass('current').addClass('leave')
}

