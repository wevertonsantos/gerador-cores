// DOM
const $ = document

// Container
const mainContainer = $.querySelector("#main-container")

// Elemento Hexadecimal
const elementoHexadecimal = $.querySelector("#hexadecimal")

// BTN - gerar
const btnGerar = $.querySelector("#btn-gerar")

// Gerando número aleatório
const gerandoNumeroAleatorio = () => {
    const min = Math.ceil(0)
    const max = Math.floor(9)
    const numero = Math.floor(Math.random() * (max - min + 1)) + min
    return numero
}

// Gerando letras aleatórias
const gerandoLetrasAleatorias = () => {
    const letras = ["a", "b", "c", "d", "e", "f"]
    const minIndice = Math.ceil(0)
    const maxIndice = Math.floor(5)
    const numeroIndice = Math.floor(Math.random() * (maxIndice - minIndice + 1)) + minIndice
    return letras[numeroIndice]
}

// Gerando hexadecimal
const gerandoHexadecimal = () => {
    let hexadecimal = "#"
    const numeroAleatorio = gerandoNumeroAleatorio()
    const letraAleatoria = gerandoLetrasAleatorias()

    for (let i = 0; i < 3; i++){
        hexadecimal += `${numeroAleatorio}`
    }

    return hexadecimal
}

// Atribuindo hexadecimal no HTML
const alterandoHexadecimal = () => {
    btnGerar.addEventListener("click", () => {
        elementoHexadecimal.textContent = gerandoHexadecimal()
        mainContainer.style.backgroundColor = gerandoHexadecimal()
    })
}

alterandoHexadecimal()
gerandoLetrasAleatorias()