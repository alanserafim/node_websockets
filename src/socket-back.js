import io from "./servidor.js"

const documentos = [
    {
      nome: "JavaScript",
      texto: "texto de javascript...",
    },
    {
      nome: "Node",
      texto: "texto de node...",
    },
    {
      nome: "Socket.io",
      texto: "texto de socket.io...",
    },
  ];

io.on("connection", (socket) => {

    console.log("um cliente se conectou.", socket.id)

    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {

        const documento = encontrarDocumento(nomeDocumento);

        if (documento) {
            //socket.emit("texto_documento", documento.texto);
            devolverTexto(documento.texto)
        }
    })

    socket.on("texto_editor", ({texto, nomeDocumento}) => {
        const documento = encontrarDocumento(nomeDocumento);
        if(documento) {
            documento.texto = texto;
            //socket.broadcast.emit("texto_editor_clientes", texto)
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto)
        }
    })

    function encontrarDocumento(nome) {
        const documento = documentos.find((documento) => {
          return documento.nome === nome;
        });
        return documento;
      }

})

