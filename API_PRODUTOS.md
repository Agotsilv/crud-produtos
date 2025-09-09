# API CRUD de Produtos

Esta API permite gerenciar produtos com as seguintes colunas:

- **CodProd**: Código do produto (int) - chave primária inserida pelo usuário
- **DescrProd**: Descrição do produto (varchar 80)

## Endpoints Disponíveis

### 1. Criar Produto

**POST** `/produtos`

```json
{
  "CodProd": 123,
  "DescrProd": "Produto de exemplo"
}
```

### 2. Listar Todos os Produtos

**GET** `/produtos`

Retorna uma lista com todos os produtos cadastrados.

### 3. Buscar Produto por Código

**GET** `/produtos/:CodProd`

Exemplo: `GET /produtos/123`

### 4. Atualizar Produto

**PATCH** `/produtos/:CodProd`

```json
{
  "DescrProd": "Nova descrição do produto"
}
```

### 5. Deletar Produto

**DELETE** `/produtos/:CodProd`

Exemplo: `DELETE /produtos/123`

## Como Executar

1. Instalar dependências:

```bash
yarn install
```

2. Executar em modo desenvolvimento:

```bash
yarn start:dev
```

3. A API estará disponível em: `http://localhost:4000`

## Validações

- **CodProd**: Deve ser um número inteiro e não pode estar vazio
- **DescrProd**: Deve ser uma string, não pode estar vazia e deve ter no máximo 80 caracteres

## Banco de Dados

A API está configurada para usar SQL Server com TypeORM e conecta-se à tabela `Produto` existente no banco de dados "Teste". A sincronização automática está desabilitada para preservar a estrutura da tabela existente.
