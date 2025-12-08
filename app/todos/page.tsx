import Todos from "@/components/todos/Todos";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-full h-screen items-center justify-center mt-20">
          <Suspense fallback={<Loading />}>
            <Todos />
          </Suspense>
        </div>
      </main>
    </>
  );
}
