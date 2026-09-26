import { FeedStateFrame } from "@/components/feed/feed-state-frame";

type FeedMediaUnavailableStateProps = {
  title?: string;
};

export function FeedMediaUnavailableState({ title }: FeedMediaUnavailableStateProps) {
  return (
    <FeedStateFrame
      label="Media unavailable"
      message="This outfit preview is not available yet."
      detail={title}
    />
  );
}
