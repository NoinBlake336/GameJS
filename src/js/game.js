const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');



let canvasSize;
let elementsSize;


const playerPosition = {
    x: undefined,
    y: undefined
};

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


            if(col == 'O'){
                playerPosition.x = posX;
                playerPosition.y = posY;
            };

            game.fillText(emoji,posX-25,posY);

        });
    });

    game.fillText(emojis['PLAYER'], playerPosition.x,playerPosition.y);
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



const moveUp = ()=>{
    
};

const moveLeft = ()=>{
    
};

const moveRight = ()=>{
    
};

const moveDown = ()=>{
    
};


const moveByKeys = (key)=>{
    switch (key) {
        case key.key == 'ArrowUp':
            moveUp();
            break;
        case key.key == 'ArrowLeft':
            moveLeft();
            break;
        case key.key == 'ArrowRight':
            moveRight();
            break;
        case key.key == 'ArrowDown':
            moveDown();
            break;
        default:
            break;
    }
};


btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

window.addEventListener('mousedown',moveByKeys);
window.addEventListener('load', setcanvasSizes);
window.addEventListener('resize', setcanvasSizes);









