const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

const startGame = () =>{
    setcanvasSizes();

    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';

    for (let i = 1; i < 10; i++) {
        game.fillText(emojis['X'],elementsSize*i,elementsSize*i);
    };

};


const setcanvasSizes = ()=>{


    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

}



window.addEventListener('load', startGame);
window.addEventListener('resize', setcanvasSizes);
