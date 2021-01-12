$(document).ready(function(){

    var dropDownMenu = $('.dropdown');

    dropDownMenu.hover(function(){
        $(this).children('.drop_down').toggleClass('active');
    });

});