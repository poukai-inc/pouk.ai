import { z } from "zod";

export const homeSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string().max(160),
    canonical: z.string().url(),
  }),
  hero: z.object({
    /** D-12: byte-identical to former public/index.html status-line. */
    status: z.string(),
    /** Hero title split into three parts so HomeHero.tsx can render <em> on the middle. */
    title: z.object({
      before: z.string(),
      em: z.string(),
      after: z.string(),
    }),
    /** Lede: two declaratives + a lede-extension anchor per D-11. */
    lede: z.object({
      sentence1: z.string(),
      sentence2: z.string(),
      anchor: z.object({
        text: z.string(),
        href: z.string(),
      }),
    }),
    cta: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
  /** Organization JSON-LD (R-037 + masterplan §6.2). */
  jsonLd: z.object({
    "@context": z.string().url(),
    "@type": z.literal("Organization"),
    name: z.string(),
    url: z.string().url(),
    email: z.string().email(),
    description: z.string(),
    sameAs: z.array(z.string().url()),
  }),
});

export type Home = z.infer<typeof homeSchema>;
