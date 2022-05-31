# Desafio

Criar o um endpoint que busca um cep via web-scraping

## Requisitos:

### Rotas da aplicação:

- Rota base https://web-scrapping-correios-felipe.herokuapp.com/api/v1
- <b>[GET] </b> /location/:cep : A rota deverá informas informações sobre o cep fornecido<br><br>

## Techs:

- Express
- Puppeter
- Eslint/Prettier
- Jest
- tsyringe (ioc)
- Typescript

## Como/Por que foi feito

### Texto longo O desafio foi realizado para melhorar algumas habilidades, melhorar o portifólio e estudar alguns conceitos.

Foi utilizado o framework Express como principal do projeto, a príncipio eu gostaria de utilizar o restify ( nunca utilizei ), porém eu acabei por optar pelo express mesmo.
Estruturei o projeto tentando seguir o o clean arch, onde cada camada é isolada e que grande parte das classes só dependam de interfaces (abstração) e não de outras classes concretas..
Também utilizei o tsyringe, um framework que permite você injetar depêndencia, e que fica muito poderoso alinhado a "inversão" de depêndencia.
A biblioteca utilizada para fazer o web-scraping foi o puppeteer, e não tive nenhum problema em utilizar, mesmo sendo a primeira vez que eu experimento alguma lib do tipo.
Vale salientar que as camadas de presentation/usecase foram testadas e criadas com tdd. ( Poderia testar os adapter porém fiquei devendo...)

## Texto resumido

- Foi utilizado Clean Arch
- Express
- Pattern Adapter
- Injeção de depêndencia e também Inversão de depêndencia. ( de forma manual )
- TDD

## Como executar

- npm install
- npm run start:dev

## Link

Foi feito o deploy da aplicação para a plataforma heroku. https://web-scrapping-correios-felipe.herokuapp.com/api/v1

## Links uteis

- https://elements.heroku.com/buildpacks/jontewks/puppeteer-heroku-buildpack

# Comunidade DevChallenge

Site: https://www.devchallenge.com.br/ <br>
Discord: https://discord.gg/yvYXhGj <br>
Linkedin: https://www.linkedin.com/company/devchallenge/<br>
Twitter: https://twitter.com/dev_challenge<br>
Instagram: https://www.instagram.com/devchallenge/<br>
