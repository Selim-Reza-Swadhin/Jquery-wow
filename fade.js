$(document).ready(function(){
    $('.box').fadeOut(2000);
    $('.btn').click(function(){
        // $('.box').fadeIn(2000);
        // $('.box').fadeToggle(2000);
        $('.box').fadeToggle("slow");
        // $('.box').fadeTo("slow", 0.5);
        // $('.box').fadeTo(2000, 0.5);
        
    })
})