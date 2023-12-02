const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;


// Funcion principal;
const startGame = () =>{
    
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';


    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));


    mapRowCols.forEach((row,rowI) =>{
        row.forEach((col,colI)=>{
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            game.fillText(emoji,posX-25,posY);

        });
    });

    // for (let row = 1; row <=10; row++) {
    //     for (let cols = 1; cols <= 10; cols++ ){
    //         game.fillText(emojis[mapRowCols[row - 1][cols - 1]]
    //             ,(elementsSize*cols)-25,(elementsSize*row));
    //     }
    // };

};

// Responsive canvas;
const setcanvasSizes = ()=>{


    canvasSize = window.innerWidth > window.innerHeight ? window.innerHeight * 0.7 : window.innerWidth * 0.9

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = (canvasSize / 10) ;
    console.log(elementsSize);
    startGame();
};



window.addEventListener('load', setcanvasSizes);
window.addEventListener('resize', setcanvasSizes);
