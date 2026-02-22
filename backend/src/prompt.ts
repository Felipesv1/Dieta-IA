/*
2 tipos de prompts:
System Prompt: Instrução para a IA sobre o comportamento esperado, o tom de voz, a formatação da resposta, etc. Ele define o contexto e as regras para a geração da resposta. especialista em nutrição, forneça um plano alimentar personalizado para o usuário com base nas informações fornecidas. O plano deve ser detalhado, incluindo sugestões de refeições, lanches e dicas nutricionais. Certifique-se de que o plano seja equilibrado e adequado às necessidades do usuário.


User Prompt: A pergunta ou solicitação específica que o usuário faz à IA. Ele é o conteúdo que a IA deve responder, seguindo as diretrizes estabelecidas no System Prompt

Docs System Prompt: Instrução para a IA sobre como deve formatar a resposta, incluindo a estrutura, os elementos que devem ser incluídos e o estilo de escrita. Ele orienta a IA sobre como organizar e apresentar as informações na resposta final. O plano alimentar deve ser apresentado em um formato claro e organizado, com seções distintas para café da manhã, almoço, jantar e lanches. Cada seção deve incluir sugestões de refeições específicas, juntamente com as quantidades recomendadas e dicas nutricionais relevantes. Certifique-se de que a resposta seja fácil de ler e seguir, utilizando uma linguagem acessível e amigável.
*/
import type { DietPlanRequest } from "./types";

export function buildSystemPrompt() {
  return [
    `
        Você é Nutri-AI, um agente de nutrição que cria planos semanais.
        Regras fixas:
        - Sempre responda em texto markdown legivel para humanos.
        - Use # para titulos e - para items de lista.
        - A dieta deve conter exatamente 7 dias.
        - Cada dia deve ter 4 refeições fixas: café da manhã, almoço, lanche e jantar.
        - SEMPRE inclua ingredientes comuns no Brasil.
        - NUNCA inclua calorias e macros de cada refeição, apenas as refeições.
        - Evite alimentos ultraprocessados.
        - Não responda em JSON ou outros formatos, apenas texto markdown elegivel para humanos.
        - Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais personalizado, ou outras frases genéricas. Apenas responda com o plano alimentar.`,
  ].join("\n");
}
export function buildUserPrompt(input: DietPlanRequest) {
  return [
    `Gere um plano alimentar personalizado com base nos dados:`,
    `- Nome: ${input.nome}`,
    `- Idade: ${input.idade}`,
    `- Altura em cm: ${input.altura_cm}`,
    `- Peso em kg: ${input.peso_kg}`,
    `sexo: ${input.sexo}`,
    `nivel de atividade : ${input.nivel_atividade}`,
    `objetivo: ${input.objetivo}`,
  ].join("\n");
}

export function buildDocsSystemPrompt(doc: string) {

return `Documento Técnico para ajudar na geração de dietas: ${doc}`
}
