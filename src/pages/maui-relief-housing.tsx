import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with { ssr: false } if they use browser APIs or client-specific code
const VideoCard = dynamic(
  () => import("~/app/_components/Maui-page/videocard"),
  { ssr: false },
);
const BenefitsSection = dynamic(
  () => import("~/app/_components/Maui-page/infocard"),
  { ssr: false },
);
const TaxBenefitsSection = dynamic(
  () => import("~/app/_components/Maui-page/pdfsection"),
  { ssr: false },
);
const LocalResourcesSection = dynamic(
  () => import("~/app/_components/Maui-page/localresources"),
  { ssr: false },
);
const MauiContactForm = dynamic(
  () => import("~/app/_components/Maui-page/mauiform"),
  { ssr: false },
);
const Layout = dynamic(() => import("~/app/_components/landingpage/layout"), {
  ssr: false,
});

// Example array of videos data
const videos = [
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title: "A message from David Waldbauer, President of Lima Charlie Inc",
    description:
      "Welcome to our 'Maui Relief Housing' initiative. In this video, our company president invites landlords, realtors, and homeowners in Maui to engage in a mutually beneficial partnership. We are seeking properties available for lease at fair market rent. Our aim is to provide essential housing for survivors and individuals facing various challenges on the island after the devastating fires. We're proud to work hand in hand with FEMA to ensure the success of their housing missions. With extensive experience in leasing and maintaining hundreds of units simultaneously for FEMA, we're well-equipped to provide efficient and reliable housing solutions during times of disaster.",
  },
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title:
      "A message from Attilio Leonardi, Local Realtor and host of “The Team Lally Real Estate Show”.",
    description:
      "Attilio Leonardi is a native of the North Shore of Oahu, and has dedicated his professional career to helping families buy, sell, and invest in real estate. Along with Adrienne Lally, he is the co-owner and co-leader for Team Lally, which is a part of Keller Williams Honolulu. Since 2005, they have grown the team into one of the largest in Hawaii.  In this video, Attilio offers a personal testimony about the founders of Lima Charlie, David Waldbauer and Ron Cedillo. Having a close personal connection with them, Attilio can vouch for their integrity and the legitimacy of their operations.  Their commitment to transparency, professionalism, and dedication to their mission is a testament to their credibility, making them trustworthy partners you can confidently collaborate with.",
  },
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title: "Unveiling Maui's Housing Initiatives with FEMA",
    description:
      "Catch a glimpse of the video featured on FEMA's social media, offering an introduction into the two groundbreaking housing programs underway in Maui. Lima Charlie Inc is thrilled to join forces with FEMA, working hand in hand to turn these initiatives into triumphs. ",
  },
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title: "The First Maui Survivor Housed in a FEMA Unit",
    description:
      "Discover the incredible story featured in the video shared by FEMA on their social media, showcasing Tony's resilience in the aftermath of the Maui fires. Having faced the challenges of living in his truck, Tony found hope through FEMA's Direct Lease Program. Lima Charlie Inc takes pride in being a key contributor to Tony's new beginning, offering support and solutions to rebuild lives.",
  },
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title:
      "A Conversation with Ron Cedillo, Vice President of Lima Charlie Inc and Matt Jachowski, Founder of Maui Hale Match",
    description:
      "Join Ron, Vice President of Lima Charlie in a compelling conversation with Maui Hale Match founder, Matt Jachowski, a dedicated Maui local who witnessed his community rallying together after fires devastated the island. Drawing on his background as a software engineer, Matt developed a platform to efficiently connect survivors with housing. During development, a housing needs survey yielded invaluable data, shedding light on the ongoing crisis. Watch the video to discover Maui's housing challenges and how you can contribute to this impactful initiative. To learn more, visit https://mauihalematch.org/ ",
  },
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title: "An incredible testimony from a tenant ",
    description:
      "Our mission to provide disaster recovery housing is driven by the desire to make a positive change in the lives of those we serve. We believe in actions speaking louder than words, and these heartfelt testimonials from our tenants tell a story of hope, resilience, and the impact of our commitment. We take pride in our role in assisting families, like the one featured here, and countless others in rebuilding their lives and finding stability. These narratives fuel our purpose and strengthen our unwavering commitment to making a lasting impact. Join us in these uplifting stories of transformation and renewal.",
  },
  {
    poster: "https://via.placeholder.com/150", // Placeholder image
    src: "/videos/somevid.mp4", // Direct link to video
    title: "Adrienne Lally and Attilio Leonardi",
    description:
      "Our mission was endorsed and introduced in Adrienne Lally and Attilio Leonardi's radio show. Our President, David Waldbauer, gave a brief introduction to our company and our collaboration with FEMA. In addition to that, he addressed and clarified some of the most common concerns that home owners have when leasing their property. ",
  },
  // ... more placeholder video objects
];

const MauiReliefHousing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  // Handle changing the video index
  const changeVideoIndex = (newIndex: number) => {
    const safeIndex = Math.max(0, Math.min(newIndex, videos.length - 1));
    setCurrentVideo(videos[safeIndex]);
  };

  // Change to the next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % videos.length;
      changeVideoIndex(newIndex);
      return newIndex;
    });
  };

  // Change to the previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + videos.length) % videos.length;
      changeVideoIndex(newIndex);
      return newIndex;
    });
  };

  // Update the current video when currentIndex changes
  useEffect(() => {
    changeVideoIndex(currentIndex);
  }, [currentIndex]);

  return (
    <Layout>
      <div className="container mx-auto p-4 ">
        <h1 className="my-4 text-center text-6xl font-bold">
          Maui Relief Housing
        </h1>
        {currentVideo && (
          <VideoCard
            video={currentVideo}
            onNext={nextVideo}
            onPrevious={prevVideo}
          />
        )}
      </div>
      <BenefitsSection />
      <TaxBenefitsSection />
      <LocalResourcesSection />
      <MauiContactForm />
    </Layout>
  );
};

export default MauiReliefHousing;
