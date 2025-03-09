interface PostLoaderProps {
  className?: string;
  lines?: number;
}

export function PostLoader({ className, lines = 2 }: PostLoaderProps) {
  return (
    <div
      className={"w-full rounded-md bg-gray-200 overflow-hidden " + className}
    >
      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-300  animate-pulse" />
          <div className="h-4 w-24 bg-gray-300  rounded animate-pulse" />
        </div>

        <div className="space-y-2 pt-2">
          {Array(lines)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-300  rounded animate-pulse"
                style={{
                  width: `${Math.max(70, Math.min(95, 85 + i * 5))}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
