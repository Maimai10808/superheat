"use client";

import { useFetchTodos } from "../../hooks/useFetchTodos";
import type { ToDo } from "@/types/ToDo";

export default function TodoDetail({ id }: { id: number }) {
  const { data, isLoading, isError, error } = useFetchTodos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!data) return null;

  if (Number.isNaN(id)) return <div>Invalid id: {id}</div>;

  const todo = data.find((item: ToDo) => item.id === id);
  if (!todo) return <div>Can&apos;t find todo with id {id}</div>;

  return (
    <div className="w-full h-screen">
      <p className="text-black">Todo {todo.id}</p>
      <p className="text-black">Title: {todo.title}</p>
      <p className="text-black">Completed: {todo.completed ? "YES" : "NO"}</p>
    </div>
  );
}
