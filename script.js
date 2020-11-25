// dummy game squares filled
let gameBoard = {
    ulq: "X",
    ucq: "O",
    urq: "X",
    mlq: "O",
    mcq: "X",
    mrq: "O",
    llq: "X",
    lcq: "O",
    lrq: "X"

}

function hideTitle() {
    let titleScreen = document.getElementById("title-container");
    let gameScreen = document.getElementById("game-container");
    let startButton = document.getElementById("start-game");
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
}

function updateGameBoard () {
    let squares = document.querySelectorAll(".game-board");
    for (let i = 0; i < 9; i++) {
        let key = squares[i].id;
        let mark = gameBoard[key];
        squares[i].innerHTML = mark;

        console.log(key);
        console.log(mark);
    }
}

updateGameBoard();