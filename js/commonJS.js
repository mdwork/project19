$(document).ready(function() {

    function initialization(){
        $('#myContainer').fullpage({
            sectionsColor: ['#4A6FB1', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
            resize: false,
            animateAnchor:false,
            scrollOverflow: true,
            autoScrolling:true,
            responsive: 900,
            fitSection: false,
            menu: '#menu',
            navigation:true,

            paddingTop: '20px',
            css3: true,
        });
    }

    //fullPage.js initialization
    initialization();
});