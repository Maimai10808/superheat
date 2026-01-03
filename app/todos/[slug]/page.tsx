import TodoDetail from "@/components/todos/TodoDetail";
import Loading from "../loading";
import { Suspense } from "react";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const id = Number(slug);

  return (
    <Suspense fallback={<Loading />}>
      <TodoDetail id={id} />;
    </Suspense>
  );
}
