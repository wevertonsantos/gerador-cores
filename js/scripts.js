// DOM
const $ = document

// Container
const mainContainer = $.querySelector("#main-container")

// Elemento Hexadecimal
const elementoHexadecimal = $.querySelector("#hexadecimal")

// BTN - gerar
const btnGerar = $.querySelector("#btn-gerar")

// Gerando hexadecimal
const gerandoHexadecimal = () => {
    const hexadecimal = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

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