"use server";

import ToDosList from "@/components/ToDos/ToDosList";
import { getToDos } from "@/lib/dal";
import AddTodo from "@/components/ToDos/AddTodo";
import { Suspense } from "react";
import {Todo} from "@/components/ToDos/models";

export default async function Home() {
  const todosPromise: Promise<Todo[]> = getToDos();

  return (
    <div className="flex flex-col justify-start items-center mt-2">
      <AddTodo/>
        <Suspense fallback={<p>Loading...</p>}>
            <ToDosList toDosPromise={todosPromise}/>
        </Suspense>
    </div>
  );
}
