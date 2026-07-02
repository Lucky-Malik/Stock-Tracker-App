import { inngest } from "@/lib/inngest/client";

export const sendSignUpEmail = inngest.createFunction(
    { id: 'Sign-Up Email' },
    { event: 'app/user.created' },

)