# 💰 FinantialControl — Frontend Angular

Aplicação web para **controle de finanças pessoais**, desenvolvida com Angular e TypeScript. O projeto tem como objetivo oferecer uma interface organizada para acompanhar receitas, despesas, categorias financeiras e movimentações, facilitando a visualização e o gerenciamento da vida financeira.

> **Status:** projeto em desenvolvimento. Este frontend contém a estrutura inicial da aplicação. Funcionalidades como autenticação, cadastro de transações, relatórios e integração completa com a API precisam ser implementadas e validadas conforme a evolução do projeto.

## 🎯 Objetivos do projeto

* Praticar desenvolvimento frontend com Angular e TypeScript.
* Construir uma interface responsiva e intuitiva.
* Organizar a aplicação utilizando componentes e serviços.
* Preparar a integração com uma API REST desenvolvida em Java e Spring Boot.
* Aplicar boas práticas de organização, manutenção e evolução de software.

## ✨ Funcionalidades planejadas

* **Dashboard financeiro:** resumo das receitas, despesas e saldo.
* **Receitas:** cadastro e consulta de entradas financeiras.
* **Despesas:** registro e acompanhamento de gastos.
* **Categorias:** organização das movimentações por tipo.
* **Histórico de transações:** consulta e filtragem de movimentações.
* **Relatórios:** visualização da evolução financeira por período.
* **Autenticação:** login e cadastro de usuários.
* **Interface responsiva:** adaptação para computadores, tablets e celulares.

As funcionalidades acima representam o escopo planejado e não significam que todos os recursos já estejam implementados.

## 🧰 Tecnologias utilizadas

| Tecnologia   | Finalidade                                    |
| ------------ | --------------------------------------------- |
| Angular 20   | Framework para construção da interface        |
| TypeScript   | Tipagem estática e lógica da aplicação        |
| HTML5        | Estrutura das páginas                         |
| CSS3         | Estilização e responsividade                  |
| RxJS         | Programação reativa e operações assíncronas   |
| Node.js      | Ambiente de execução das ferramentas frontend |
| npm          | Gerenciamento de dependências                 |
| Git e GitHub | Versionamento e colaboração                   |

## 📋 Pré-requisitos

Antes de executar o projeto, instale:

* Node.js em uma versão LTS compatível com o Angular utilizado.
* npm, instalado junto com o Node.js.
* Git, para clonar o repositório.
* Visual Studio Code ou outra IDE de sua preferência.

Verifique as instalações:

```bash
node --version
npm --version
git --version
```

## 🚀 Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/abdieldeathayde/FinantialControl.git
```

> Se o frontend estiver em outro repositório, substitua a URL pela URL correta.

### 2. Entrar na pasta do frontend

Acesse a pasta que contém o arquivo `package.json`:

```bash
cd FinantialControl/frontend
```

Ajuste o caminho caso a estrutura do seu repositório seja diferente.

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a aplicação

```bash
npm start
```

Caso o script `start` não esteja configurado no `package.json`, execute:

```bash
npx ng serve
```

### 5. Acessar no navegador

Abra:

http://localhost:4200

O servidor de desenvolvimento recompila a aplicação conforme os arquivos são alterados.

## 🏗️ Estrutura do projeto

A estrutura pode variar conforme a organização atual do repositório. Uma organização recomendada é:

```text
frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   └── interceptors/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   └── models/
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   ├── auth/
│   │   │   ├── transactions/
│   │   │   ├── categories/
│   │   │   └── reports/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.config.ts
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Essa árvore é uma sugestão de arquitetura. Crie as pastas e os arquivos conforme os módulos e recursos forem implementados.

## 🔌 Integração com o backend

O frontend foi planejado para consumir uma API REST em Java e Spring Boot, responsável pela autenticação, validação das operações, persistência e processamento dos dados financeiros.

Exemplo de endereço local da API:

```text
http://localhost:8080
```

Esse endereço é uma referência para desenvolvimento local; confirme a porta e os endpoints na configuração real do backend.

A integração poderá utilizar serviços Angular com `HttpClient` para realizar operações HTTP, como:

* `GET`: consultar dados financeiros.
* `POST`: cadastrar receitas, despesas e categorias.
* `PUT` ou `PATCH`: atualizar registros.
* `DELETE`: remover registros.

A URL da API deve ser centralizada em arquivos de configuração de ambiente, evitando sua repetição em vários componentes.

## 🧪 Build e validação

Para compilar a aplicação:

```bash
npm run build
```

Para executar os testes unitários, caso estejam configurados:

```bash
npm test
```

Antes de publicar alterações, verifique se a compilação termina sem erros e se os testes disponíveis passam.

## 🔐 Segurança e boas práticas

* Não armazene senhas em texto puro no frontend.
* Não coloque segredos ou credenciais privadas nos arquivos Angular.
* Valide os dados na interface e, principalmente, no backend.
* Proteja as rotas privadas conforme o mecanismo de autenticação implementado.
* Não considere os dados do navegador como fonte confiável para cálculos financeiros.
* Utilize variáveis de ambiente ou configurações apropriadas para diferenciar desenvolvimento e produção.
* Evite versionar arquivos `.env` com credenciais reais.

## 🗺️ Próximas etapas

1. Implementar os formulários de login e cadastro.
2. Desenvolver os componentes de receitas, despesas e categorias.
3. Criar serviços Angular para comunicação com a API.
4. Integrar a autenticação e o controle de acesso.
5. Implementar dashboard e relatórios financeiros.
6. Adicionar testes unitários e de integração.
7. Melhorar acessibilidade, responsividade e tratamento de erros.
8. Preparar o build de produção e o processo de publicação.

## 👨‍💻 Autor

**Abdiel Athayde**

* GitHub: https://github.com/abdieldeathayde
* LinkedIn: https://www.linkedin.com/in/abdieldeathayde/

## 📄 Licença

Defina uma licença para o projeto antes de permitir sua reutilização por terceiros. Se optar pela licença MIT, adicione o arquivo `LICENSE` correspondente ao repositório.
