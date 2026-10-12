# MinhasFinancas — Controle de Finanças Pessoais

Aplicação full stack para controle de finanças pessoais, reunindo o backend Java/Spring Boot e o frontend Angular em um único repositório.

> **Status do projeto:** base em desenvolvimento. A API Java contém a estrutura inicial de aplicação, configuração de segurança, migração de banco e endpoint de saúde. O frontend Angular também é uma base inicial. Recursos como CRUD completo de receitas/despesas, autenticação integrada e relatórios precisam ser implementados e testados antes de uso real.

## Tecnologias

- **Backend:** Java 21, Spring Boot 3.5, Spring Web, Spring Data JPA, Spring Security, Bean Validation, Flyway, JWT e Springdoc OpenAPI.
- **Frontend:** Angular 20, TypeScript, RxJS, HTML e CSS.
- **Banco de dados:** PostgreSQL.
- **Ambiente:** Docker e Docker Compose (banco de dados); Maven e npm.

## Estrutura

```text
MinhasFinancas/
├── backend/                 # API REST Java/Spring Boot
│   ├── src/main/java/
│   ├── src/main/resources/  # application.yml e migrations Flyway
│   ├── src/test/java/
│   ├── Dockerfile
│   └── pom.xml
├── frontend/                # Aplicação web Angular
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── package-lock.json
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

## Pré-requisitos

Para executar tudo localmente, instale:

- JDK 21;
- Maven 3.9+ (ou use o wrapper Maven se for adicionado ao projeto);
- Node.js compatível com Angular 20 e npm;
- Docker Desktop com Docker Compose;
- Git (opcional, para versionamento).

## Configuração e execução

### 1. Banco de dados com Docker

Na raiz do repositório, copie `.env.example` para `.env` e ajuste os valores de desenvolvimento se necessário. Depois execute:

```bash
docker compose up -d db
```

O PostgreSQL ficará disponível em `localhost:5432`. O Compose cria o banco `appdb` e o usuário de desenvolvimento definidos nas variáveis do `.env`.

### 2. Backend Java

Em outro terminal:

```bash
cd backend
mvn spring-boot:run
```

A API ficará disponível em `http://localhost:8080`. A documentação OpenAPI/Swagger UI, quando a aplicação iniciar corretamente, fica normalmente em `http://localhost:8080/swagger-ui.html`.

O backend usa `DB_URL`, `DB_USER`, `DB_PASSWORD` e `JWT_SECRET`. Ao executar o Maven diretamente no host, os valores padrão de `application.yml` apontam para `localhost:5432`.

### 3. Frontend Angular

Em outro terminal:

```bash
cd frontend
npm ci
npm start
```

Abra `http://localhost:4200`. O frontend e a API estão organizados no mesmo repositório, mas a integração entre telas e endpoints deve ser concluída conforme os recursos forem implementados.

### 4. Parar o banco

Na raiz do repositório:

```bash
docker compose down
```

Para remover também os dados persistidos do banco de desenvolvimento:

```bash
docker compose down -v
```

> O comando `down -v` apaga o volume local do PostgreSQL. Use com cuidado.

## Testes e build

Backend:

```bash
cd backend
mvn test
mvn package
```

Frontend:

```bash
cd frontend
npm test
npm run build
```

A disponibilidade de testes depende dos testes efetivamente implementados. Execute os comandos antes de publicar alterações.

## Variáveis de ambiente

Veja `.env.example`. Não comite `.env` nem segredos reais. O valor de `JWT_SECRET` de exemplo é apenas para desenvolvimento; use um segredo forte e exclusivo em qualquer ambiente compartilhado ou de produção.

## Fluxo de contribuição

1. Crie uma branch para a alteração (`feat/nome-da-funcionalidade` ou `fix/nome-do-ajuste`).
2. Faça commits pequenos e descritivos.
3. Execute os testes e builds disponíveis.
4. Abra um Pull Request com contexto, mudanças, evidências e itens pendentes.
5. Solicite revisão antes de integrar à branch principal.

## Próximas evoluções sugeridas

- Implementar entidades, repositórios, serviços e endpoints de receitas e despesas;
- implementar cadastro/login e completar o fluxo de autenticação JWT;
- configurar `HttpClient` e serviços Angular para integração com a API;
- adicionar validações, tratamento global de erros e testes automatizados;
- implementar dashboard, categorias, filtros e relatórios;
- adicionar pipeline CI para build e testes.

## Autor

**Abdiel Athayde**  
GitHub: https://github.com/abdieldeathayde  
LinkedIn: https://www.linkedin.com/in/abdieldeathayde/
