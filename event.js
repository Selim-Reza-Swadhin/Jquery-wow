// $(document).ready(function(){
//     $('.btn').click(function(){
//         // alert('I am clicked');
//         // $('.hOne').hide(2000);
//         $('.hOne').toggle(2000);
//     })
// })

// $(document).ready(function(){
//     $('.hOne').hover(function(){
//         $('.btn').hide(2000);
//     }, function(){
//         $('.box').hide(2000);
//     })
// })


// $(document).ready(function () {
//     $('.hOne').on('click', function () {
//         $('.box').toggle(2000);
//     })
// })


$(document).ready(function () {
    $('.hOne').on({
        click: function () {
            $('.box').hide(2000);
        },
        mouseenter: function () {
            $('.btn').hide(2000);
        },
        mouseleave: function () {
            $('.hOne').hide(2000);
        }
    });
})