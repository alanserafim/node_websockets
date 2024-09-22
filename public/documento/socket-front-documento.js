import { obterCookie } from "../utils/cookies.js";
import { atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso, atualizaInterfaceUsuarios} from "./documento.js";

const socket = io("/usuarios", {
    auth: {
        token: obterCookie("tokenJwt")
    }
});

socket.on("connect_error", (erro)=>{
    alert(erro)
    window.location.href = "/login/index.html"
})

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso)

function selecionarDocumento(dadosEntrada){
    socket.emit("selecionar_documento", dadosEntrada, (texto) => {
        atualizaTextoEditor(texto);
    })
}

socket.on("usuarios_no_documento", atualizaInterfaceUsuarios)

function emitirTextoEditor(dados){
    socket.emit("texto_editor", dados)
}

function emitirExcluirDocumento(nome){
    socket.emit("excluir_documento", nome)
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

socket.on("excluir_documento_sucesso", (nome) => {
   alertarERedirecionar(nome); 
})

socket.on("usuario_ja_no_documento", () => {
    alert("Documento já aberto em outra página")
    window.location.href = "/"
})


export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento }