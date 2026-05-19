import { z } from "zod";

const portraitSchema = z.object({
  src: z.string(),
  alt: z.string().min(1),
  caption: z.string(),
  aspect: z.enum(["1:1", "3:4", "4:3", "16:9", "9:16"]),
  width: z.number().int().positive(),
});

export const aboutSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(160),
    canonical: z.string().url(),
    ogTitle: z.string(),
    ogDescription: z.string(),
  }),
  band: z.object({
    displayStatement: z.string(),
    supportingLine: z.string(),
    portrait: portraitSchema,
  }),
  story: z.object({
    paragraphs: z.array(z.string()).min(1),
  }),
  poukai: z.object({
    heading: z.string(),
    anchor: z.string(),
    body: z.string(),
  }),
  endCta: z.object({
    text: z.string(),
    email: z.string().email(),
    href: z.string().regex(/^mailto:/),
  }),
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("Person"),
    name: z.string(),
    jobTitle: z.string(),
    url: z.string().url(),
  }),
});

export type About = z.infer<typeof aboutSchema>;
