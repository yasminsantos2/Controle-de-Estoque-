<h1 align="center">📦 Sistema de Controle de Estoque Fullstack</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.3.0-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

Uma aplicação Fullstack completa para gerenciamento de inventário. Composta por uma API RESTful em **Spring Boot (Java)**, um Frontend moderno e interativo em **Angular**, e armazenando estados num banco de dados relacional **PostgreSQL**, além de estar totalmente preparada para funcionar em contêineres Docker.

---

## 🚀 Tecnologias e Ferramentas Livres

### Frontend
- **Framework Ouro:** Angular 17+
- **Linguagem:** TypeScript
- **Estilização:** CSS Vanilla com _Glassmorphism_

### Backend
- **Linguagem:** Java 17
- **Framework:** Spring Boot 3.3.0
- **Persistência de Dados:** Spring Data JPA + Hibernate
- **Documentação de API:** Swagger / OpenAPI

### Infraestrutura
- **Banco de Dados:** PostgreSQL 15 
- **DB Interface:** pgAdmin4
- **Orquestração:** Docker & Docker Compose

---

## 🛠️ Como preparar e rodar o projeto?

O projeto está totalmente configurado para rodar os 3 módulos (Banco, Backend e Frontend) de forma automatizada usando o Docker.

### Requisitos
- [Docker e Docker Desktop](https://www.docker.com/products/docker-desktop) instalados (necessário que estejam abertos no momento do run).

### ✅ Subindo todo o ecossistema pelo Docker (Recomendado)

Abra o terminal na raiz do projeto (`C:\Controle-de-Estoque-\`) e digite:

```bash
docker-compose up -d --build
```
> O Docker irá baixar o banco de dados, compilar seu código Spring Boot, fazer a build do Angular e colocar todos na mesma rede virtual interna de forma transparente.

---

### 💻 Como focar no Desenvolvimento Local 

Caso prefira rodar os serviços localmente pelos seus editores:

**1. Apenas o Banco de Dados (Terminal):**
Suba apenas o módulo do Postgres:
```bash
docker-compose up -d postgres
```

**2. Backend via IntelliJ IDEA:**
Inicie a classe `EstoqueApplication.java` apertando em *Run* / *Play*. O Hibernate criará as tabelas sozinho na porta local **8083**.

**3. Frontend via VS Code:**
Abra a pasta `/frontend`. No terminal interno inicie o serviço de live-reload do Angular:
```bash
npm install --legacy-peer-deps
npm start
``` 

---

## 🔗 Links e Acessos Importantes

Com o projeto completo rodando, você pode validar testando seus canais oficiais:

| Módulo/Serviço | Link / URL de Acesso | Usos |
| --- | --- | --- |
| 🌐 **Frontend (Página Web)** | [http://localhost:4200](http://localhost:4200) | Cadastrar e Ver saldo de estoque (UI Principal) |
| ⚡ **Backend API (Swagger)** | [http://localhost:8083/swagger-ui/index.html](http://localhost:8083/swagger-ui/index.html) | Ver e debugar os endpoints |
| 🗄️ **Painel BD (pgAdmin)** | [http://localhost:5050](http://localhost:5050) | Consultar as tabelas - Usuário: `admin@admin.com` - Senha: `123` |

### Credenciais Internas do PostgreSQL
- **Host**: `localhost` (ou `postgres_estoque` dentro da rede docker)
- **Porta**: `5432`
- **Database**: `estoquedb`
- **Username**: `admin`
- **Password**: `123`

---

## 📋 Arquitetura Rest API

Se decidir conectar sistemas de terceiros ou integrar num novo app móvel, a base de endpoints é limpa e unificada (`/produtos`):

- `GET /produtos` - Retorna a lista integral de produtos cadastrados.
- `GET /produtos/{id}` - Busca um único item pelo Identificador (ID).
- `POST /produtos` - Cadastra novo produto no estoque (Payload pede: `nome`, `sku`, `quantidade`).
- `PUT /produtos/{id}` - Modifica quantidade, nome ou Sku de um cadastro.
- `DELETE /produtos/{id}` - Remove da tabela de registros.
