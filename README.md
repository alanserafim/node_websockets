# node_websockets
Implementação do protocolo WebSockets em Node.js utilizando socket.io, express e mongoDB.
A aplicação cria documentos de texto compartilhados em tempo real entre diferentes usuários.

### Assuntos tratados
* Diferenciar o protocolo HTTP do WebSockets
* Criar um servidor Socket.IO com Express e conectar um cliente
* Emitindo eventos
* Exibindo eventos em tempo real.
* Agrupar clientes em salas do Socket.IO
* Emitir eventos para uma sala específica
* Fluxo de criação de clusters, databases e documentos no mongoDB Atlas
* Atualizar diferentes páginas a partir do mesmo evento
* Criar, consultar, alterar e excluir documentos compartilhados.
* Estrutura da aplicação



### Referências

* [Documentação do Socket.io](https://socket.io/)
* [WebSockets MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API)
* [Detalhes do método emit - envio de dados](https://socket.io/docs/v4/emitting-events/)
* [Instância do socket no lado do servidor](https://socket.io/docs/v4/server-socket-instance/#disconnect)
* [Instância do socket no lado do cliente](https://socket.io/docs/v4/client-socket-instance/#disconnect)
* [Salas (Rooms) do socket.io](https://socket.io/docs/v4/rooms/)
* [Emit cheatsheet](https://socket.io/docs/v4/emit-cheatsheet/)
* [Driver de conexão MongoDB](https://www.mongodb.com/pt-br/docs/drivers/)
* [Cursor MongoDB](https://www.mongodb.com/pt-br/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/)
* [Cookies](https://www.alura.com.br/artigos/o-que-sao-cookies-como-funcionam?utm_source=gnarus&utm_medium=timeline)
* [Estrutura Socket.io](https://socket.io/docs/v4/server-application-structure/)