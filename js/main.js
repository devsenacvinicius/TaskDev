// importando funções do módulo DOM
import {
    obterTextoTarefa,
    limparInput,
    renderizarTarefas,
    exibirMensagem,
    exibirDica,
} from "./dom.js";

// Importando funções do módulo Tarefas
import { validarTarefa, adicionarTarefa, obterTarefas } from "./tarefas.js";

// importando função para buscar dica 
import { buscarDica } from "./api.js";

// Selecionar o formulario para adicionar um evento de submit
const form = document.querySelector("#form-tarefa");

// Função para iniciar a aplicação, buscando uma dica e exibindo-a
async function iniciarAplicacao() {
    const dica = await buscarDica();
    exibirDica(dica);
}

// Evento de submit para adicionar uma nova tarefa
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = obterTextoTarefa();
    const resultado = validarTarefa(texto);

    if (!resultado.valida) {
        exibirMensagem(resultado.mensagem, "error");
        return;
    }

    adicionarTarefa(texto);
    renderizarTarefas(obterTarefas());
    exibirMensagem("Tarefa adicionada com sucesso!", "sucesso");
    limparInput();

});
// iniciar aplicação ao carregar a pagina
iniciarAplicacao();