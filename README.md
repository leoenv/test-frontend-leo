## Abrindo o projeto (Baseado no uso do VS Code)

1. Baixar o projeto
2. Abrir VS Code 
3. Clicar em "File"
4. Clicar em "Open Folder"
5. Selecinar a pasta raiz do projeto
6. Clicar em "OK"

## Tecnologias utilizadas no projeto

- NodeJS (https://nodejs.org/en/download);
- Cypress 11.0.0 (comando para instalação no terminal: "npm install cypress@^11.2.0 -save-dev");
- Biblioteca Cypress real events (comando para instalação no terminal: "npm install cypress-real-events");
- IDE de desenvolvimento (Sugestão) - VS Code (https://code.visualstudio.com/download).

## Arquitetura:

A arquitetura padrão é composta por:
 
- `e2e`: Pacote que contém os arquivos de testes;
- `support`: Pacote que contém os arquivos auxiliares e de suporte ao teste;
    - **pages:** Pacote contendo arquivos com elementos e comandos de ação das respectivas páginas para auxílio dos testes.

## Executando testes através do Cypress:
Para rodar os testes, siga os seguintes passos:
- Abra o terminal;
- Digite o comando "npx cypress open";
- Selecionar "E2E Testing";
- Selecionar o navegador a ser utilizado no teste;
- Clicar no botão "Start E2E Testing in Chrome";
- Selecionar o arquivo de teste desejado (Exemplo: "vrcartao.spec.js") e aguardar a execução.