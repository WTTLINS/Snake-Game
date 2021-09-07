let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /* renderiza o desenho do canvas */
let box = 32; /* 32 pixels para cada quadrado */

function criarBG() {
    context.fillStyle = "lightgreen"; /* definição do background .fillStyle */
    context.fillRect(0, 0, 16 * box, 16 * box); /* desenha  retangulo onde acontece o jogo, altura e largura de 16 pixels declarado. */
}

criarBG();