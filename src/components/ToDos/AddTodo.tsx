import { addTodoAction } from "@/app/(main)/actions";

export default function AddTodo() {
  return (
    <>
      <form
        action={addTodoAction}
        className="flex flex-row justify-between items-center p-2 w-50 rounded-full shadow shadow-black"
      >
        <input
          name="todoTitle"
          type="text"
          placeholder="Enter title"
          className="rounded-full p-4 w-[75%] border border-gray-400 outline-none"
        />
        <button className="btn btn-primary rounded-pill" type="submit">
          Add Item
        </button>
      </form>
    </>
  );
}
