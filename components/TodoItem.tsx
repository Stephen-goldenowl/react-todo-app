"use client";
import { Todo } from "@/types/todo";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoItem = ({
  todo,
  markDone,
  onRemove,
}: {
  todo: Todo;
  markDone: (id: number) => void;
  onRemove: (id: number) => void;
}) => {
  const [checked, setChecked] = useState(todo.completed);

  const handleChange = () => {
    setChecked(!checked);
    markDone(todo.id);
  };

  const removeHandler = () => {
    onRemove(todo.id);
  };

  return (
    <Card className="w-full max-w-xl mx-auto shadow-sm rounded-2xl p-2">
      <CardContent className="flex items-center justify-between py-1 px-2">
        <Checkbox
          className="cursor-pointer"
          checked={checked}
          onCheckedChange={handleChange}
        />
        <span
          className={`ml-4 text-base md:text-md truncate ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800 font-medium"
          }`}
        >
          {todo.todo}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={removeHandler}
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
