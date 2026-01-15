import {cookies} from "next/headers";

export const getToken = async (): Promise<string> => {
    const cookiesStore = await cookies();
    const token: string = cookiesStore.get(process.env.ACCESS_TOKEN_NAME as string)?.value || "";
    return token;
 }