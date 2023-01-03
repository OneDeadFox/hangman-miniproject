//todo: have the start button
    //1. generate word and start timer upon click
    //2. button disappears on click
//todo: generate word from list of words
    //1. have an array of potential words
    //2. display word as space separated underscores equal to word length
//todo: have game keep track of keyboard strokes
    //1. keep track of keyboard strokes and display letters that match the leters in the word to guess.
    //2. must fill in for doubles.
    //display wong guesses *add on*
//todo: set win and lose conditions
    //1. player wins if they guess all the correct letters
    //2. player loses if the timer runs out.
//todo: total wins and loses
    //1. display total win loss ratio and keep data in localStorage

//Global Variables
let pageEl = document.querySelector("body");
let startButton = document.querySelector("#start");
let guessEl = document.querySelector("#guess")
let winsNumEl = document.querySelector("#winsNum");
let losesNumEl = document.querySelector("#losesNum");
let timerTxtEl = document.querySelector("#timerNum");
let loses = localStorage.getItem("loses");
let guessWord = [];
let currentCount = 0;
let gameTime = 10;
let playing = false;


//Initiate Game
gameStart();

//The Deligator
pageEl.addEventListener("click", function(event){
    var element = event.target;

    if(element.matches("#start")) {
        gameRound();
    }
});

//Functions
function gameStart(){
    losesNumEl.textContent = loses;
    timerTxtEl.textContent = gameTime;

}

function gameRound() {
    function gameTimer(){
        var gameTimeLeft = setInterval(function(){
            gameTime--;
            timerTxtEl.textContent = gameTime;
            //end timer and add loss if it reaches zero
            if(gameTime <= 0){
                loses++;
                localStorage.setItem("loses", loses);
                losesNumEl.textContent = loses;
                gameTime = 10;
                clearInterval(gameTimeLeft);
            }

        }, 1000);
    }

    function getWord(){
        var words = ["Here", "Are", "Some", "Words"];
        var wordCount = words.length;
        guessWord = words[currentCount].split();
        var blanks = [];
        
        for(var i = 0; i < guessWord.length; i++){
            blanks.push("_")
        }
        
        guessEl.textContent = blanks.toString();
        
    }

    getWord();
    gameTimer();
    playing = true;
    timerTxtEl.textContent = gameTime;
    console.log("huh");
}

document.addEventListener("keyup", (event) => {
    var keyName = event.key;

    if(playing){
        console.log(guessWord.length)
        for(var i = 0; i < guessWord.length; i++){
            console.log("almost");
            if(keyName === guessWord[i].toString){
                console.log("working");
            }
        }
    }
})