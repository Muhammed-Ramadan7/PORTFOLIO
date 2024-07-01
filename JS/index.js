$(window).on ('scroll' , function(){
    let top = $(window).scrollTop();
    let offset = $('#about').offset().top
    if (top > offset) {
        $(".navbar").addClass (' bg-white')
        $(".nav-link").removeClass (' text-white')
        $(".barss").removeClass (' text-white')
        $(".navbar-brand").removeClass (' text-white')
        $(".btn-up").show(500)
    }else{
        $(".navbar").removeClass (' bg-white')
                $(".nav-link").addClass (' text-white')
                $(".barss").addClass (' text-white')
                $(".navbar-brand").addClass (' text-white')
                $(".btn-up").hide(500)
    }
})


$('.btn-up').click(function(){
    $('html,body').animate({
    scrollTop:0
    },2000)
})


$('.nav-link').click(function(e){
let sectionId=$(this).attr('href');
let sectionTop=$(sectionId).offset().top;
$('html,body').animate({
    scrollTop:sectionTop
    },1500)
})

$('.options i').click(function(){
    let sideWidth = $('.optionsSide').outerWidth()
    let optionsLeft = $('.options').offset().left;
    if(optionsLeft === 0){
    $('.options').css({left:`-${sideWidth}px`,transition:'left 1s'})
    }else{
    $('.options').css({left:`0px`,transition:'left 1s'})
    }
    })
    
    $('.optionsSide ul li').click(function(e){
    let clickedColor=$(this).css('backgroundColor')
    $('p, h2').css('color',clickedColor)
    })
    
    $('.optionsSide img').click(function(){
    let clickedImg= $(this).attr('src')
    $('.home').css('backgroundImage',`url(${clickedImg})`)
    })
    // break 9:15
    
    $(window).ready(function(){
    $('#loading').slideUp(2000,function(){
    $('body').css({overflow:'visible'},3000)
    })
    })