import { FeedStateFrame } from "@/components/feed/feed-state-frame";

export function FeedLoadingState() {
  return (
    <FeedStateFrame
      label="Loading feed"
      message="Fetching outfits from the catalog."
    />
  );
}
