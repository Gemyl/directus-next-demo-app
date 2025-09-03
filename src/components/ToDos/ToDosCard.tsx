"use client";
import { Todo } from "./models";

export default function TodoCard(todo:Todo) {
    return <div className="flex flex-col justify-center items-start p-2 border border-black rounded-sm shadow shadow-black">
        {todo.title}
    </div>
}