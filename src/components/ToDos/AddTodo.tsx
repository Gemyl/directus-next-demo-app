import { addTodoAction } from "@/app/(main)/actions";

export default function AddTodo() {
    return (
      <>
        <form
          action={addTodoAction}
          className="flex flex-row justify-between p-2 w-[75%] rounded-full shadow shadow-black"
        >
          <input
            name="todoTitle"
            type="text"
            placeholder="Enter title"
            className="rounded-full p-4 w-[75%] border border-black"
          />
          <button
            className="p-4 rounded-full bg-black text-white cursor-pointer"
            type="submit"
          >
            Add Item
          </button>
        </form>
      </>
    );
}