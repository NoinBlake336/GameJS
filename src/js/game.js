const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;


// Funcion principal;
const startGame = () =>{
    
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';

    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++ ){
            game.fillText(emojis['X']['X'],elementsSize*i,elementsSize*j);
        }
    };

};

// Responsive canvas;
const setcanvasSizes = ()=>{


    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;
    console.log(elementsSize);
    startGame();
};



window.addEventListener('load', setcanvasSizes);
window.addEventListener('resize', setcanvasSizes);
