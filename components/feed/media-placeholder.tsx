type MediaPlaceholderProps = {
  title: string;
};

export function MediaPlaceholder({ title }: MediaPlaceholderProps) {
  return (
    <div className="flex h-full w-full min-w-0 flex-col items-center justify-center gap-3 bg-neutral-100 px-6 text-center md:px-10 xl:px-12">
      <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
        Preview
      </p>
      <p className="max-w-xs text-sm leading-relaxed text-neutral-600 md:max-w-sm md:text-base">
        {title}
      </p>
    </div>
  );
}
