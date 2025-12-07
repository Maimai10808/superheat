"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useFetchToDos } from "@/hooks/todos/useFetchToDos";

export default function DemoPage() {
  const { data, isLoading, isError, error } = useFetchToDos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!data) return null;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
