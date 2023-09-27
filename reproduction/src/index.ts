import { z } from "zod";
import { safeParsePayload, safeParsePayloadInfer } from "safe-parse-payload";

const schema = z.object({ id: z.string() });

// safeParsePayload uses z.output<T>
const payload = await safeParsePayload(schema, { id: "123" });

// safeParsePayloadInfer uses z.infer<T>
const payload2 = await safeParsePayloadInfer(schema, { id: "123" });

// safeParsePayloadVariant uses z.Schema<T>
// const payload3 = safeParsePayloadVariant(schema, { id: "123" });
