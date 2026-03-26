<h1 align="center">📦 Sistema de Controle de Estoque</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.3.0-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />
</p>

Uma API RESTful desenvolvida em **Java** e **Spring Boot** para o gerenciamento de inventário e produtos, operando com banco de dados **PostgreSQL** via Docker. Ideal para gerenciar níveis de estoque com estabilidade e facilidade.

---

## 🚀 Tecnologias e Ferramentas Livres
- **Linguagem:** Java 17
- **Framework Ouro:** Spring Boot 3.3.0
- **Persistência de Dados:** Spring Data JPA + Hibernate
- **Banco de Dados:** PostgreSQL 15 (Em ambiente Docker Isolado)
- **Documentação de API:** Swagger / OpenAPI
- **Gerenciador de Dependências:** Maven

---

## 🛠️ Como preparar o ambiente?

### 1. Requisitos na sua máquina
Para rodar este projeto, as únicas ferramentas exigidas no seu ambiente de desenvolvimento são:
- [Java 17 JDK](https://adoptium.net/) instalado
- Seu editor de código favorito (IntelliJ IDEA, Eclipse ou VSCode)
- [Docker](https://www.docker.com/products/docker-desktop) rodando. 

### 2. Iniciar o Banco de Dados (PostgreSQL)
Antes de iniciar a aplicação, você precisa levantar o contêiner do banco de dados e o painel administrativo. Pelo terminal (na pasta raiz onde o `docker-compose.yml` está), rode o seguinte comando:

```bash
docker-compose up -d
```
> Isso subirá imediatamente um *PostgreSQL* operando na porta **5432** e também a interface visual do banco (pgAdmin) na porta **5050**.

### 3. Rodar a Aplicação Spring
Após confirmar que o Docker subiu as dependências em background:
1. Abra o projeto na sua IDE favorita (**IntelliJ**, por exemplo).
2. Aguarde a sincronização rápida do **Maven** baixar as bibliotecas necessárias.
3. Pressione o botão `Run` na classe principal (ex: `EstoqueApplication`).

A aplicação irá inicializar e o framework **Hibernate** encarregará-se de criar ou atualizar automaticamente a tabela `produtos` no seu banco de dados Postgres!

---

## 🔗 Links e Acessos Importantes

Como o projeto integra API local (porta 8083) com serviços do Docker, aqui estão seus canais de acesso:

| Serviço | Link / URL | Usuário Padrão | Senha Padrão |
| --- | --- | --- | --- |
| ⚡ **Swagger (Interface da API)** | [http://localhost:8083/swagger-ui/index.html](http://localhost:8083/swagger-ui/index.html) | - | - |
| 🗄️ **Painel pgAdmin Web** | [http://localhost:5050](http://localhost:5050) |

Caso conecte algum app de terceiros (DBeaver, DataGrip) diretamente, utilize as seguintes credenciais internas do banco:
- **Host**: `localhost` (para apps do Windows) ou `postgres` (se dentro do pgAadmin do Docker)
- **Porta**: `5432`
- **Database**: `estoquedb`
- **Username**: `admin`
- **Password**: `123`

---

## 📋 Endpoints Disponíveis da API

Interagindo pelo amigável painel do **Swagger**, eis a base de operações CRUD liberada (`/produtos`):

- `GET /produtos` - Retorna a lista integral de todos os produtos ativos no estoque.
- `GET /produtos/{id}` - Busca e retorna propriedades de um item específico pelo ID primário.
- `POST /produtos` - Cadastra um novo produto definindo **Nome, Quantidade e SKU**.
- `PUT /produtos/{id}` - Atualiza dados de um registro existente.
- `DELETE /produtos/{id}` - Exclui o produto selecionado do banco de dados.


