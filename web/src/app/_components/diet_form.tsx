"use client";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export const DietFormSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório"),
  idade: z.number().positive(),
  altura_cm: z.number().int().positive(),
  peso_kg: z.number().positive(),
  sexo: z.enum(["masculino", "feminino"], { error: "Selecione o sexo" }),
  nivel_atividade: z.enum(["sedentario", "2x_semana", "4x_semana"], {
    error: "Selecione o nível de atividade",
  }),
  objetivo: z.enum(["perda_de_peso", "hipertrofia", "manter_massa_muscular"], {
    error: "Selecione o objetivo",
  }),
});

type DietSchemaFormData = z.infer<typeof DietFormSchema>;

interface DietFormProps {
  onSubmit: (data: DietSchemaFormData) => void;
}

export function DietForm({ onSubmit }: DietFormProps) {
  const form = useForm<DietSchemaFormData>({
    resolver: zodResolver(DietFormSchema),
    defaultValues: {
      nome: "",
      idade: undefined,
      altura_cm: undefined,
      peso_kg: undefined,
      sexo: undefined,
      nivel_atividade: undefined,
      objetivo: undefined,
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl   border-0">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4 mx-auto">
              <Utensils className="w-14 h-14 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-green-500">
              Calcule sua Dieta
            </h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  Dados Pessoais
                </h3>
              </div>
              {/* CAMPOS NOME E IDADE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="idade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Idade</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: 30"
                          {...form.register("idade", {
                            setValueAs: (value) =>
                              value === "" ? undefined : Number(value),
                          })}
                          type="number"
                          step="any"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {/* CAMPOS PESO, SEXO E ALTURA */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="peso_kg"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso em (kg)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: 70"
                          {...form.register("peso_kg", {
                            setValueAs: (value) =>
                              value === "" ? undefined : parseFloat(value),
                          })}
                          type="number"
                          step="any"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="altura_cm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Altura em (cm)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: 170"
                          {...form.register("altura_cm", {
                            setValueAs: (value) =>
                              value === "" ? undefined : parseFloat(value),
                          })}
                          type="number"
                          step="any"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sexo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sexo</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="Selecione o sexo"
                              {...field}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="feminino">Feminino</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              {/* ATIVIDADE E NIVEL*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nivel_atividade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de Atividade</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="Selecione o nível de atividade"
                              {...field}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sedentario">Sedentário</SelectItem>
                          <SelectItem value="2x_semana">
                            2x por semana
                          </SelectItem>
                          <SelectItem value="4x_semana">
                            4x por semana
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                 <FormField
                  control={form.control}
                  name="objetivo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objetivo</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder="Selecione o objetivo"
                              {...field}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="perda_de_peso">Perder de Peso</SelectItem>
                          <SelectItem value="hipertrofia">Hipertrofia</SelectItem>
                          <SelectItem value="manter_massa_muscular">Manter Massa Muscular</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full mt-4 hover:opacity-90 cursor-pointer">
                Gerar minha Dieta
              </Button>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
