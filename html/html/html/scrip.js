// Função que busca os dados do backend e os exibe na tela 
function buscarDados() { 
    console.log("Buscando os dados..."); // Só pra ver se tá chamando a função 
 
    fetch('http://127.0.0.1:8000/dados') 
        .then(response => response.json()) // Converte a resposta para JSON 
        .then(data => { 
            const listaDeDados = document.getElementById("lista-dados");   
            listaDeDados.innerHTML = ""; // Limpa a lista antes de adicionar os itens 
 
            // Percorre os dados recebidos e adiciona cada um na lista 
            data.forEach(item => { 
                let novoItem = document.createElement("li"); 
                novoItem.textContent = item; 
                listaDeDados.appendChild(novoItem); 
            }); 
 
            console.log("Dados carregados com sucesso!"); // Verificação no console 
        }) 
        .catch(error => console.error("Erro ao buscar dados:", error)); 
} 
