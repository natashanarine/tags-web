/**
 * Layout spacer for the feed stage. The shared 3D avatar renders once behind the feed.
 */
export function MediaStage() {
  return (
    <div
      aria-hidden
      className="relative min-h-0 w-full flex-1 pointer-events-none pb-[min(22vh,11rem)] md:pb-[min(20vh,10rem)]"
    />
  );
}
