# Quiz Interativo com Cronômetro em React Native

Este é um projeto simples de um quiz interativo desenvolvido em React Native. Ele permite que os usuários respondam a uma série de perguntas e, ao final, visualizem sua pontuação. Uma funcionalidade adicional implementada é a possibilidade de o usuário definir um tempo limite para a partida. Após o cronômetro zerar, o quiz é finalizado e a tela de resultados é exibida automaticamente.

## Estrutura do Projeto

* `.expo/`: Diretório com arquivos de configuração e cache do Expo.
* `assets/`: Diretório para armazenar recursos como imagens e fontes (atualmente não utilizado neste projeto base).
* `components/`: Contém componentes reutilizáveis da aplicação.
    * `Perguntas.js`: Arquivo que deve conter um array de objetos representando as perguntas do quiz, cada objeto com `enunciado`, `opcoes` (um array de strings), e `respostaCerta` (o índice da opção correta).
* `node_modules/`: Contém os pacotes e dependências instalados via npm ou yarn.
* `.gitignore`: Especifica arquivos e diretórios que o Git deve ignorar.
* `App.js`: O ponto de entrada principal da aplicação React Native, contendo a lógica e a interface do quiz.
* `app.json`: Arquivo de configuração do aplicativo Expo.
* `index.js`: Ponto de entrada para o React Native.
* `package-lock.json`: Registra as versões exatas das dependências instaladas.
* `package.json`: Contém informações sobre o projeto, scripts e dependências.
* `README.md`: Este arquivo, que fornece uma descrição do projeto.

## Funcionalidades

* **Interface de Perguntas:** Exibe uma pergunta por vez com suas opções de resposta.
* **Seleção de Resposta:** Permite que o usuário selecione uma das opções como resposta.
* **Feedback Visual:** Indica se a resposta selecionada estava correta ou incorreta após a seleção.
* **Contagem de Pontuação:** Mantém o controle do número de respostas corretas.
* **Tela de Resultado:** Exibe a pontuação final do usuário ao final do quiz.
* **Reiniciar Quiz:** Permite que o usuário inicie o quiz novamente.
* **Definição de Tempo:** O usuário pode inserir um tempo limite em segundos para a partida antes de iniciar o quiz.
* **Cronômetro:** Exibe o tempo restante da partida em tempo real.
* **Finalização Automática por Tempo:** Se o tempo definido pelo usuário se esgotar, o quiz é automaticamente finalizado e a tela de resultados é mostrada.
* **Bloqueio de Respostas:** Impede que o usuário responda após o tempo acabar ou após já ter selecionado uma resposta para a pergunta atual (por um breve período).

## Pré-requisitos

Certifique-se de ter o ambiente de desenvolvimento do React Native configurado em sua máquina. Isso geralmente inclui:

* **Node.js:** Versão LTS recomendada.
* **npm** ou **yarn:** Gerenciadores de pacotes.
* **Expo CLI:** Instalado globalmente (`npm install -g expo-cli` ou `yarn global add expo-cli`).
* Um emulador iOS/Android ou um dispositivo físico para executar o aplicativo.

## Como Executar o Projeto

1.  **Clone o repositório (se aplicável):**
    ```bash
    git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
    cd [nome do seu repositório]
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o aplicativo com Expo:**
    ```bash
    npx expo start
    # ou
    yarn start
    ```

    Isso abrirá o Expo Developer Tools no seu navegador. Você pode então executar o aplicativo no seu emulador ou dispositivo físico utilizando o QR code ou as opções fornecidas.

## Como Usar

1.  Ao iniciar o aplicativo, você verá uma tela para definir o tempo da partida em segundos.
2.  Insira o tempo desejado e clique em "Iniciar Partida".
3.  O cronômetro começará a contagem regressiva e a primeira pergunta será exibida com suas opções.
4.  Selecione a sua resposta clicando em uma das opções. Um feedback visual indicará se a resposta estava correta ou incorreta.
5.  Após um breve período, a próxima pergunta será carregada.
6.  Continue respondendo às perguntas até que todas as perguntas sejam exibidas ou o tempo se esgote.
7.  Ao final do quiz (seja por completar todas as perguntas ou pelo tempo acabar), uma tela com a sua pontuação final será mostrada.
8.  Você pode clicar no botão "Reiniciar Quiz" para jogar novamente.

## Próximos Passos e Melhorias

* Adicionar mais perguntas e categorias.
* Implementar um sistema de pontuação mais elaborado.
* Melhorar a interface do usuário e a experiência do usuário (UX).
* Persistir a pontuação do usuário.
* Adicionar animações e transições.
* Implementar diferentes modos de jogo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs ou sugerir melhorias, ou enviar pull requests com suas modificações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).