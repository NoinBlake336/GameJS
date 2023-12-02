const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');



let canvasSize;
let elementsSize;
let level = 0;

const playerPosition = {
    x: undefined,
    y: undefined,
};

const giftPosition = {
    x: undefined,
    y:undefined,
};

let enemyPositions = [];

// Siguiente Nivel 
const levelWin = ()=>{
    level ++
    startGame();
} 

// Movimineto Jugador
const movePlayer = ()=>{
    const giftcollitionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftcollitionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollition = giftcollitionX && giftcollitionY; 

    if(giftCollition){
        levelWin();
    };

    const enemyCollition = enemyPositions.find(enemy =>{
        const enemyCollitionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollitionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollitionX && enemyCollitionY;
    });
    if(enemyCollition){
        console.log('enemigos');
    }

    game.fillText(emojis['PLAYER'], playerPosition.x-25,playerPosition.y);
};

// Funcion principal;
const startGame = () =>{
    
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';


    const map = maps[level];

    if(!map){
        alert('has completado el juego');
        return;
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));

    enemyPositions = [];
    game.clearRect(0,0,canvasSize,canvasSize);

    mapRowCols.forEach((row,rowI) =>{
        row.forEach((col,colI)=>{
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);


            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                }
            }else if(col=='I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            }else if(col == 'X'){
                enemyPositions.push({
                    x:posX,y:posY
                });
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
    if((playerPosition.y - elementsSize) < elementsSize){
        return;
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }
    
};

const moveLeft = ()=>{
    if(((playerPosition.x - elementsSize)) < elementsSize){
        return;
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
    
};

const moveRight = ()=>{
    if(((playerPosition.x + elementsSize)) > canvasSize){
        return;
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
    
};

const moveDown = ()=>{
    if(((playerPosition.y + elementsSize)) > canvasSize){
        return;
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
    
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









