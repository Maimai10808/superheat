import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl font-semibold">Loading Products...</p>
      <div className="flex items-center gap-6">
        <Spinner className="size-10" />
      </div>
    </div>
  );
}
