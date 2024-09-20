import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto")

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const botaoExcluir = document.getElementById("excluir-documento")
const listaUsuariosConectados = document.getElementById("usuarios-conectados")

const tituloDocumento = document.getElementById("titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem título";


function tratarAutorizacaoSucesso(payloadToken){
    selecionarDocumento({ nomeDocumento, nomeUsuario: payloadToken.nomeUsuario });
}

function atualizaInterfaceUsuarios(usuariosNoDocumento){
    listaUsuariosConectados.innerHTML = ""

    usuariosNoDocumento.forEach((usuario) => {
        listaUsuariosConectados.innerHTML += `
        <li class="list-group-item">${usuario}</li>
        `
    })

}

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


export { atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso, atualizaInterfaceUsuarios }