import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados)
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirCookie("tokenJwt",tokenJwt)
    alert("Login realizado com sucesso!")
    window.location.href = "/"
})
socket.on("autenticacao_erro", () => alert("Usuário ou senha incorretos."))


export { emitirAutenticarUsuario };