import React from "react";
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
  return (
    <div className="video-card-container">
      <div className="video-navigation flex items-center justify-center">
        <button
          onClick={onPrevious}
          aria-label="Previous video"
          className="arrow-button"
        >
          <svg
            className="mr-8 h-6 w-6 text-gray-800 dark:text-white"
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
        <div className="video-wrapper flex-grow">
          <ReactPlayer
            url={video.src}
            controls
            light={video.poster}
            playIcon={<button>Play</button>} // Customize the play icon as needed
            width="100%"
            height="100%"
          />
        </div>
        <button
          onClick={onNext}
          aria-label="Next video"
          className="arrow-button"
        >
          <svg
            className="ml-8 h-6 w-6 text-gray-800 dark:text-white"
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
      <div className="video-info text-center">
        {" "}
        {/* This will contain the title and description */}
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
