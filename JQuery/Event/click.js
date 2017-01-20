
$(document).ready(function(){ // The $(document).ready() method allows us to execute a function when the document is fully loaded. 
    $('label').click(function(){ // The click() function is executed when the user clicks on the HTML element.
        $('h1').hide();
    });
});

$(document).ready(function(){
    $('p').click(function(){ // When a click event fires on a <p> element. It will hide the current <p> element.
        $(this).hide();
    });
});

$(document).ready(function(){
    $('h2').dblclick(function(){ // The dblclick() function is executed when the user double-clicks on the HTML element
        alert('Here Is The Magic :P');
    });
});