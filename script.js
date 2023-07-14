
const gameBoard = (() =>{
    const board =[
        "","","",
        "","","",
        "","",""
    ];

    const getGameBoard = () => {
        return board;
    }

    return {getGameBoard};
})();

function player(name, marker) {
    return {name, marker};
}

