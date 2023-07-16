
const gameBoard = (() => {
    const board =[
        "x","o","o",
        "x","x","o",
        "x","o","o"
    ];

    const getGameBoard = () => {
        return board;
    }

    const updateGameBoard = (index, marker) => {
        board[index] = marker;
    }

    return {getGameBoard, updateGameBoard};
})();

function player(name, marker) {
    let score = 0;

    const getScore = () => {
        return score;
    }
    const updateScore = () => {
        score += 1;
    }
    return {name, marker, getScore, updateScore};
}

const displayController = ((arr) => {

    const main = document.querySelector('main');

    const gameboardGrid = document.createElement('div');
    gameboardGrid.className = "game-board";
    arr.forEach(element => {
        const box = document.createElement('div');
        box.className = "box";
        const boxMarker = document.createElement('div');
        boxMarker.className = element == "x" ? "x-color" : "o-class";
        boxMarker.appendChild(document.createTextNode(element));
        box.appendChild(boxMarker);
        gameboardGrid.appendChild(box);
    });
    
    const restart = document.createElement('button');
    restart.appendChild(document.createTextNode("Restart the game"));
    restart.id = "restart";

    main.appendChild(gameboardGrid);
    main.appendChild(restart);

    
})(gameBoard.getGameBoard());