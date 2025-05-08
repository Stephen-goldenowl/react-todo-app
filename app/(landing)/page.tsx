"use client";
import { useEffect, useState } from "react";
import AddTodoInput from "@/components/AddTodoInput";
import PageTitle from "@/components/PageTitle";
import TodoList from "@/components/TodoList";
import { getTodos } from "@/services/todo";
import { useQuery } from "@tanstack/react-query";
import { Todo } from "@/types/todo";
import CustomSkeleton from "@/components/Skeleton";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data?.todos) {
      setTodos(data.todos);
    }
  }, [data]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      todo: title,
      completed: false,
      userId: 1,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleMarkDone = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos
    .filter((todo) => todo.todo.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.id - a.id);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-4xl mx-auto px-4">
        <PageTitle title="Todos" />

        <Input
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 mb-6"
        />

        <div className="flex flex-col pb-32">
          {isLoading ? (
            <CustomSkeleton />
          ) : (
            <TodoList
              todos={filteredTodos}
              onRemove={handleRemoveTodo}
              onMarkDone={handleMarkDone}
            />
          )}
        </div>
      </div>

      <div className="mt-6 h-24 bg-white flex justify-between items-center px-6 sticky bottom-0 border-t border-black/10">
        <div className="w-full max-w-4xl mx-auto px-4 py-4">
          <AddTodoInput onAdd={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}
