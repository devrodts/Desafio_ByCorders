

```markdown:README.md
# Projeto de Processamento CNAB - Multi-Backend com Frontend React

Este projeto consiste em diferentes implementações de backend para processamento de arquivos CNAB, acompanhado de uma interface web em React. O objetivo é demonstrar diferentes abordagens de desenvolvimento usando tecnologias modernas.

## 🚀 Estrutura do Projeto

O projeto está organizado em 4 principais diretórios:

```
/
├── backend-nest/     # Implementação usando NestJS
├── backend-express/  # Implementação usando Express
├── backend-hono/     # Implementação usando Hono
└── frontend/        # Interface web em React + Vite
```

## 💻 Tecnologias Utilizadas

### Backends
- **NestJS**: Framework Node.js progressivo com TypeScript (concluído)

- **Express.js**: Framework web minimalista para Node.js (Em andamento)
- **Hono.js**: Framework web leve e rápido para edge computing (Em Andamento)

### Frontend
- **React**: Biblioteca JavaScript para construção de interfaces
- **Vite**: Build tool e dev server moderno
- **TypeScript**: Superset tipado do JavaScript

## 🏃‍♂️ Como Executar

### Backend NestJS

```bash
cd backend-nest

# Instalação de dependências
yarn install

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar o banco de dados
docker-compose up -d


# Iniciar em modo desenvolvimento
yarn start:dev
```

### Backend Express

```bash
cd backend-express

# Instalação de dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar o banco de dados
docker-compose up -d

# Executar migrations
npx prisma migrate dev

# Iniciar em modo desenvolvimento
npm run dev
```

### Backend Hono

```bash
cd backend-hono

# Instalação de dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar o banco de dados
docker-compose up -d

# Executar migrations
npx prisma migrate dev

# Iniciar em modo desenvolvimento
npm run dev
```

### Frontend React

```bash
cd frontend

# Instalação de dependências
yarn install

# Iniciar em modo desenvolvimento
yarn dev
```

## 🔧 Configuração do Ambiente

Cada backend requer um arquivo `.env` com as seguintes variáveis:

```env
# Configuração do Banco de Dados
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_banco
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco?schema=public"

# Configuração da API
PORT=3000
```

## 📝 Endpoints da API

Todos os backends implementam os mesmos endpoints:

### Upload de arquivo CNAB
- **POST** `/transactions/upload`
  - Envie um arquivo CNAB através de uma requisição multipart/form-data
  - Campo do arquivo: `file`

### Listar todas as transações
- **GET** `/transactions`
  - Retorna todas as transações processadas

## 🌐 Frontend

O frontend está disponível em `http://localhost:5173` e oferece:
- Interface para upload de arquivos CNAB
- Visualização das transações processadas
- Dashboard com totalizadores por loja

## 🐳 Docker

Cada backend possui seu próprio `docker-compose.yml` para gerenciar o banco de dados PostgreSQL:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:latest
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 🧪 Testes

Para executar os testes em qualquer um dos backends:

```bash
cd backend-[nest|express|hono]
npm run test
```

## 📚 Documentação Adicional

- [Documentação do NestJS](https://docs.nestjs.com/)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do Hono](https://hono.dev/)
- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia o guia de contribuição antes de submeter pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

Este README atualizado fornece uma visão geral completa do projeto, incluindo todas as implementações de backend e o frontend. Ele mantém as instruções claras e organizadas para cada parte do projeto, facilitando para novos desenvolvedores entenderem e começarem a trabalhar com o código.

Você pode personalizar ainda mais adicionando:
- Requisitos específicos de cada implementação
- Comparação de performance entre os backends
- Guias de deployment
- Screenshots da interface
- Exemplos de uso com curl ou outros clientes HTTP
- Informações sobre CI/CD
- Guias de troubleshooting comuns
