import 'dotenv/config';
import io from "./servidor.js";
import registrarEventosinicio from './registrarEventos/registrarEventosInicio.js';
import registrarEventosDocumento from './registrarEventos/registratEventosDocumento.js';

io.on("connection", (socket) => {
  registrarEventosinicio(socket, io)
  registrarEventosDocumento(socket, io)

});

