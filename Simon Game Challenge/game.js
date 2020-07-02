
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


// Next Level
function nextSequence(){

    // Incerease level
    level++;
    $('#level-title').text("Level "+level);

    //Choose a random number between 0 & 3;
    var randomNumber = Math.floor(Math.random()*4);

    // Choose color from "buttonColours"
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    //push new random button in "gamePattern" and rest "userClickedPattern"
    gamePattern.push(randomChosenColour);
    userClickedPattern = [];

    //Play sound of new random button
    playSound(randomChosenColour);
}





// Start
$(document).keypress( function(event) {
    if(level === 0)
        nextSequence();
});





// User click
$(".btn").click(function() {

    // push "userChosenColour" in "userClickedPattern"
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    // play animation and sound;
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Check if user clicked correct button
    checkAnswer(userClickedPattern.length -1);
});




// Play sound of "name" button
function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}




// Animate "currentColour" button
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}




// Check user "userClickedPattern" with "gamePattern"
function checkAnswer(currentClick) {
    if( userClickedPattern[currentClick] === gamePattern[currentClick] ){

        // if both the "userClickedPattern" and "gamePattern" matched user proceeds to next level
        if(userClickedPattern.length === gamePattern.length){
            setTimeout( nextSequence, 1000);
        }

    }
    else{

        // Reset the game and play gameover animations
        gameOver();
        startOver();
    }
}




// Play gameover animation
function gameOver() {
    $('h1').text("Game Over, Press Any Key to Restart");
    $('body').addClass("game-over");
    playSound("wrong");
    setTimeout(function() {
        $('body').removeClass("game-over");
    }, 200);
}

// Rest
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}
