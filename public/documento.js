import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto")

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const botaoExcluir = document.getElementById("excluir-documento")

const tituloDocumento = document.getElementById("titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textoEditor.value, 
        nomeDocumento
    })
});

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento)
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto
}

function alertarERedirecionar(nome){
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} excluído!`);
        window.location.href = "/"
    }
}
    

export { atualizaTextoEditor, alertarERedirecionar }