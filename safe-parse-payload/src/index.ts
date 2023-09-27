import { z } from "zod";

export function safeParsePayload<T extends z.ZodTypeAny>(
  schema: T,
  payload: unknown
): z.output<T> | undefined {
  const result = schema.safeParse(payload);

  if (result.success) {
    return result.data;
  }

  return undefined;
}

export function safeParsePayloadInfer<T extends z.ZodTypeAny>(
  schema: T,
  payload: unknown
): z.infer<T> | undefined {
  const result = schema.safeParse(payload);

  if (result.success) {
    return result.data;
  }

  return undefined;
}

export function safeParsePayloadVariant<T>(
  schema: z.Schema<T>,
  payload: unknown
): T | undefined {
  const result = schema.safeParse(payload);

  if (result.success) {
    return result.data;
  }

  return undefined;
}
