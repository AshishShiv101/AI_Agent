import { inngest } from "../client";

export const onUserSignup = inngest.createFunction(
     {id : "on-user-signup",retries:2},
     {event: "user/signup"},
     async({event,step}) =>{
        try {
            const {email} = event.data
            await step.run("get-user-email",async()=>)
        } catch (error) {
            
        }
     }
)