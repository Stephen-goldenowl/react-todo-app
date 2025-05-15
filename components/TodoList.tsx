"use client";
import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onRemove,
  onMarkDone,
  onUpdate,
}: {
  todos: Todo[];
  onRemove: (id: number) => void;
  onMarkDone: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void;
}) => {
  const markDoneHandler = (id: number) => {
    onMarkDone(id);
  };

  const removeHandler = (id: number) => {
    onRemove(id);
  };

  const handleUpdateTodo = (id: number, newTitle: string) => {
    onUpdate(id, newTitle);
  };

  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markDone={markDoneHandler}
          onRemove={removeHandler}
          onUpdate={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
