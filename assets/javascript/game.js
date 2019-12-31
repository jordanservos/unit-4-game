//Define Crystal Variables 
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    purple: {
        name: "Purple",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },


};



//Current Score and Magic Number Variables

var currentScore = 0;
var magicNumber = 0;


//Wins and Losses Variables 

var wins = 0;
var losses = 0;


//Functions ------------------------

//Magic number rnadomizer
var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Gsme start function

var gameStart = function() {
    // reset score to 0
    currentScore = 0;
    // set random magic number
    magicNumber = randomNumber(19, 120);

    // set random crystal values
    crystal.blue.value = randomNumber(1, 12);
    crystal.purple.value = randomNumber(1, 12);
    crystal.red.value = randomNumber(1, 12);
    crystal.yellow.value = randomNumber(1, 12);

    // insert scores and counts into HTML
    $("#currentScore").html(currentScore);
    $("#magicNumber").html(magicNumber);



};

// Check for a win or loss
var didYouWin = function() {

    if (currentScore > magicNumber) {
        alert("You didn't collect the right amount of crystals! You Lose...")

        losses++;

        $("#lossCount").html(losses);

        gameStart();

    } else if (currentScore === magicNumber) {
        alert("You collected the perfect amount of crystals! You Win...")

        wins++;

        $("#winCount").html(wins)

        gameStart();

    }

};

// Crystal click actions

var crystalValueChange = function(crystalClicked) {
    currentScore += crystalClicked.value;

    $("#currentScore").html(currentScore);

    didYouWin();

};


// Start game and click behavior

gameStart();

$("#blue").click(function() {
    crystalValueChange(crystal.blue);
});

$("#purple").click(function() {
    crystalValueChange(crystal.purple);
});

$("#red").click(function() {
    crystalValueChange(crystal.red);
});

$("#yellow").click(function() {
    crystalValueChange(crystal.yellow);
});