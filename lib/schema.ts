import { z } from "zod";

export const rfqFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid business email address"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  serviceInterest: z.enum(
    ["a2p-sms", "wholesale-voice", "iot-esim", "cpaas-api", "ai-strategy", "multiple"],
    { message: "Please select a service interest" }
  ),
  estimatedVolume: z.string().min(1, "Please select an estimated monthly volume"),
  targetRegions: z.string().min(2, "Please specify your target countries or corridors"),
  message: z.string().max(1000, "Message cannot exceed 1000 characters").optional(),
});

export type RfqFormValues = z.infer<typeof rfqFormSchema>;
