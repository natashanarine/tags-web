"use client";

import Image from "next/image";
import { useState } from "react";
import type { Outfit } from "@/types/outfit";
import { MediaPlaceholder } from "@/components/feed/media-placeholder";

export function FeedMedia({
  outfit,
  priority = false,
}: {
  outfit: Outfit;
  priority?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasVideo = Boolean(outfit.video);
  const hasImage = Boolean(outfit.image) && !imageFailed;

  if (hasVideo) {
    return (
      <video
        className="h-full w-full object-cover object-center"
        src={outfit.video ?? undefined}
        poster={hasImage ? outfit.image : undefined}
        controls
        playsInline
        muted
      />
    );
  }

  if (!hasImage) {
    return <MediaPlaceholder title={outfit.title} />;
  }

  return (
    <Image
      src={outfit.image}
      alt={outfit.title}
      fill
      unoptimized
      priority={priority}
      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 420px, 480px"
      className="object-cover object-center md:object-[center_45%] xl:object-[center_40%]"
      onError={() => setImageFailed(true)}
    />
  );
}
