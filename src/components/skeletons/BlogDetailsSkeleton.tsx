import { Skeleton } from "@/components/ui/skeleton";

export function BlogDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-[300px] w-full rounded-xl" />

      <Skeleton className="h-8 w-3/4" />

      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-5/6" />

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
