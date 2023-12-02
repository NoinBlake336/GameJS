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

// Movimineto Jugador
const movePlayer = ()=>{
    console.log('UP');
    game.fillText(emojis['PLAYER'], playerPosition.x-25,playerPosition.y);
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
    movePlayer();

};

// Responsive canvas;
const setcanvasSizes = ()=>{
    canvasSize = window.innerWidth > window.innerHeight ? window.innerHeight * 0.7 : window.innerWidth * 0.9

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = (canvasSize / 10) ;
    startGame();
};



const moveUp = ()=>{
    console.log('UP');
    playerPosition.y -= elementsSize;
    movePlayer();
    
};

const moveLeft = ()=>{
    playerPosition.x -= elementsSize;
    movePlayer();
    
};

const moveRight = ()=>{
    playerPosition.x += elementsSize;
    movePlayer();
    
};

const moveDown = ()=>{
    playerPosition.y += elementsSize;
    movePlayer();
    
};


const moveByKeys = (key)=>{

    if(key.keyCode==38) moveUp();
    else if(key.keyCode == 40) moveDown();
    else if(key.keyCode == 39) moveRight();
    else if(key.keyCode == 37) moveLeft();
    
};


btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

window.addEventListener('keydown',moveByKeys);
window.addEventListener('load', setcanvasSizes);
window.addEventListener('resize', setcanvasSizes);









