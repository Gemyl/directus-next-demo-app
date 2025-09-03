import { Suspense } from "react";
import { Todo } from "./models"
import TodoCard from "./ToDosCard";

export default function ToDosList() {
    const todos: Array<Todo> = [{title: "Test"}, {title: "Carwashing"}];
    return <div className="flex flex-col w-full">
        <Suspense fallback={<span>Loading...</span>}>
            {
                todos.map((item, index) => <div key={index} className={index == 0 ? "" : "mt-5"}>
                    <TodoCard title={item.title}/> 
                </div>)
            }
        </Suspense>
    </div>
}