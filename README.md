# Dieta-IA

Aplicação **Fullstack** que utiliza Inteligência Artificial para gerar planos alimentares personalizados com base nas informações fornecidas pelo usuário.

O projeto foi desenvolvido com **Node.js + Fastify + TypeScript** no backend e **Next.js** no frontend, integrando a API da **OpenAI** para geração inteligente de respostas estruturadas.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Backend
- Node.js
- Fastify
- TypeScript
- Zod (validação de dados)
- OpenAI SDK
- @fastify/cors

### 🔹 Frontend
- Next.js
- shadcn/ui
- React Markdown
- TypeScript

---

## ⚙️ Configuração do Projeto

### 📦 Backend

```bash
npm init -y
npm install zod fastify
npm install openai --force
npm install @fastify/cors --force
npm install --save-dev typescript tsx @types/node
npx tsc --init
```

### Rodar  Servidor - back-end
```bash
git clone https://github.com/Felipesv1/Dieta-IA.git
cd backend
npm run dev
```
front end -  components (next.js)

```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add scroll-area
npx shadcn@latest add card


```


## 🧠 Conceito de Prompts

O projeto trabalha com três tipos principais de prompt:

### 🔹 System Prompt
Define o comportamento da IA, tom de voz e regras de resposta.  
Exemplo: atuar como especialista em nutrição e gerar um plano alimentar equilibrado e detalhado.

### 🔹 User Prompt
Pergunta ou solicitação enviada pelo usuário.

### 🔹 Docs System Prompt
Define a estrutura da resposta, organizando o plano alimentar em:

- Café da manhã  
- Almoço  
- Jantar  
- Lanches  

Incluindo quantidades recomendadas e dicas nutricionais.

---

## 🎯 Funcionalidades

- Geração de plano alimentar personalizado  
- Estrutura organizada da resposta  
- Validação de dados com Zod  
- Renderização formatada usando React Markdown  
- Interface moderna com shadcn/ui  

---

## 📈 Aprendizados

- Integração prática com API de IA  
- Engenharia de Prompt  
- Estruturação de aplicações Fullstack  
- Boas práticas com TypeScript  
- Organização de respostas estruturadas via IA  

