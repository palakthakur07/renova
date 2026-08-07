import { Skeleton } from "@/components/ui/Skeleton";

/** A card-shaped skeleton — for grids of AnimatedCard while data is pending. */
export function SkeletonCard() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
      <Skeleton className="mb-4 h-8 w-8 rounded-full" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}
