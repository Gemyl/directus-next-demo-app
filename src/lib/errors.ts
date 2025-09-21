import { redirect } from "next/navigation";

export function errorsHandler(error: any) {
    if(error?.errors?.some((er:any) => er.message.toLowerCase().includes("invalid user credentials")) ||
        error?.errors?.some((er:any) => er.message.toLowerCase().includes("permission"))) {
            redirect("/login");
    } else {
        console.log(error);
    }    
}