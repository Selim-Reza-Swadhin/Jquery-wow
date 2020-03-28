/*---------------Stop--------------*/
// $(document).ready(function(){
//     $('.btn').click(function(){
//         $('.box').animate({width:"50%"},5000)
//     });
//     // $('.box').mouseenter(function(){
//     //     $('.box').stop();
//     // })

//     $('.btn2').click(function(){
//         $('.box').stop();
//     })
// })

/*-----------------Callback---------------*/

$(document).ready(function(){
    $('.btn').click(function(){

        // $('.box').animate({width:"50%"},5000, function(){
        //     // alert('I am done');
        // })

        $('.box').hide(5000, function(){
            //  alert('I am done');
            // $('h1').css('font-size', '200px');
            // $('h1').css('background-color', 'green');
            // $('h1').css('color', 'white');
            
            $('h1').css({'fontSize':'200px'});
            $('h1').css({'backgroundColor':'green'});
            $('h1').css({'color':'white'});
        })
    });
   
})