import 'dotenv/config';
import io from "./servidor.js";
import registrarEventosinicio from './registrarEventos/inicio.js';
import registrarEventosDocumento from './registrarEventos/documento.js';
import registrarEventosCadastro from './registrarEventos/cadastro.js';
import { registrarEventosLogin } from './registrarEventos/login.js';

io.on("connection", (socket) => {
  registrarEventosinicio(socket, io)
  registrarEventosDocumento(socket, io)
  registrarEventosLogin(socket, io)
  registrarEventosCadastro(socket, io)
});

