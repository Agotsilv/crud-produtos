# Deploy na Vercel - CRUD Produtos

## Configuração para Deploy

### 1. Arquivos de Configuração Criados:

- `vercel.json` - Configuração da Vercel
- `.vercelignore` - Arquivos a serem ignorados no deploy
- `src/main.ts` - Atualizado para funcionar na Vercel

### 2. Variáveis de Ambiente na Vercel:

Configure as seguintes variáveis no painel da Vercel:

```
NODE_ENV=production
DB_HOST=mssql-196998-0.cloudclusters.net
DB_PORT=10024
DB_USERNAME=teste
DB_PASSWORD=Full@2000
DB_DATABASE=teste
```

### 3. Comandos de Deploy:

```bash
# Build local (opcional)
npm run build

# Deploy via Vercel CLI
vercel --prod
```

### 4. Configurações do Projeto na Vercel:

- **Framework Preset**: Other
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 5. Endpoints Disponíveis:

- `GET /` - Health check
- `GET /produtos` - Listar todos os produtos
- `GET /produtos/:CodProd` - Buscar produto por código
- `POST /produtos` - Criar produto
- `POST /produtos/search` - Buscar por descrição
- `PUT /produtos/:CodProd` - Atualizar produto
- `DELETE /produtos/:CodProd` - Deletar produto

### 6. Troubleshooting:

Se ainda der erro de "No Output Directory", verifique:

1. Se o build está gerando a pasta `dist`
2. Se as variáveis de ambiente estão configuradas
3. Se o `vercel.json` está na raiz do projeto
