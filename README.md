# Desafio Amigo Secreto

Este é um projeto para a realização de sorteios de amigo secreto. Com ele, você pode adicionar nomes, visualizar a lista de participantes, e sortear as combinações de forma aleatória. O projeto foi desenvolvido com HTML, CSS e JavaScript.
![Amigo Secreto](./amigo-secreto.png)

## Índice

- <a href="#funcionalidades"> Funcionalidades</a>
- <a href="#estrutura-do-projeto"> Estrutura do Projeto</a>
- <a href="#como-executar-o-projeto"> Como Executar o Projeto</a>
- <a href="#exemplo-de-uso"> Exemplo de Uso</a>
- <a href="#tecnologias-utilizadas"> Tecnologias Utilizadas</a>
- <a href="#autor"> Autor</a>

## Funcionalidades

1. **Adicionar Participantes**

   - Insira nomes em um campo de texto e clique em "Adicionar" para incluir na lista.
   - Validação: se o campo estiver vazio, exibirá um alerta solicitando um nome válido.

2. **Visualizar Participantes**

   - Todos os nomes adicionados aparecem listados abaixo do campo de entrada.
   - Clique em um nome da lista para removê-lo.

3. **Sortear Amigo Secreto**

   - Clique no botão "Sortear Amigo" para gerar as combinações de amigo secreto de forma aleatória.
   - Um alerta é exibido caso não haja participantes suficientes para o sorteio (mínimo de 2).

4. **Reiniciar Sorteio**

   - Limpa a lista de participantes e os resultados do sorteio.

5. **Remover Duplicatas**
   - Garantia de que a lista não conterá nomes duplicados.

## Estrutura do Projeto

### HTML

O HTML fornece a estrutura básica do projeto, incluindo:

- Campo de texto para entrada dos nomes.
- Botões para adicionar participantes e sortear.
- Listas para exibição dos nomes e resultados do sorteio.

### CSS

O CSS define o estilo da aplicação, tornando-a visualmente atraente e responsiva.

### JavaScript

O JavaScript implementa as lógicas do sistema:

#### Funções principais:

- **adicionarAmigo()**: Adiciona um nome à lista e atualiza a interface.
- **sortearAmigo()**: Realiza o sorteio entre os participantes de forma aleatória e exibe os pares.
- **embaralhar(lista)**: Embaralha a lista de participantes usando o algoritmo Fisher-Yates.
- **reiniciarSorteio()**: Limpa a lista de participantes e resultados do sorteio.
- **excluirAmigo(index)**: Remove um participante ao clicar em seu nome na lista.
- **atualizarLista()**: Atualiza a exibição da lista de participantes na tela.

#### Funções auxiliares:

- **removerDuplicatas(array)**: Remove entradas duplicadas da lista.
- **embaralharArray(array)**: Embaralha qualquer array fornecido.

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Abra o arquivo `index.html` no navegador.

3. Adicione os participantes, realize o sorteio e visualize os resultados!

## Exemplo de Uso

1. Adicione os nomes "Ana", "Pedro" e "João".
2. Clique em "Sortear Amigo".
3. O resultado será algo como:
   ```
   Ana --> Pedro
   Pedro --> João
   João --> Ana
   ```
4. Clique em um nome para removê-lo da lista ou em "Reiniciar" para começar do zero.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Autor

Desenvolvido por [Manoel Santana](https://www.linkedin.com/in/manoelvsantana/)

[def]: -funcionalidade
