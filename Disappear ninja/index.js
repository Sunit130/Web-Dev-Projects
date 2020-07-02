

// Make the clicked Ninja disappeared
$(".ninja").click( function(){
    console.log(this);
    $(this).animate({opacity:0});
});

// Reset
$(".reset").click( function() {
    $(".ninja").css("opacity",1);
});
