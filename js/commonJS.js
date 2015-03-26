$(document).ready(function() {

    function initialization(){
        $('#myContainer').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
            resize: false,
            animateAnchor:false,
            scrollOverflow: true,
            autoScrolling:true,
            responsive: 900,
            fitSection: false,
            menu: '#menu',
            navigation:true,
            paddingTop: '0',
            css3: true
        });
    }

    //fullPage.js initialization
    initialization();

    $('.list-cart').each(function(){
        var $this = $(this),
            len = $this.children('li').length;

        if(len < 10) {
            var cntItems = len / 2,
                widthListCarts = Math.round(cntItems) * 212;

            $this.width(widthListCarts);
        }
    });

    var listContact = $('.list-cart-contact'),
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
    var itemServiceBlock = $('.list-cart-contact li');

    itemServiceBlock.on('click', function(e){
        e.preventDefault();

        var curItem = $(this).index();

        $(this).parent().children().removeClass('active');

        $(this).addClass('active');

        $(this).parent().parent().children('.list-more-info').children('li').removeClass('active');
        $(this).parent().parent().children('.list-more-info').children('li').eq(curItem).addClass('active');


    });
});