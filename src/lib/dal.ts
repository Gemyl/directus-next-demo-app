"server-only";

import { Todo } from "@/components/ToDos/models";
import directus from "./directus";
import { errorsHandler } from "@/lib/errors";
import { createItem, deleteItem, readItems, updateItem } from "@directus/sdk";

export async function getToDos(): Promise<Todo[]> {
    return directus.request(
        readItems("todos")
    ).catch((er) => {errorsHandler(er)}) as Promise<Array<Todo>>;
}

export async function addTodo(request: {title: string}) {
    await directus.request(
        createItem("todos", {
            title: request?.title
        })
    ).catch((er) => {errorsHandler(er)});
}

export async function removeTodo(request: {id: string}) {
    await directus.request(
        deleteItem("todos", request.id)
    ).catch((er) => {errorsHandler(er)});
}

export async function editTodo(request: Todo) {
    await directus.request(updateItem(
        "todos",
        request.id,
        {
            title: request.title
        }
    )).catch((er) => errorsHandler(er));
}