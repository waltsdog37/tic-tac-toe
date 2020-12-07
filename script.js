// store blank gameboard in array
let gameboard = ['','','','','','','','',''];
const playerX = "X";
const playerO = "O";
let xTurn;

// DOM variables
let errorMessage = document.getElementById("error-message");
let titleScreen = document.getElementById("title-container");
let gameScreen = document.getElementById("game-container");
let squares = document.querySelectorAll(".game-board");
let playerOne = document.getElementById("player-one");
let playerTwo = document.getElementById("player-two");


// listen for clicks on each square, prevent multi-click
squares.forEach(cell => {
    cell.addEventListener("click", markBoard, { once: true })
});

// hide title page on click and open game page
function hideTitle() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
    //getPlayers();
}

// main click function
function markBoard(e) {
    let cell = e.target;
    let currentTurn = xTurn ? playerO : playerX;
    placeMark(cell, currentTurn);
    // check for win
    // check for draw
    newTurn();
}

// add mark to gameboard array and update gameboard
function placeMark(cell, currentTurn){
    let cellIndex = cell.getAttribute("data-index");
    gameboard[cellIndex] = currentTurn;
    console.log(gameboard);
    renderMarks();
}

// fill in gameboard with marks from gameboard array
function renderMarks() {
    for (let i=0; i<9; i++) {
        squares[i].innerHTML = gameboard[i];
    }
}

// change player after each new mark
function newTurn() {
    xTurn = !xTurn;
}