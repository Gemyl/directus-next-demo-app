"use client";
import { removeTodoAction } from "@/app/(main)/actions";
import { Todo } from "./models";

export default function TodoCard(todo:Todo) {
    return <div className="flex flex-row justify-between items-start p-2 border border-black rounded-sm shadow shadow-black">
        {todo.title}
        <form action={removeTodoAction.bind(null, {id: todo.id})}>
            <button className="rounded-full bg-red-600 p-2 text-white cursor-pointer">Delete</button>
        </form>
    </div>
}