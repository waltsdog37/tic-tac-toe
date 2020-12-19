// store blank gameboard in array
let gameboard = ['', '', '', '', '', '', '', '', ''];
// player placeholders - until player object code is written
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
let titleScreen = document.getElementById("title-container");
let gameScreen = document.getElementById("game-container");
let squares = document.querySelectorAll(".game-board");
let playerOneElement = document.getElementById("player-one");
let playerTwoElement = document.getElementById("player-two");
let gameEndElement = document.getElementById("game-end-container");
let messageElement = document.getElementById("message");

// TODO: create object and constructor for players
const playerFactory = (name, isHuman, mark) => {
    const getName = () => name;
    const getIsHuman = () => isHuman;
    const getMark = () => {
        // if player == 1, mark = "X"
        // else mark = "O"
    };
}

// listen for clicks on each square, prevent multi-click
squares.forEach(cell => {
    cell.addEventListener("click", markBoard, { once: true })
});

// hide title page on click and open game page
function hideTitle() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
    // TODO: getPlayers();

}

// main click function
function markBoard(e) {
    let cell = e.target;
    let currentTurn = xTurn ? playerO : playerX;
    placeMark(cell, currentTurn);

    // check for win
    checkWin(currentTurn);
    // check for draw
    checkDraw();
    // trigger new turn
    newTurn();
}

// add mark to gameboard array and update gameboard
function placeMark(cell, currentTurn) {
    let cellIndex = cell.getAttribute("data-index");
    gameboard[cellIndex] = currentTurn;
    
    // fill in the gameboard with marks from gameboard array
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

            // prevent further cell clicks
            squares.forEach(cell => {
                cell.removeEventListener("click", markBoard);
            });
            gameEndScreen(currentTurn);
        }
    }
}

// check if all squares are full (happens after checkWin func)
function checkDraw() {
    for (i = 0; i < gameboard.length; i++) {
        if (gameboard[i] == '') {
            return false;
        }
    }

    // TODO: still logs draw if full and is winner
    gameEndScreen("draw");
}

function gameEndScreen(result) {
    gameScreen.style.opacity = 0.25;
    gameEndElement.style.display = "block";
    let message;
    if (result == "draw"){
        message = "It's a draw"
    } else {
        message = result + " is the winner";
    }
    messageElement.innerText = message;
}