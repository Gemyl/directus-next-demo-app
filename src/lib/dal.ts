"server-only";

import { Todo } from "@/components/ToDos/models";
import directus from "./directus";
import { errorsHandler } from "@/lib/errors";
import { readItems } from "@directus/sdk";

export async function getToDos() {
        return directus.request(
            readItems("todos")
        ).catch((er) => {errorsHandler(er)}) as Promise<Array<Todo>>;
}