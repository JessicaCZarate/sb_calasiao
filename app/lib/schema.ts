import { z } from "zod";

export const documentSchema = z.object({
  id: z.number().int(),
  type: z.string(),
  title: z.string(),
  heading: z.string(),
  year: z.string(),
  label: z.string(),
  priority: z.string(),
  pdf_preview: z.string(),
  pdf_link: z.string(),
  pdf_download: z.string(),
});

export type Document = z.infer<typeof documentSchema>;
