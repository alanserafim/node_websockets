import 'dotenv/config';
import io from "./servidor.js";
import registrarEventosinicio from './registrarEventos/inicio.js';
import registrarEventosDocumento from './registrarEventos/documento.js';
import registrarEventosCadastro from './registrarEventos/cadastro.js';
import { registrarEventosLogin } from './registrarEventos/login.js';
import autorizarUsuario from './middlewares/autorizarUsuario.js';

const nspUsuarios = io.of("/usuarios")

nspUsuarios.use(autorizarUsuario)

nspUsuarios.on("connection", (socket) => {
  registrarEventosinicio(socket, nspUsuarios)
  registrarEventosDocumento(socket, nspUsuarios)
});

io.of("/").on("connection", (socket) => {
  registrarEventosLogin(socket, io)
  registrarEventosCadastro(socket, io)
});

