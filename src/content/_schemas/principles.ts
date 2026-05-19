import { z } from "zod";

export const principleSchema = z.object({
  numeral: z.string(),
  title: z.string(),
  anchor: z.string(),
  body: z.string(),
});

export const principlesSchema = z.object({
  intro: z.string(),
  conclusion: z.string(),
  principles: z.array(principleSchema).length(10),
});

export type Principles = z.infer<typeof principlesSchema>;
