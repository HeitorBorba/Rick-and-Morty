let botaoIniciar = document.querySelector("#iniciar")
let botaoConfirmar = document.querySelector("#confirmar")
let caixaTexto = document.querySelector("input")
let texto = document.querySelector("h3")
let imagem = document.querySelector("img")
let resetar = document.querySelector("#resetar")
let avisar = document.querySelector("h1")
let i = ""
let pontos = document.querySelector("h4")

pesquisarPersonagem = () => {
    let aleatorio = Math.floor(Math.random() * 493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
        .then(function (result) {
            return result.json()
            
        })
        .then(function (data) {
            console.log(data.name);
            imagem.src = data.image;

            function validarNome() {
                if (caixaTexto.value == data.name) {
                    texto.innerHTML = "Parabens"
                    texto.style.color = "limegreen"
                    setTimeout(() => {
                        caixaTexto.value = ""
                        texto.innerHTML = ""
                    }, 2000);
                    i++
                    pontos.innerHTML = `Sua pontuçao é ${i}`;
                    
                    pesquisarPersonagem();

                }
                else {
                    texto.innerHTML = "errou"
                    texto.style.color = "red";
                    pesquisarPersonagem();
                }
                
            }

            botaoConfirmar.onclick = validarNome

        })
}
botaoIniciar.onclick = pesquisarPersonagem


// function resetarJogo() {
//     texto.innerHTML = ""
//     setTimeout(() => {
//         avisar.innerHTML = "Jogo Resetado"
//     }, 1000);
//     avisar.style.color = "darkcyan"
//     caixaTexto.value = ""
//     imagem.src = ""
//     setTimeout(() => {
//         avisar.innerHTML = "";
//     }, 2000);

// }

// resetar.onclick = resetarJogo;


// function validarNome() {
//     if(caixaTexto.value == name ){
//         texto.innerHTML = "Parabens"
//     }
//     else{
//         texto.innerHTML = "errou"
//     }
// }

// botaoConfirmar.onclick = validarNome
