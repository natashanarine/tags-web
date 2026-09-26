import Image from "next/image";
import type { Outfit } from "@/types/outfit";

export function MediaStage({ outfit }: { outfit: Outfit }) {
  return (
    <div className="relative min-h-0 flex-1 bg-neutral-100">
      {outfit.video ? (
        <video
          className="h-full w-full object-cover"
          src={outfit.video}
          poster={outfit.image}
          controls
          playsInline
          muted
        />
      ) : (
        <Image
          src={outfit.image}
          alt={outfit.title}
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
