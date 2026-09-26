type MediaPlaceholderProps = {
  title: string;
};

export function MediaPlaceholder({ title }: MediaPlaceholderProps) {
  return (
    <div
      aria-label={`Media placeholder for ${title}`}
      className="flex h-full w-full min-w-0 flex-col justify-end bg-neutral-100 p-6 md:p-8"
    >
      <div className="space-y-2 border border-neutral-300 bg-white p-4">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
          Media pending
        </p>
        <p className="text-sm text-neutral-600">{title}</p>
      </div>
    </div>
  );
}
