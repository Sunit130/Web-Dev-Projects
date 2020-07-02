$(document).ready(function(){
    $('img').click( function(){
        var next_src = $(this).attr("src");
        var next_data = $(this).attr("data-next");
        $(this).attr("src", next_data);
        $(this).attr("data-next", next_src);
    });
});
