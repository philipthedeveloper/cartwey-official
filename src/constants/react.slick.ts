import videoA from "@/assets/videos/step_1.mp4";
import videoB from "@/assets/videos/step_2.mp4";
import videoC from "@/assets/videos/step_3.mp4";
import videoD from "@/assets/videos/step_4.mp4";
import videoE from "@/assets/videos/step_5.mp4";

export const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const stepVideos = [
  {
    url: videoA,
  },
  {
    url: videoB,
  },
  {
    url: videoC,
  },
  {
    url: videoD,
  },
  {
    url: videoE,
  },
];
