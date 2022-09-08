let tentativas = 0;
let maximoTentativas = 3;
let numeroSecreto = parseInt(Math.random() * 11)
let botaoChutar = document.getElementById("chutar")

botaoChutar.addEventListener("click", () => {

    console.log(numeroSecreto)

    let result = document.getElementById("resultado")
    let uhu = document.getElementById("parabens")
    let tent = document.getElementById("mostrarTentativas")
    let chute = parseInt(document.getElementById("valor").value);

        if (chute > 10 || chute < 0) {
            result.innerText = 'Digite um número entre 0 e 10'
        } if (chute < numeroSecreto) {
            result.innerText = 'Tente novamente! (Um pouco mais)'
            tentativas++
            tent.innerText = `Tentativas: ${tentativas}`
        } if (chute > numeroSecreto) {
            result.innerText = 'Tente novamente! (Um pouco menos)'
            tentativas++
            tent.innerText = `Tentativas: ${tentativas}`
        } if (chute == numeroSecreto) {
            result.innerText = 'Parabéns! Você acertou o número secreto'
            uhu.style.opacity = '100'
            uhu.src = 'https://c.tenor.com/Ir77-EpQACEAAAAd/high-five-bate-aqui.gif'
        }
        if (tentativas >= maximoTentativas) {
            result.innerText = 'Você excedeu o número de tentativas para este número, reinicie a página e tente novamente'
        } 
    }
)