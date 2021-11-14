# Posts

Aplicação com MEAN Stack para a matéria WEB03 Angular - UTFPR Especialização em Desenvolvimento Web Com Frameworks Modernos

## Requisitos
* Node 12|14
* VS Code
    * Extensão "Remote - Containers" da Microsoft
    * Extensão "Debugger for Firefox" da Firefox DevTools
* Docker. Instruções: https://docs.docker.com/engine/install/debian/
* (Linux) Adicionar seu usuário ao grupo `docker`: https://docs.docker.com/engine/install/linux-postinstall/
    * necessário para VS Code Dev Containers
    * você saberá que está funcionando quando conseguir executar o comando `docker run hello-world` dentro do Terminal do VS Code, obtendo output "Hello from Docker!"
* Docker Compose. Instruções: https://docs.docker.com/compose/install/
    * você saberá que está funcionando quando conseguir executar o comando `docker-compose --version` dentro do Terminal do VS Code, obtendo o número de versão do Docker Compose


## Execução
* No terminal, navegar para a pasta desejada e executar: 
    * `git clone https://github.com/maiconm/posts.git`
    * `code posts`
* No VS Code: 
    * `F1`, `Remote-Containers: Rebuild and Reopen in Container`
* No terminal do VS Code, dentro do Container, executar:
    * `npm i`
* No VS Code, na aba da extensão do MongoDB, clicar em `Connect` e colar a seguinte URL:
    * `mongodb://posts_devcontainer_db_1:27017`
* Abrir `db/users.mongodb` e clicar no "play" no canto superior direito;
* Abrir `db/posts.mongodb` e clicar no "play" no canto superior direito;
* No terminal, executar `npm start`;
* Abrir navegador no `localhost:4200`;

* Logins disponíveis:
    * Login: `admin`
    * Senha: `admin`
    * Login: `teste`
    * Senha: `teste`
