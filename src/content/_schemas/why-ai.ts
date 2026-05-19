import { z } from "zod";

const statSchema = z.object({
  value: z.string(),
  caption: z.string(),
  source: z.string().optional(),
});

export const whyAiSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(220),
    canonical: z.string().url(),
  }),
  hero: z.object({
    title: z.string(),
    lede: z.string(),
  }),
  /**
   * Opening argument: 4 stat highlights interleaved with 4 connector strings
   * inside one paragraph. Citation indices map 1:1 to references[].
   * statsRow renders below as <Stat> components.
   */
  openingArgument: z.object({
    intro: z.string(),
    stats: z
      .array(
        z.object({
          highlight: z.string(),
          citation: z.number().int().positive(),
        })
      )
      .length(4),
    connectors: z.array(z.string()).length(4),
    statsRow: z.array(statSchema).length(4),
  }),
  pivot: z.string(),
  failureModesIntro: z.object({
    heading: z.string(),
    paragraph: z.string(),
  }),
  leaders: z.object({
    heading: z.string(),
    intro: z.string(),
    items: z
      .array(z.object({ title: z.string(), body: z.string() }))
      .length(4),
    outro: z.string(),
    stats: z.array(statSchema).length(3),
  }),
  whereWorks: z.object({
    heading: z.string(),
    body: z.string(),
    discoveryIntro: z.string(),
    questions: z.array(z.string()).length(4),
    closing: z.string(),
  }),
  endCta: z.object({
    primary: z.object({
      lead: z.string(),
      email: z.string().email(),
      href: z.string().regex(/^mailto:/),
    }),
    secondary: z.object({
      lead: z.string(),
      anchor: z.object({
        text: z.string(),
        href: z.string(),
      }),
    }),
  }),
  references: z
    .array(
      z.object({
        index: z.number().int().positive(),
        title: z.string(),
        source: z.string(),
        url: z.string().url(),
      })
    )
    .length(4),
  referencesNote: z.string(),
  lastReviewed: z.object({
    date: z.string(),
    lead: z.string(),
    email: z.string().email(),
    href: z.string().regex(/^mailto:/),
    suffix: z.string(),
  }),
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("Article"),
    headline: z.string(),
    description: z.string(),
    url: z.string().url(),
    author: z.object({
      "@type": z.string(),
      name: z.string(),
      url: z.string().url(),
    }),
    publisher: z.object({
      "@type": z.string(),
      name: z.string(),
      url: z.string().url(),
    }),
    dateModified: z.string(),
  }),
});

export type WhyAi = z.infer<typeof whyAiSchema>;
