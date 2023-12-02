const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;


// Funcion principal;
const startGame = () =>{
    
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';

    for (let row = 1; row <=10; row++) {
        for (let cols = 0; cols <= 10; cols++ ){
            game.fillText(emojis['X'],elementsSize * cols,elementsSize * row);
        }
    };

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
