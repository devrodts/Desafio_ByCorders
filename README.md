**Disclaimer:** A aplicação pode conter bugs, devido o alto volume de testes e entrevistas, tenho administrado o tempo da melhor maneira possível, ainda não realizei todos os testes possíveis.

# Projeto de Processamento CNAB - Backend NestJS com Frontend React

Este projeto consiste na implementação do backend para processamento de arquivos CNAB utilizando NestJS, acompanhado de uma interface web em React/Vite. O objetivo é demonstrar uma abordagem de desenvolvimento utilizando tecnologias modernas.

## 🚀 Estrutura do Projeto

O projeto está organizado em 2 principais diretórios:

```
/
├── backend-nest/     # Implementação usando NestJS
└── frontend/         # Interface web em React + Vite
```

## 💻 Tecnologias Utilizadas

### Backend
- **NestJS**: Framework Node.js progressivo com TypeScript

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

### Frontend React

```bash
cd frontend

# Instalação de dependências
yarn install

# Iniciar em modo desenvolvimento
yarn dev
```

## 🔧 Configuração do Ambiente

No backend, crie um arquivo `.env` com as seguintes variáveis:

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

### Upload de arquivo CNAB
- **POST** `/transactions/upload`
  - Envie um arquivo CNAB através de uma requisição multipart/form-data
  - Campo do arquivo: `file`

### Listar todas as transações
- **GET** `/transactions`
  - Retorna todas as transações processadas

## 🐳 Docker

O backend possui um `docker-compose.yml` para gerenciar o banco de dados PostgreSQL:

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

Para executar os testes no backend NestJS:

```bash
cd backend-nest
npm run test
```

## 📚 Documentação Adicional

- [Documentação do NestJS](https://docs.nestjs.com/)
- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia o guia de contribuição antes de submeter pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
