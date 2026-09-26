import Image from "next/image";
import type { OutfitMedia } from "@/types/outfit";

export function MediaStage({ media }: { media: OutfitMedia }) {
  return (
    <div className="relative min-h-0 flex-1 bg-neutral-100">
      {media.kind === "video" ? (
        <video
          className="h-full w-full object-cover"
          src={media.src}
          poster={media.posterSrc}
          controls
          playsInline
          muted
        />
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          unoptimized
          priority
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover"
        />
      )}
    </div>
  );
}
