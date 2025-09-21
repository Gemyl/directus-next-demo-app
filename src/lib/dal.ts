"server-only";

import { Todo } from "@/components/ToDos/models";
import directus from "./directus";
import { errorsHandler } from "@/lib/errors";
import { createItem, readItems } from "@directus/sdk";

export async function getToDos() {
    return directus.request(
        readItems("todos")
    ).catch((er) => {errorsHandler(er)}) as Promise<Array<Todo>>;
}

export async function addTodo(request: {title: string}) {
    console.log(request.title);

    await directus.request(
        createItem("todos", {
            title: request?.title
        })
    ).catch((er) => {errorsHandler(er)});
}