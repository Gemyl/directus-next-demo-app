"use server";

import ToDosList from "@/components/ToDos/ToDosList";
import { getToDos } from "@/lib/dal";
import AddTodo from "@/components/ToDos/AddTodo";

export default async function Home() {
  const todosPromise = getToDos() as any;

  return (
    <div className="flex flex-col justify-start items-center mt-2">
      <AddTodo/>
      <ToDosList toDosPromise={todosPromise}/>
    </div>
  );
}
