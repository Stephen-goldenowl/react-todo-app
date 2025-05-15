"use client";
import { Todo } from "@/types/todo";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const TodoItem = ({
  todo,
  markDone,
  onRemove,
  onUpdate,
}: {
  todo: Todo;
  markDone: (id: number) => void;
  onRemove: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void;
}) => {
  const [checked, setChecked] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleChange = () => {
    setChecked(!checked);
    markDone(todo.id);
  };

  const removeHandler = () => {
    onRemove(todo.id);
  };

  const handleSave = () => {
    if (editText.trim() && editText !== todo.todo) {
      onUpdate(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.todo);
    setIsEditing(false);
  };

  return (
    <Card className="w-full max-w-xl mx-auto shadow-sm rounded-2xl p-2">
      <CardContent className="flex items-center justify-between py-1 px-2 gap-2">
        <Checkbox
          className="cursor-pointer"
          checked={checked}
          onCheckedChange={handleChange}
        />

        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            className="flex-1 ml-4"
          />
        ) : (
          <span
            className={`ml-4 flex-1 text-base md:text-md truncate ${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-800 font-medium"
            }`}
          >
            {todo.todo}
          </span>
        )}

        <div className="flex gap-1">
          {isEditing ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSave}
                className="text-green-500 hover:text-green-700"
              >
                <Check className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
              className="text-yellow-500 hover:text-yellow-700"
            >
              <Pencil className="w-5 h-5" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={removeHandler}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
