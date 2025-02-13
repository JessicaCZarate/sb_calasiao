import { z } from "zod";

export const documentSchema = z.object({
  id: z.number().int(),
  type: z.string(),
  title: z.string(),
  heading: z.string(),
  year: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Document = z.infer<typeof documentSchema>;
