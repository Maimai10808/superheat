"use client";
import Todos from "@/components/todos/Todos";
import { useFetchToDos } from "@/hooks/todos/useFetchToDos";

export default function Home() {
  const { data, isLoading, isError, error } = useFetchToDos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!data) return null;

  return (
    <>
      <main>
        <div className="w-full h-screen items-center justify-center mt-20">
          <Todos />
        </div>
      </main>
    </>
  );
}
