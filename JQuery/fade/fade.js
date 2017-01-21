$(document).ready(function(){
    $('#fadein').click(function(){
        $('#div1').fadeIn(1000);
        $('#div2').fadeIn(1500);
        $('#div3').fadeIn(2000);
        $('#div4').fadeIn(2500);
    })
})

$(document).ready(function(){
    $('#fadeout').click(function(){
        $('#div1').fadeOut(1000);
        $('#div2').fadeOut(1500);
        $('#div3').fadeOut(2000);
        $('#div4').fadeOut(2500);
    })
})

$(document).ready(function(){
    $('#fadeToggle').click(function(){
        $('#div1T').fadeToggle(1000);
        $('#div2T').fadeToggle(1500);
        $('#div3T').fadeToggle(2000);
        $('#div4T').fadeToggle(2500);
    })
})

$(document).ready(function(){
    $('#fadeTo').click(function(){
        $('#div1To').fadeTo(1000,.5);
        $('#div2To').fadeTo(1500,.2);
        $('#div3To').fadeTo(2000,.7);
        $('#div4To').fadeTo(2500,.1);

        setInterval(callback,5000)  // After 5 Sec this function will call
        function callback(){
            $('#div1To').fadeTo(1000,1.0);
            $('#div2To').fadeTo(1500,1.0);
            $('#div3To').fadeTo(2000,1.0);
            $('#div4To').fadeTo(2500,1.0);
        }
    })
})