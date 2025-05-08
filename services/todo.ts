import { TodoResponse } from "@/types/todo";

export const getTodos = async (): Promise<TodoResponse> => {
  try {
    const res = await fetch(`https://dummyjson.com/todos?limit=10`);
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
