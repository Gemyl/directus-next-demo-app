"use server";

import ToDosList from "@/components/ToDos/ToDosList";
import { getToDos } from "@/lib/dal";

export default async function Home() {
  const todosPromise = getToDos() as any;

  return (
      <ToDosList toDosPromise={todosPromise}/>
  );
}
