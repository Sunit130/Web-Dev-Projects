

$("img").click( function() {
    $(".click").html("");
    var house = $(this).attr("class");
    $.get("https://www.anapioficeandfire.com/api/houses/"+house, function (stats){
        var name = stats.name;
        var region = stats.region;
        var words = stats.words;
        var titles = ""
        for(var i=0; i<stats.titles.length-1; i++)
            titles += stats.titles[i] + ", ";
        titles += stats.titles[stats.titles.length-1];
        $(".name").html("<h3>Name : </h3>" + name);
        $(".region").html("<h3>Region : </h3>" + region);
        $(".words").html("<h3>Words : </h3>" + words);
        $(".title").html("<h3>Titles : </h3>" + titles);
    });
});
