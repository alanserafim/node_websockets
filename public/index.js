import { emitirAdcionarDocumento } from "./socket-front-index.js"

const listaDocumentos = document.getElementById("lista-documentos")
const form = document.getElementById("form-adiciona-documento")
const inputDocumento = document.getElementById("input-documento")

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdcionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
})

function inserLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
   <a
      href="/documento/index.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
`;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`)
  listaDocumentos.removeChild(documento);
}

export { inserLinkDocumento, removerLinkDocumento }