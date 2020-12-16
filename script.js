// store blank gameboard in array
let gameboard = ['', '', '', '', '', '', '', '', ''];
const playerX = "X";
const playerO = "O";
let xTurn;
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM variables
let errorMessage = document.getElementById("error-message");
let titleScreen = document.getElementById("title-container");
let gameScreen = document.getElementById("game-container");
let squares = document.querySelectorAll(".game-board");
let playerOne = document.getElementById("player-one");
let playerTwo = document.getElementById("player-two");
let gameEndElement = document.getElementById("game-end-container");


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
    checkWin(currentTurn);
    // check for draw
    // trigger new turn
    newTurn();
}

// add mark to gameboard array and update gameboard
function placeMark(cell, currentTurn) {
    let cellIndex = cell.getAttribute("data-index");
    gameboard[cellIndex] = currentTurn;
    renderMarks();
}

// fill in gameboard with marks from gameboard array
function renderMarks() {
    for (let i = 0; i < 9; i++) {
        squares[i].innerHTML = gameboard[i];
    }
}

// change player after each new mark
function newTurn() {
    xTurn = !xTurn;
}

// check for win condition with current player
function checkWin(currentTurn) {
    // loop through win conditions to match gameboard
    for (let i = 0; i < winConditions.length; i++) {
        let first = winConditions[i][0];
        let second = winConditions[i][1];
        let third = winConditions[i][2];
        if (gameboard[first] == currentTurn &&
            gameboard[second] == currentTurn &&
            gameboard[third] == currentTurn) {
                console.log('winner: ' +currentTurn);
            }
    }
}

    // return winConditions.some(combination => {
    //     return combination.every(index => {
    //         console.log(squares[index].innerHTML == (currentTurn));
    //         });
    // });



/*
function isDraw() {
    return squares
}
*/