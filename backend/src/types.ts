import { z } from "zod";

export const DietPlanRequestSchema = z.object({
    nome: z.string().min(2),
    idade: z.number().positive(),
    altura_cm: z.number().positive(),
    peso_kg: z.number().positive(),
    sexo: z.enum(["masculino", "feminino"]),
    nivel_atividade: z.enum(["sedentário", "2x_semana", "4x_semana"]),
    objetivo: z.enum(["perda_de_peso", "hipertrofia", "manter_massa_muscular"]),
});

export type DietPlanRequest = z.infer<typeof DietPlanRequestSchema>;
//inferencia de tipos a partir do schema do zod, para garantir que os tipos estejam alinhados com a validação dos dados.