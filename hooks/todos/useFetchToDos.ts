"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchToDos(): Promise<ToDo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

  const data = (await res.json()) as ToDo[];
  console.log("[useXXX] data:", data);
  return data;
}

export function useFetchToDos() {
  return useQuery<ToDo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchToDos,
  });
}
