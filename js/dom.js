// dom.jss
export function obterTextoTarefa() {
    const input = document.querySelector("#input-tarefa");
    return input.value;
}

// Função para limpar o campo do input após adicionar uma tarefa
export function limparInput() {
    const input = document.querySelector("#input-tarefa");
    input.value = "";
    input.focus();
}

// Função para renderizar a lista de tarefas no DOM
export function renderizarTarefas(tarefas) {
    const lista = document.querySelector("#lista-tarefas")
    lista.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const li = document.createElement("li");
        li.textContent = tarefa.texto;
    
        if (tarefa.concluida) {
        li.style.textDecoration = "line-trough";
        li.style.opacity = "0.6"    
        }
    
lista.appendChild(li);
});
}

// Função para adicionar uma nova tarefa à lista de tarefas no DOM
export function adicionarTarefaNalista(texto) {
    const lista = document.querySelector("#lista-tarefas");

    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);
}


// Função para exibir mensagens de validação ou sucesso para o usuàrio
export function exibirMensagem(mensagem, tipo) {
    let areaMensagem = document.querySelector("#mensagem");

    if (!areaMensagem) {
        areaMensagem = document.createElement("p")
        areaMensagem.id = "mensagem"
        document.body.insertBefore(areaMensagem, document.querySelector("#lista-tarefas"))
    }

    areaMensagem.textContent = mensagem;

    if (tipo === "error") {
     areaMensagem.style.color = "red";    
    } else {
       areaMensagem.style.color = "green";    
    }
    
}

// Função exibir dados da API
export function exibirDica(dica) {
    let areaDica = document.createElement("#dica");
    if (!areaDica) {
        areaDica = document.createElement("p");
        areaDica.id = "dica";
        document.body.appendChild(areaDica);
    }

    if (dica) {
        areaDica.textContent = `💡 Dica do dia: ${dica}`;
    } else {
        areaDica.textContent = `⚠️ não foi possivel carregar dica`
    }

}