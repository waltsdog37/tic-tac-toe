// DOM variables
let errorMessage = document.getElementById("error-message");
let titleScreen = document.getElementById("title-container");
let gameScreen = document.getElementById("game-container");
let squares = document.querySelectorAll(".game-board");
let playerOne = document.getElementById("player-one");
let playerTwo = document.getElementById("player-two");




let getPlayer = ({ playerName, humanAI, mark }) => ({
    playerName,
    humanAI,
    mark,
});


// dummy game squares filled
let gameBoard = {
    ulq: "",
    ucq: "",
    urq: "",
    mlq: "",
    mcq: "",
    mrq: "",
    llq: "",
    lcq: "",
    lrq: ""

}

// hide title page on click and open game page
function hideTitle() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
    getPlayers();
}

// get key values from gameBoard object to mark each square
function updateGameBoard () {
    for (let i = 0; i < 9; i++) {
        let key = squares[i].id;
        let mark = gameBoard[key];
        squares[i].innerHTML = mark;
    }
}

// populate square with player's mark on click
function markGameBoard(element) {
    let squareClicked = element.id;
    if (gameBoard[squareClicked] != "") {
        errorMessage.innerHTML = "Please choose another square";
    } else {
    gameBoard[squareClicked] = "S";
    updateGameBoard();
}}


function getPlayers() {
    
    if (playerOne.checked === false) {
        playerOne = "Human";
        document.getElementsByClassName("human-ai")[0].innerHTML = "Human";
    } else {
        document.getElementsByClassName("human-ai")[0].innerHTML = "AI";
    }
    
    if (playerTwo.checked === false) {
        playerOne = "Human";
        document.getElementsByClassName("human-ai")[1].innerHTML = "Human";
    } else {
        document.getElementsByClassName("human-ai")[1].innerHTML = "AI";
    }
}


updateGameBoard();