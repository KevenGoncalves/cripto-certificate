import * as z from "zod"
import { CompleteStudent, relatedStudentZodType } from "./index"

export const certificateZodType = z.object({
  id: z.string().optional(),
  studentId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export interface CompleteCertificate extends z.infer<typeof certificateZodType> {
  student: CompleteStudent
}

/**
 * relatedCertificateZodType contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCertificateZodType: z.ZodSchema<CompleteCertificate> = z.lazy(() => certificateZodType.extend({
  student: relatedStudentZodType,
}))
