"use server"

import { Todo } from "@/components/ToDos/models";
import { addTodo, editTodo, removeTodo } from "@/lib/dal";
import { revalidatePath } from "next/cache";

export async function addTodoAction(request: any) {
    const title = request.get("todoTitle");

    await addTodo({title});
    revalidatePath("/");
}

export async function removeTodoAction(request: {id: string}) {
    const id = request.id;

    if(id) {
        await removeTodo({id});
        revalidatePath("/");
    }
}

export async function editTodoAction(request: Todo) {
    if(request.id) {
        await editTodo(request);
        revalidatePath("/");
    }
}