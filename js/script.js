$(document).ready(function(){

    
    $('.cta_dropdown').click(function(){
        $(this).children('.drop_down.language').toggleClass('active');
    });
    
    $('.cta_nav').mouseleave(function(){
        $(this).find('.drop_down.language').removeClass('active');
    });

    $('.dropdown').hover(function(){
        $(this).children('.drop_down').toggleClass('active');
    });

});