/* JS é uma linguagem de programaçao
    VAriavel - é um pedaço da memoria do computador que posso guardar o que eu quiser
    Funçao- pedacnho do codigo que s executa quando é chamada 
    Criar um botao que vai ligar o som: Botao > For ClicADO > cHAMAR FUNÇAO > lIGAR Som
    Docment = HTML
    QuerySelector (Secionar ou pegar um item no HTML)
    addEventListener = Sua vizinha fofoqueira(vai ocntar quando algo acontecer)
*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botaoMute = document.querySelector(".botao-mute")
let botao = document.querySelector(".link-info") // no final foi declarado a classe ".link-info" que esta no HTML
let modal = document.querySelector(".modal")

botaoSom.addEventListener("click", ligaSom) // Quando cicar no botao, iran chamar a funçao ligaSom
botaoMute.addEventListener("click", mutedSom) 

function ligaSom(){
    video.muted = false
}

function mutedSom(){
    video.muted = true
}

// Mostrar o MODAL
botao.addEventListener("click", mostrarModal)
// Escoder o MODAL
modal.addEventListener("click", esconderModal)

// funçao para troca do Display de NONE para BLOck
function mostrarModal(){
    modal.style.display = "block"
}
// funçao para esconder o MODAL ao clicar em qualuqer parte da tela
function esconderModal(){
    modal.style.display = "none"
}