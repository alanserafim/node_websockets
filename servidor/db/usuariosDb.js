import criarHashESalSenha from "../utils/criarHashEsalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function cadastrarUsuario( { nome, senha }){
    const { hashSenha, salSenha } = criarHashESalSenha(senha)
    return usuariosColecao.insertOne({ nome, hashSenha, salSenha})
}

function encontrarUsuario(nome){
    return usuariosColecao.findOne({ nome })
}

export { cadastrarUsuario, encontrarUsuario }