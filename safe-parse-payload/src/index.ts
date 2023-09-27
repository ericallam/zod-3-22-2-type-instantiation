import type { Infer, InferIn, Schema } from "@decs/typeschema";
import { validate } from "@decs/typeschema";

export async function safeParsePayload<T extends Schema>(
  schema: T,
  payload: unknown
): Promise<Infer<T> | undefined> {
  const result = await validate(schema, payload);

  if (result.success) {
    return result.data;
  }

  return undefined;
}

export async function safeParsePayloadInfer<T extends Schema>(
  schema: T,
  payload: unknown
): Promise<InferIn<T> | undefined> {
  const result = await validate(schema, payload);

  if (result.success) {
    return result.data;
  }

  return undefined;
}
