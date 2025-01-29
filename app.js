let listaAmigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
  let nomeInput = document.getElementById('amigo');
  let listaNomes = document.getElementById('listaAmigos');

  if (nomeInput.value.trim() === '') {
    alert('Por favor, insira um nome válido!');
    return;
  }

  listaAmigos.push(nomeInput.value);
  atualizarLista();
  nomeInput.value = '';
}

// Função para sortear os amigos
function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert('Adicione pelo menos dois amigos para realizar o sorteio!');
    return;
  }

  embaralharArray(listaAmigos);
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  listaAmigos.forEach((amigo, index) => {
    let proximo =
      index === listaAmigos.length - 1
        ? listaAmigos[0]
        : listaAmigos[index + 1];
    resultado.innerHTML += `<li>${amigo} → ${proximo}</li>`;
  });
}

// Função para embaralhar o array
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  let listaNomes = document.getElementById('listaAmigos');
  listaNomes.innerHTML = '';

  listaAmigos.forEach((amigo, index) => {
    let item = document.createElement('li');
    item.textContent = amigo;
    item.style.cursor = 'pointer';

    // Adiciona funcionalidade para excluir ao clicar no nome
    item.addEventListener('click', () => {
      excluirAmigo(index);
    });

    listaNomes.appendChild(item);
  });
}

// Função para excluir um amigo da lista
function excluirAmigo(index) {
  listaAmigos.splice(index, 1);
  atualizarLista();
  document.getElementById('resultado').innerHTML = '';
}

// Função para reiniciar toda a lista e o sorteio
function reiniciar() {
  listaAmigos = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}
