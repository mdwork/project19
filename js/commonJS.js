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
});