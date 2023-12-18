# Next Blog

Este é um projeto de estudo para aprender a utilizar Next.js, Supabase, entre outras tecnologias. Para tal, foi utilizado o template https://github.com/netlify-templates/nextjs-blog-theme.

## Funcionalidades

O projeto consiste em um blog simples, onde os posts são carregados dinamicamente a partir do banco de dados Supabase. Cada post pode ser visualizado individualmente.

## Arquivos Principais

- **pages/index.js:** Página principal que exibe a lista de posts.
- **utils/mdx-utils.js:** Funções utilitárias para interagir com o banco de dados Supabase.
- **services/api.js:** Configuração do cliente Supabase.
- **pages/posts/[id].js:** Página que exibe um post específico.
- **utils/global-data.js:** Função para obter dados globais do blog, como nome, título e texto de rodapé.

## Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Conta no [Supabase](https://supabase.io/) com uma tabela chamada "posts"

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/next_blog.git
   cd next_blog
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configuração do Supabase:

   - Crie uma conta no Supabase
   - Crie um projeto no Supabase
   - Crie uma tabela chamada "posts" no seu projeto do Supabase

4. Configuração das Variáveis de Ambiente:

   Crie um arquivo `.env.local` na raiz do projeto e adicione suas credenciais do Supabase:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=seu-url-supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-supabase
   ```

## Uso

1. Inicie o aplicativo:

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Observações

Note que para o banco de dados estar acessível via API é necessário habilitar acessos nas configurações do projeto na plataforma (https://supabase.com/dashboard/project/*suaprojecturl*/auth/policies)