const ClickButton = document.getElementById('click-button');
const GameContainer = document.getElementsByClassName('game-container');
const ContainerPrincipal = document.getElementById('contenedorPrincipal');

ClickButton.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "/game.html"
})
