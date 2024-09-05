import { inserLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach((documento) => {
        inserLinkDocumento(documento.nome)
    });
})

function emitirAdcionarDocumento(nome){
    socket.emit("adicionar_documento", nome)
}

socket.on("adicionar_documento_interface", (nome)=>{
    inserLinkDocumento(nome)
})

socket.on("documento_existente", (nome)=>{
    alert(`O documento ${nome} já existe!`)
})

socket.on("excluir_documento_sucesso", (nome) => {
    removerLinkDocumento(nome)
})

export { emitirAdcionarDocumento }