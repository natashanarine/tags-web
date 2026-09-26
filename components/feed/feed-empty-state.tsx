import { FeedStateFrame } from "@/components/feed/feed-state-frame";

export function FeedEmptyState() {
  return (
    <FeedStateFrame
      label="No outfits available"
      message="There are no looks to show right now."
    />
  );
}
