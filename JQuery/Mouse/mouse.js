$(document).ready(function(){
    $('p').mouseenter(function(){ // The mouseenter() function is executed when the mouse pointer enters the HTML element
        $(this).css("background-color", "Red"); // This will change the current element background color to red.
    });
});

$(document).ready(function(){
    $('p').mouseleave(function(){ // The mouseleave () function is executed when the mouse pointer leaves the HTML element
        $(this).css("background-color", "White"); // This will change the current element background color to White.
    });
});

$(document).ready(function(){
    $('p').mousedown(function(){ // The function is executed, when the left, middle or right mouse button is pressed down,                        
        alert($(this).text());   // while the mouse is over the HTML element
    });
});

$(document).ready(function(){
    $('p').mouseup(function(){ // The function is executed, when the left, middle or right mouse button is released,
        $(this).hide();        // while the mouse is over the HTML element
    });
});

$(document).ready(function(){
    $('h1').hover(function(){ // The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
        alert('Hello!');      // The first function is executed when the mouse enters the HTML element,
    },function(){             // and the second function is executed when the mouse leaves the HTML element.
        alert('Bye!');
    });
});