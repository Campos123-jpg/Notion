# API REST - Adoção de Animais

API simples em Node.js + Express para gerenciar animais disponíveis para adoção.
Os dados são armazenados em um arquivo `animais.json` (sem banco de dados).

## Como rodar o projeto

1. Instale o [Node.js](https://nodejs.org/) (se ainda não tiver).
2. Abra o terminal dentro da pasta do projeto.
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor:
   ```
   npm start
   ```
   ou
   ```
   node server.js
   ```
5. O servidor vai rodar em: `http://localhost:3000`

## Estrutura dos dados (animais.json)

Cada animal tem os campos:
- `id` (texto, gerado automaticamente)
- `tipo` (texto: "cachorro" ou "gato")
- `raca` (texto)
- `caracteristicas` (texto)

## Endpoints da API

| Método | Rota            | Descrição                              |
|--------|-----------------|-----------------------------------------|
| GET    | /animais        | Lista todos os animais                  |
| GET    | /animais/:id    | Busca um animal específico pelo id      |
| POST   | /animais        | Adiciona um novo animal                 |
| PUT    | /animais/:id    | Atualiza um animal existente            |
| DELETE | /animais/:id    | Remove um animal pelo id                |

### Exemplo de corpo (body) para POST e PUT

No Postman, na aba **Body**, escolha **raw** e formato **JSON**, e envie algo assim:

```json
{
  "tipo": "cachorro",
  "raca": "Poodle",
  "caracteristicas": "Muito inteligente e ativo"
}
```

Validações aplicadas:
- `tipo` é obrigatório e deve ser "cachorro" ou "gato"
- `raca` é obrigatório e deve ser texto não vazio
- `caracteristicas` é obrigatório e deve ser texto não vazio

Se algum campo estiver errado ou faltando, a API responde com status `400` e uma
lista de erros explicando o problema.

## Como testar cada rota no Postman

1. Abra o Postman e crie uma nova "Collection" chamada, por exemplo, "Adoção de Animais".
2. Crie uma requisição para cada rota abaixo, execute e tire um print do resultado
   (status da resposta + corpo da resposta).

### 1. GET - Listar todos
- Método: `GET`
- URL: `http://localhost:3000/animais`
- Não precisa de Body.
- Resultado esperado: status `200` e a lista de animais em JSON.

### 2. GET - Buscar por id
- Método: `GET`
- URL: `http://localhost:3000/animais/1`
- Resultado esperado: status `200` e os dados do animal com id 1.
- Teste também um id que não existe (ex: `/animais/999`) para ver o status `404`.

### 3. POST - Adicionar
- Método: `POST`
- URL: `http://localhost:3000/animais`
- Body > raw > JSON:
  ```json
  {
    "tipo": "gato",
    "raca": "Persa",
    "caracteristicas": "Muito peludo e calmo"
  }
  ```
- Resultado esperado: status `201` e o novo animal criado (com id gerado).
- Teste também enviando um body incompleto (ex: sem "raca") para ver o erro `400`.

### 4. PUT - Atualizar
- Método: `PUT`
- URL: `http://localhost:3000/animais/1` (troque 1 pelo id que quiser atualizar)
- Body > raw > JSON:
  ```json
  {
    "tipo": "cachorro",
    "raca": "Labrador",
    "caracteristicas": "Atualizado: adora água e brincar no parque"
  }
  ```
- Resultado esperado: status `200` e os dados atualizados.

### 5. DELETE - Excluir
- Método: `DELETE`
- URL: `http://localhost:3000/animais/1` (troque pelo id que quiser remover)
- Resultado esperado: status `200` e uma mensagem confirmando a remoção.

## Sobre o CORS

O middleware `cors` está habilitado globalmente (`app.use(cors())`), então
qualquer domínio (ex: um front-end React, Vue, ou app mobile) pode consumir
esta API sem bloqueio de CORS.
