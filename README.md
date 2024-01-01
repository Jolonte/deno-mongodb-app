# Deno APP

![image](https://github.com/viniciusnevescosta/deno-app/assets/66970818/57a0f048-66cf-44d5-8308-a55c72716a80)

Bem-vindo ao repositório do meu projeto de sistema de controle de estoque! Aqui, desenvolvi uma API Restful para gerenciar inventários, utilizando as tecnologias Mongoose, Express e DenoJs.

- [Read in english](en_README.md)

## Sumário de Conteúdos

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Testar](#como-testar)
- [Aprendizados Adquiridos](#aprendizados-adquiridos)

## Visão Geral

Este projeto é parte da minha jornada de aprendizado, onde explorei a criação de uma API eficiente para o controle de estoque. Utilizei o Mongoose como ODM (Object Data Modeling) para interagir com o banco de dados, o Express como framework web e o DenoJs para proporcionar uma experiência moderna e segura.

- Consulte a [documentação da API (pt-br)](https://github.com/viniciusnevescosta/deno-app/wiki/API-Documentation).

## Tecnologias Utilizadas

- **Mongoose:** Um ODM que proporciona uma modelagem de dados simples e baseada em objetos para o MongoDB.
- **Express:** Um framework web para Node.js que simplifica a criação de APIs RESTful.
- **DenoJs:** Um ambiente de execução seguro para JavaScript e TypeScript.

## Funcionalidades

1. **Cadastro de Produtos:**
   - Adicione novos produtos ao inventário, especificando detalhes como nome, quantidade e descrição.

2. **Consulta de Produtos:**
   - Recupere informações detalhadas sobre os produtos existentes por meio de consultas à API.

3. **Atualização de Estoque:**
   - Atualize a quantidade disponível de cada produto à medida que ocorrem entradas ou saídas.

4. **Remoção de Produtos:**
   - Exclua produtos que não estão mais no estoque, mantendo o inventário organizado.

## Como Testar

### Online

- [Deploy](https://inventory-management-app.deno.dev/)

### Localmente

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/viniciusnevescosta/deno-app.git
   ```

2. **Instale as Dependências:**
   ```bash
   cd deno-app
   deno install
   ```

3. **Configure o Ambiente:**
   - Crie um arquivo `.env` na raiz do projeto e forneça as variáveis de ambiente necessárias, como a conexão com o banco de dados MongoDB.<br><br>
   ```env
   DB_USER=seu_usuario_mongodb
   DB_PASSWORD=sua_senha_mongodb
   ```
   
4. **Execute a Aplicação:**
   ```bash
   npm start
   ```

5. **Explore a API:**
   - Navegue para `http://localhost:3000` e utilize as rotas definidas para interagir com a API.

## Aprendizados Adquiridos

Durante o desenvolvimento deste projeto, adquiri conhecimentos essenciais, incluindo:

- 🔄 Integração eficaz entre Mongoose, Express e DenoJs para criar uma API Restful.
- 🛢 Manipulação de dados no MongoDB, utilizando o Mongoose para modelagem de objetos.
- 🚀 Uso do DenoJs como uma alternativa segura e moderna para ambientes de execução JavaScript.

---

**Nota:** Este projeto foi arquivado pois representa um estudo concluído com sucesso. Não há planos de desenvolvimento adicional, pois seus objetivos foram alcançados com êxito.
