
/*---------------Get---------------*/
// $(document).ready(function(){
//     // text(), html() and val()
//     $('.btn').click(function(){
//         // alert($('.code').text());
//         // alert($('.code').html());
//         alert($('.input1').val());
//     })
// })

/*----------------Set----------------*/
// $(document).ready(function(){
//     // text(), html() and val()
//     $('.btn').click(function(){
//     //    $('.ab').text('I am a Placeholder');
//     // $('.input1').val()
//     $('.ab').text($('.input1').val());
//     })
// })


$(document).ready(function(){
    // text(), html() and val()
    $('.input1 ').keyup(function(){   
    $('.ab').html($('.input1').val());
    })
})