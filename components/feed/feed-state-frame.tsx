type FeedStateFrameProps = {
  label: string;
  message: string;
  detail?: string;
  className?: string;
};

export function FeedStateFrame({
  label,
  message,
  detail,
  className = "",
}: FeedStateFrameProps) {
  return (
    <div
      className={`flex h-full w-full min-w-0 items-center justify-center bg-neutral-100 p-6 md:p-8 ${className}`}
    >
      <div className="w-full max-w-xs space-y-2 border border-black bg-white p-5">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
          {label}
        </p>
        <p className="text-sm text-black">{message}</p>
        {detail ? <p className="text-sm text-neutral-600">{detail}</p> : null}
      </div>
    </div>
  );
}
