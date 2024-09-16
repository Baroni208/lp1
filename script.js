function gerarAleatorio(){
    const numeroAleatorio = (Math.floor(Math.random * 11))
    return numeroAleatorio
}

function jogar(){
    const numero = gerarAleatorio()
    const palpite = ""

    do {
        palpite = parseInt(prompt('Adivinhe o número'))
        if (palpite != numero){
            alert("Errou! tenta de novo")
        }
    }
    while (palpite != numero)

    alert(`Parabéns! O numero era: ${numero}`)
}
ç
jogar()