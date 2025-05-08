import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AddTodoInputProps = {
  onAdd: (title: string) => void;
};

export default function AddTodoInput({ onAdd }: AddTodoInputProps) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center gap-2 w-full max-w-xl mx-auto">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a new todo..."
        className="rounded-full p-4 h-12"
      />
      <Button onClick={handleAdd} className="rounded-full cursor-pointer">
        Add
      </Button>
    </div>
  );
}
