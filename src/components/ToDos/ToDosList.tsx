import { Todo } from "./models";
import TodoCard from "./ToDosCard";

export default async function ToDosList({
  toDosPromise,
}: {
  toDosPromise: Promise<Array<Todo>>;
}) {
  const todos: Array<Todo> = await toDosPromise;

  return (
    <div className="flex flex-col items-center w-full h-fit py-5 px-10 max-h-[50vh] overflow-auto">
      {todos.map((item, index) => (
        <div key={index} className={`${index == 0 ? "" : "mt-2"} w-50`}>
          <TodoCard id={item.id} title={item.title} />
        </div>
      ))}
    </div>
  );
}
