$(document).ready(function() {

        var intervalup = setInterval( function() {
        var numbercount = parseInt($('#counter1').text());
        sumb = numbercount - 1;
        if(sumb != 0){
            $('#counter1').html(sumb);
        }else{
            $('#counter1').html(sumb);
            clearInterval(intervalup);
        }
    }, 1000 );


});
