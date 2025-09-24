"use client";
import { editTodoAction, removeTodoAction } from "@/app/(main)/actions";
import { Todo } from "./models";
import { useState } from "react";

export default function TodoCard(todo: Todo) {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ title: todo.title });

  return (
    <div className="flex flex-row justify-between items-center p-2 border border-gray-400 rounded-sm shadow shadow-black mr-2">
      {isEdit ? (
        <input
          className="rounded-pill w-[65%] p-2 border border-gray-400"
          value={updatedTodo.title}
          onChange={(input) => {
            setUpdatedTodo((prev) => ({
              ...prev,
              ...{ title: input.target.value },
            }));
          }}
        />
      ) : (
        <span className="w-[75%] p-2">{todo.title}</span>
      )}
      <div className="flex flex-row w-[35%] justify-end">
        {!isEdit && (
          <button
            onClick={() => {
              setUpdatedTodo({ title: todo.title });
              setIsEdit(true);
            }}
            className="btn btn-info rounded-pill"
          >
            Edit
          </button>
        )}
        {isEdit && (
          <button
            onClick={() => {
              editTodoAction({ id: todo.id, title: updatedTodo.title });
              setIsEdit(false);
            }}
            className="btn btn-success rounded-pill"
          >
            Save
          </button>
        )}
        {isEdit ? (
          <button
            onClick={() => {
              setIsEdit(false);
            }}
            className="btn btn-danger rounded-pill ms-2"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={removeTodoAction.bind(null, { id: todo.id })}
            className="btn btn-danger rounded-pill ms-2"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
