"use client";
import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onRemove,
  onMarkDone,
}: {
  todos: Todo[];
  onRemove: (id: number) => void;
  onMarkDone: (id: number) => void;
}) => {
  const markDoneHandler = (id: number) => {
    onMarkDone(id);
  };

  const removeHandler = (id: number) => {
    onRemove(id);
  };

  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markDone={markDoneHandler}
          onRemove={removeHandler}
        />
      ))}
    </ul>
  );
};

export default TodoList;
