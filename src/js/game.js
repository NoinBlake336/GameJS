const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const hearth = document.querySelector('#lives');
const levelCount = document.querySelector('#level');

var boton = {
    x: 50,
    y: 30,
    ancho: 100,
    alto: 40,
    color: 'blue',
    texto: 'Reiniciar',
    presionado: false
};

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

const playerPosition = {
    x: undefined,
    y: undefined,
};

const giftPosition = {
    x: undefined,
    y:undefined,
};

let enemyPositions = [];

    // Función para dibujar el botón en el canvas
const dibujarBoton = () => {
        game.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar el botón
        game.fillStyle = boton.color;
        game.fillRect(boton.x, boton.y, boton.ancho, boton.alto);

        // Configurar el texto
        game.fillStyle = 'white';
        game.font = '16px Arial';
        game.textAlign = 'center';
        game.textBaseline = 'middle';

        // Dibujar el texto en el centro del botón
        game.fillText(boton.texto, boton.x + boton.ancho / 2, boton.y + boton.alto / 2);
}

// Juego Ganado
const gameWin = ()=>{
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';
    game.clearRect(0,0,canvasSize,canvasSize);
    game.fillText("HAS GANADO!!",elementsSize,elementsSize);





    // Función para manejar el clic en el botón
    const clicEnBoton = (event)=> {
        var rect = canvas.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;

        if (
            mouseX >= boton.x &&
            mouseX <= boton.x + boton.ancho &&
            mouseY >= boton.y &&
            mouseY <= boton.y + boton.alto
        ) {
            // El clic ocurrió dentro del botón
            boton.presionado = true;
            // Ejecutar la función que desees cuando se presiona el botón
            ejecutarFuncion();
        }
    }

    // Función que se ejecuta cuando se presiona el botón
    function ejecutarFuncion() {
        alert('Botón presionado');
    }

    // Agregar un evento de clic al canvas
    canvas.addEventListener('click', clicEnBoton);

    // Llamar a la función para dibujar el botón inicialmente
    dibujarBoton();

};

// Siguiente Nivel 
const levelWin = ()=>{
    level ++
    startGame();
};

// Posicion Actual
const levelFail = () =>{
    lives--;
    if(lives <= 0){
        level = 0;
        lives = 3;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
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
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x-25,playerPosition.y);
};

// Funcion principal;
const startGame = () =>{
    hearth.innerHTML = lives;
    levelCount.innerHTML = level+1;
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';


    const map = maps[level];

    if(!map){
        gameWin();
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
    if((playerPosition.y - elementsSize)+25 < elementsSize){
        console.log('UP')
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









