import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
};

/** Shared editorial column: left-aligned content within max-w-6xl. */
export function SectionShell({ children, className }: SectionShellProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col items-start px-6 text-left",
        className,
      )}
    >
      {children}
    </div>
  );
}
