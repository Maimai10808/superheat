"use client";

import { useQuery } from "@tanstack/react-query";

export type Album = {
  userId: number;
  id: number;
  title: string;
};

async function fetchAlbums(): Promise<Album[]> {
  const url = "https://jsonplaceholder.typicode.com/albums";

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

  const data = (await res.json()) as Album[];
  console.log("[useFetchAlbums] data:", data);
  return data;
}

export function useFetchAlbums() {
  return useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
  });
}
