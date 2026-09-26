type MediaPlaceholderProps = {
  title: string;
};

export function MediaPlaceholder({ title }: MediaPlaceholderProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-neutral-100 px-8 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Preview</p>
      <p className="max-w-xs text-sm leading-relaxed text-neutral-600">{title}</p>
    </div>
  );
}
