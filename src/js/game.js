const canvas = document.querySelector('#game');

const game = canvas.getContext('2d');

const startGame = () =>{
    game.font = elementsSize + 'px Verdana';
    game.textAling = 'end';

    for (let i = 1; i < 10; i++) {
        game.fillText(emojis['X'],elementsSize*i,elementsSize*i);
    };

};


const setcanvasSizes = ()=>{
    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = canvasSize / 10;

}



window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);
