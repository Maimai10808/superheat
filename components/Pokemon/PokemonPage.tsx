"use client";

import { Album, useFetchAlbums } from "@/hooks/pokemon/useFetchAlbums";

export default function PokemonPage() {
  const { data, isLoading, isError, error } = useFetchAlbums();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!data) return null;

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {data.map((album: Album) => (
          <li key={album.id}>
            {album.id}. {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
