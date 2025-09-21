"use server"

import { addTodo } from "@/lib/dal";
import { revalidatePath } from "next/cache";

export async function addTodoAction(request: any) {
    const title = request.get("todoTitle");

    await addTodo({title});
    revalidatePath("/");
}