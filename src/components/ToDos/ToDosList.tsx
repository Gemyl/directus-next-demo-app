import { Suspense, use } from "react";
import { Todo } from "./models"
import TodoCard from "./ToDosCard";

export default function ToDosList({toDosPromise}: any) {
    const todos: Array<Todo> = use(toDosPromise);

    return <div className="flex flex-col w-full h-fit py-5 px-10 max-h-[50vh] overflow-auto">
        <Suspense fallback={<span>Loading...</span>}>
            {
                todos.map((item, index) => <div key={index} className={index == 0 ? "" : "mt-5"}>
                    <TodoCard id={item.id} title={item.title}/> 
                </div>)
            }
        </Suspense>
    </div>
}