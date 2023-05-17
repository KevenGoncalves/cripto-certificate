import * as z from "zod"
import { CompleteCertificate, relatedCertificateZodType } from "./index"

export const studentZodType = z.object({
  id: z.string().optional(),
  name: z.string(),
  birthdate: z.date(),
  course: z.string(),
  period: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export interface CompleteStudent extends z.infer<typeof studentZodType> {
  certificate?: CompleteCertificate | null
}

/**
 * relatedStudentZodType contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedStudentZodType: z.ZodSchema<CompleteStudent> = z.lazy(() => studentZodType.extend({
  certificate: relatedCertificateZodType.nullish(),
}))
