import OpenAI from "openai";
import fs from "fs";
import {
  buildSystemPrompt,
  buildUserPrompt,
  buildDocsSystemPrompt,
} from "./prompt";
import type { DietPlanRequest } from "./types";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
  timeout: 2 * 60 * 1000, // 2 minutos
  logLevel: "debug",
});
export async function* generateDietPlan(input: DietPlanRequest) {
  const diretrizes = fs.readFileSync("knowledge/diretrizes.md", "utf-8");

  console.log("Diretrizes carregadas:", diretrizes); // Log para verificar o conteúdo
  const stream = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: buildSystemPrompt() },
        { role: "system", content: buildDocsSystemPrompt(diretrizes) },
      { role: "user", content: buildUserPrompt(input) },
    ],
    temperature: 0.6,
    stream: true,
  });
  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content;
    console.log(delta);
    if (delta) {
      yield delta;
    }
  }
}
