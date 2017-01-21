$(document).ready(function(){
    $('#hideBtn').click(function(){
        $('#hide').hide();
    })   
    $('#showBtn').click(function(){
        $('#hide').show();
    })  
})

$(document).ready(function(){
    $('#hideBtnSpeed').click(function(){
        $('#hideSpeed').hide('slow'); // The speed parameter specifies the speed of the hiding/showing,
    })                                //  and can take the following values: "slow", "fast", or milliseconds.

    $('#showBtnSpeed').click(function(){
        $('#hideSpeed').show('slow'); // The speed parameter specifies the speed of the hiding/showing,                  
    })                                //  and can take the following values: "slow", "fast", or milliseconds.
})

// toggle() : Shown elements are hidden and hidden elements are shown

$(document).ready(function(){
    $('#toggleBtn').click(function(){
        $('#toggle').toggle('slow',function(){
            if($('#toggle').is(":visible"))alert('Secret Weapon Showed Up'); // this line will executed when the html element will visible in web page
        });
    })
})