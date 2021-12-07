
// var all = $('ul.list').children();
// var product = $('ul.list').children().eq(0);
// var info = $('ul.list').children().eq(1);
// var shipping = $('ul.list').children().eq(2);


// $(product).on('click',function(){
//     $(all).removeClass('active');
//     $('.tab-content').removeClass('show');
//     $(product).addClass('active');
//     $('.tab-content').eq(0).addClass('show');

// });

// $(info).on('click',function(){
//     $(all).removeClass('active');
//     $('.tab-content').removeClass('show');
//     $(info).addClass('active');
//     $('.tab-content').eq(1).addClass('show');
// });

// $(shipping).on('click',function(){
//     $(all).removeClass('active');
//     $('.tab-content').removeClass('show');
//     $(shipping).addClass('active');
//     $('.tab-content').eq(2).addClass('show');
// });

// for(let i = 0; i < $('ul.list li').length; i++){

//     $('.tab-button').eq(i).click(function(){
//         탭열기(i);
//     });
// }



// $('.list').click(function(e){

//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         탭열기(0)
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         탭열기(1)
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         탭열기(2)
//     }
// });

//HTML에 몰래 정보심기 => data-작명 = "값"
//정보꺼내려면 HTML요소.dataset.작명
//jquery 방식) $('.list).data('작명','값');
//$('.list').data('작명');


$('.list').click(function(e){

    탭열기(e.target.dataset.id);
});

function 탭열기(i){
    $('.tab-button').eq(i).click(function(){
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('active');
        $('.tab-content').eq(i).addClass('show');
    });
}