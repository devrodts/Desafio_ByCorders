
# API de Processamento de Transações CNAB

Esta é uma API desenvolvida com NestJS para processamento de arquivos CNAB.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- Docker e Docker Compose
- npm ou yarn

## Configuração e Execução

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

### 2. Instalação das dependências

```bash
yarn install
```

### 3. Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configuração do Banco de Dados
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_banco
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco?schema=public"

# Configuração da API
PORT=3000
```

### 4. Iniciando o banco de dados com Docker

```bash
docker-compose up -d
```

### 6. Iniciando a aplicação

```bash
# Modo desenvolvimento
# ou
yarn start:dev

# Modo produção
npm run start:prod
# ou
yarn start:prod
```

## Endpoints da API

### Upload de arquivo CNAB
- **POST** `/transactions/upload`
  - Envie um arquivo CNAB através de uma requisição multipart/form-data
  - Campo do arquivo: `file`

### Listar todas as transações
- **GET** `/transactions`
  - Retorna todas as transações processadas

## Estrutura do Docker Compose

Crie um arquivo `docker-compose.yml` na raiz do projeto:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:latest
    container_name: cnab_postgres
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

## Testando a API

1. Inicie o servidor
2. Use um cliente HTTP (como Postman, Insomnia ou cURL) para fazer upload do arquivo CNAB:
   ```bash
   curl -X POST -F "file=@seu_arquivo_cnab.txt" http://localhost:3000/transactions/upload
   ```
3. Consulte as transações processadas:
   ```bash
   curl http://localhost:3000/transactions
   ```

## Observações

- Certifique-se de que o Docker está em execução antes de iniciar o projeto
- Verifique se as portas 5432 (PostgreSQL) e 3000 (API) estão disponíveis
- Em caso de problemas com as migrations, tente resetar o banco de dados:
  ```bash
  npx prisma migrate reset
  # ou
  yarn prisma migrate reset
  ```

```

Este README fornece as instruções básicas para configurar e executar a aplicação. Você pode personalizá-lo adicionando mais informações específicas do seu projeto, como:

- Descrição mais detalhada do projeto
- Estrutura de arquivos
- Exemplos de payload
- Documentação adicional da API
- Instruções para execução de testes
- Informações sobre contribuição
- Licença do projeto
