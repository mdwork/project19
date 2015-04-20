$(document).ready(function() {
    $('.list-cart').each(function(){
        var $this = $(this),
            len = $this.children('li').length;

        if(len < 10) {
            var cntItems = len / 2,
                widthListCarts = Math.round(cntItems) * 212;

            $this.width(widthListCarts);
        }
    });

    var listContact = $('.toggle-active'),
        listInfoMore = $('.list-more-info');

    function addActiveClass(list) {
        list.each(function () {
            var lenListCartMoreInfo = $(this).children('li').length / 2,
                fixNumber = lenListCartMoreInfo.toFixed();

            $(this).children('li').eq(fixNumber - 1).addClass('active');
        });
    }

    addActiveClass(listContact);
    addActiveClass(listInfoMore);


    /*animate home slider*/
    var itemServiceBlock = $('.toggle-active li');

    itemServiceBlock.on('click', function(e){
        e.preventDefault();

        var curItem = $(this).index();

        $(this).parent().children().removeClass('active');

        $(this).addClass('active');

        $(this).parent().parent().children('.list-more-info').children('li').removeClass('active');
        $(this).parent().parent().children('.list-more-info').children('li').eq(curItem).addClass('active');


    });

    $('.btn-1').on('click', function(){
        $('.tr1').trigger( "click" );
    });
});