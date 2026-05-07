import {
    obterTextoTarefa,
    limparInput,
    adicionarTarefaNalista,
} from "./dom.js";

const form = document.querySelector("#form-tarefa");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = obterTextoTarefa();

    adicionarTarefaNalista(texto);
    limparInput();
});