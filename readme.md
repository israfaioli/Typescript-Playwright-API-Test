Olá Analistas, desenvolvedores e recrutadores. Este readme irá apresentar a estrutura deste projeto Playwright com JavaScript de portfólio pessoal.
Meu conhecimento base foi oriundo do curso Playwright pela Udemy onde consegui aprender como realizar testes web e api rest utilizando playwright com javascript. Espero que vocês gostem ;)

* Projeto para fazer os testes automatizados APIREST
  - url dos endpoints utilizados para testes do K6: https://test-api.k6.io/

### Setup necessário ###


* Instalar o playwright

  ```
  npm init playwright@latest
  ```

### Estrutura do projeto ###

* tests - Local onde são armazenados todos as classes de testes.
* data - Local de armazenamento dos nossos JSONS utilizados para validação dos testes
* node_modules - pasta contendo os arquivos da instalação cypress
* .gitignore - lista de arquivos que serão ignorados pelo git
* .playwright-report - repositorio onde é armazenado nosso report HTML após execução dos testes 
* .playwright.config - arquivo de configuração geral do playwright (urlBase, browsers, timeouts....)
* .package.json - arquivo onde são encontrados nossas dependencias instaladas para uso no projeto, dados do projeto e scripts configurados para execução

### Rodando o projeto ###

* Acessa a pasta do projeto
* Rode todas as suites de testes com GUI interface:

```
npm run test
```

* Rode em modo UI:

```
npx playwright test --ui
```

* Rode todas as suites de testes em modo headless:

```
npm run test-headless
```

* Rodar um arquivo de teste especifico:

```
npx playwright test tests/${NOME_ARQUIVO}.spec.js
```

### Gerando report HTML ###

* Executar o comando abaixo após execução da suíte dos testes:

```
npx playwright show-report
```

### Repositório github ###

* Consulte meu repositório de diversos projetos no github através da url

```
https://github.com/israfaioli?tab=repositories
```