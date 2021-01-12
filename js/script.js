$(document).ready(function(){

    
        $('.cta_nav .dropdown').click(function(){
            $(this).children('.drop_down:language').toggleClass('active');
        });

    $('.dropdown').hover(function(){
        $(this).children('.drop_down').toggleClass('active');
    });

});