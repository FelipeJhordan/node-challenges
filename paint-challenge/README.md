# Paint-challenge
## Premissa 
#### O que deve ser desenvolvido
Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

#### Regras de negócio

Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas podem possuir alturas e larguras diferentes
O total de área das portas e janelas deve ser no máximo 50% da área de parede
A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
Cada janela possui as medidas: 2,00 x 1,20 mtos
Cada porta possui as medidas: 0,80 x 1,90
Cada litro de tinta é capaz de pintar 5 metros quadrados
Não considerar teto nem piso.
As variações de tamanho das latas de tinta são:

- 0,5 L
- 2,5 L
- 3,6 L
- 18 L

## Requisitos
- Node (v14.6* >)
- NPM (em algumas instalações já vem com Node)
- Docker ( caso queira criar uma image e um container do app )
- Git ( caso queira utilizar o git clone)

## Como executar
### Via docker (dentro do diretório do projeto)
- docker build -t desafio .    (criar imagem )
- docker run -d -p 3333:3333 desafio   (criar container)

### Via manual
- npm install
- npm run build
- npm run start:prod

## Como testar
### unitários
- npm run test
### e2e
- npm run test:e2e

## Tecnologias utilizadas
### Ambiente e utilitários
- Windows
- Visual Studio Code
- Postman
- Google Chrone
### Libs/Frameworks
- Express ( Node back-end)
- typescript/ts-node/ts-node-dev 
- joi ( validar entradas)
- jest/supertest ( testes unitários e e2e)
- prettier/lint
- helmet/compression/express-rate-limit
- Bootstrap 5  ( via CDN no index.html)
- Jquery ( Via CDN )

## Motivação da escolha de Tecnologias
Eu escolhi utilizar express, pois  é uma tecnologia node ( vaga no qual estou candidatando ), bastante flexível e simples ao mesmo tempo, onde você vai montando sua aplicação como um quebra-cabeças, ao contrário de tecnologias como NestJS e AdonisJs, pois são super robustas e com muita biblioteca integrada.
Foi criado um arquivo estático html, que é servido pelo express, SEM* a utilização de um template engine, pois não é necessário ser dinâmico.
Foi utilizado o fluxo git-flow em todas etapas de desenvolvimento, menos na parte final ( deploy pro vercel ).

## Como foi desenvolvido
1. Criação de setup inicial ( typescript, lint, jest)
2. Criação da organização de arquivos ( tentando seguir uma arquitetura análoga a clean-arch )
3. Criação de testes unitários e desenvolvimento de usecases
4. Criação do teste de integração
5. Criação do template e configuração final do projeto

## Como testar com Postman
### POST /paint
#### Body
```{
    "backWall": {
        "height": 4,
        "width": 2,
        "windows": 0,
        "doors": 0
    },
    "frontWall": {
        "height": 4,
        "width": 2,
        "windows": 0,
        "doors": 0
    },
    "leftWall":{
        "height": 3,
        "width": 4,
        "windows": 0,
        "doors": 0
    },
    "rightWall":{
        "height": 3,
        "width": 4,
        "windows": 0,
        "doors": 0
    }
}
```
### Resposta esperada 
```
{
    "paints": [
        {
            "quantity": 2,
            "type": 3.6
        },
        {
            "quantity": 1,
            "type": 0.5
        }
    ],
    "message": "Ainda irá faltar 1.50 metros quadrados para preencher totalmente as paredes."
}
```

## imagem
![Alt text](docs/screenshots/print.PNG?raw=true "Title")


