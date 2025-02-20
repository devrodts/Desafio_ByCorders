#!/bin/bash


## Aqui vocês podem iniciar o banco de dados
docker-compose up -d


## Aqui vocês podem buildar a aplicação
docker build -t backend-nest .

## Aqui vocês podem iniciar a aplicação.
docker run -p 3000:3000 --env-file .env backend-nest


