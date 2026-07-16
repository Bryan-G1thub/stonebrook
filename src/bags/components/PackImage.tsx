import type { PackCatalogItem } from "@/bags/lib/types";

type PackImageProps = {
  pack: Pick<PackCatalogItem, "name" | "imageUrl" | "imageData">;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-20 w-20",
};

export function PackImage({ pack, size = "md", className = "" }: PackImageProps) {
  const src = pack.imageData || pack.imageUrl;

  if (src) {
    return (
      <img
        src={src}
        alt={pack.name}
        className={`${sizeClasses[size]} shrink-0 rounded-md border border-zinc-200 object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} flex shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 text-xs font-medium text-zinc-400 ${className}`}
      title={pack.name}
    >
      {pack.name.slice(0, 2).toUpperCase()}
    </div>
  );
}
