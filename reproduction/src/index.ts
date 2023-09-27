import { z } from "zod";
import {
  safeParsePayload,
  safeParsePayloadInfer,
  safeParsePayloadVariant,
} from "safe-parse-payload"; // this package uses zod@3.21.4

// This schema is 3.22.2
const schema = z.object({ id: z.string() });

// safeParsePayload uses z.output<T>
const payload = await safeParsePayload(schema, { id: "123" });

// safeParsePayloadInfer uses z.infer<T>
const payload2 = await safeParsePayloadInfer(schema, { id: "123" });

// safeParsePayloadVariant uses z.Schema<T> and will cause the "Type instantiation is excessively deep and possibly infinite" error
const payload3 = safeParsePayloadVariant(schema, { id: "123" });
