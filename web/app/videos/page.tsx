import type { Metadata } from "next";
import { getVideos } from "@/lib/content";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Video demos, lectures, and research presentations by Eros Montin.",
};

export default function VideosPage() {
  const videos = getVideos();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="section-title">Videos &amp; Demos</h1>
        <p className="section-subtitle">
          Research demonstrations, lecture recordings, and software walkthroughs.
        </p>
      </div>

      {videos.length === 0 ? (
        <div className="text-center py-24 text-[var(--muted)]">
          <p className="text-lg font-medium mb-2">Coming soon</p>
          <p className="text-sm">
            Video content will be added here.{" "}
            <a
              href="https://github.com/erosmontin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--blue-accent)] hover:underline"
            >
              Follow on GitHub
            </a>{" "}
            for updates.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
