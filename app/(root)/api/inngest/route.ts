import { serve } from "inngest/next";

export const { GET, PUT, POST } = serve({
    client: inngest,
    functions: [],
}
)