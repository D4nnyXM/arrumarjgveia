//versao dois
// explicando como chama as coisas
//let elemento = document.getElementById("titulo")
//console.log("Resultado: "+elemento.innerHTML)
 function clicar(quadrado){

    if(quadrado.innerText == ""){
        quadrado.innerText = "X"

    }else if (quadrado.innerText == "X"){
        quadrado.innerText = "O"

    }else{
        quadrado.innerText = ""
    }
 }


 let quadradinho = document.querySelectorAll(".quadrado"); // esse query pega todos os quad. e poe dentro do quad.
 
//quadradinho[].innerText = "X"
function desenhajogo(){
    let jogo = document.querySelector(".jogo")
    for(let i=0; i<9; i++){
    jogo.innerHTML += `<div class= 'quadrado' id='q${i}' onclick='clicar(this)'></div>`



    }
}
desenhajogo()

// para proxima aula fazer os itens abaixo
// um jogador pr vez 
// condiçao  de vitoria 
// pontuaçao 
// reset
// condiçao de horizontal vertical e diagonal