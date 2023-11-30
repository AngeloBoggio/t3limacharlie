import React, { useState } from "react";
import ReactPlayer from "react-player";

type VideoType = {
  poster: string;
  src: string;
  title: string;
  description: string;
};

type VideoCardProps = {
  video: VideoType;
  onNext: () => void;
  onPrevious: () => void;
};

const VideoCard: React.FC<VideoCardProps> = ({ video, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Call this function to start video playback
  const startPlayback = () => {
    setIsPlaying(true);
  };
  return (
    <div className="flex justify-center">
      <div className="mt-4 max-w-7xl">
        <div className="">
          <div className="video-card-container ">
            <div className="video-navigation flex items-center justify-center">
              <button
                onClick={onPrevious}
                aria-label="Previous video"
                className="arrow-button"
              >
                <svg
                  className="mr-8 h-10 w-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
              </button>

              <ReactPlayer
                url={video.src}
                controls
                playing={isPlaying}
                muted={true}
                width="80%"
                height="80%"
              />

              <button
                onClick={onNext}
                aria-label="Next video"
                className="arrow-button"
              >
                <svg
                  className="ml-8 h-10 w-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="flex max-w-5xl justify-center">
                <h3 className="mt-10 text-3xl font-bold">{video.title}</h3>
              </div>
            </div>
            <div className="video-info text-center">
              <div className="flex justify-center">
                <div className="mt-5 max-w-5xl border bg-red-100 p-10 text-lg shadow-2xl">
                  <p>{video.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
