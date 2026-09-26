"use client";

import Image from "next/image";
import { useState } from "react";
import { FeedMediaUnavailableState } from "@/components/feed/feed-media-unavailable-state";
import { hasMediaPath } from "@/lib/outfit-media";
import type { Outfit } from "@/types/outfit";

export function FeedMedia({
  outfit,
  priority = false,
}: {
  outfit: Outfit;
  priority?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const imageSrc = hasMediaPath(outfit.image) ? outfit.image : null;
  const videoSrc = hasMediaPath(outfit.video) ? outfit.video : null;
  const showVideo = Boolean(videoSrc) && !videoFailed;
  const showImage = Boolean(imageSrc) && !imageFailed;

  if (showVideo) {
    return (
      <video
        className="h-full w-full object-cover object-center"
        src={videoSrc ?? undefined}
        poster={showImage ? imageSrc ?? undefined : undefined}
        controls
        playsInline
        muted
        onError={() => setVideoFailed(true)}
      />
    );
  }

  if (videoFailed && !showImage) {
    return <FeedMediaUnavailableState title={outfit.title} />;
  }

  if (!showImage || !imageSrc) {
    return <FeedMediaUnavailableState title={outfit.title} />;
  }

  return (
    <Image
      src={imageSrc}
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
