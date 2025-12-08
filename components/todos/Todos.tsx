"use client";

import { useFetchTodos } from "../../hooks/useFetchTodos";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function DemoPage() {
  const { data, isLoading, isError, error } = useFetchTodos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!data) return null;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
