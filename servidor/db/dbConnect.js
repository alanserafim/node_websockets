import { MongoClient } from "mongodb";
import 'dotenv/config';

const uri = process.env.DB_CONNECTION_STRING;

const cliente = new MongoClient(uri)

let documentosColecao;
let usuariosColecao;

try {
    await cliente.connect();
    const db = cliente.db("websockets")
    documentosColecao = db.collection("documentos")
    usuariosColecao = db.collection("usuarios")
    console.log("Conectado ao banco de dados com sucesso")
} catch (erro) {
    console.log(erro);
    
}

export { documentosColecao, usuariosColecao };