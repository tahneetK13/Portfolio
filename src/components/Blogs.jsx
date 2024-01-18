import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animate, inView, stagger } from "motion";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

const CardAnimation = ({ children }) => {
  const cardContainerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardContainerRef.current) return;

    inView(cardContainerRef.current, () => {
      if (!cardRef.current) return;

      animate(
        cardRef.current,
        {
          opacity: 1,
          transform: "none",
        },
        { duration: 2, delay: stagger(1) }
      );
    });

    return () => {};
  }, []);

  return (
    <li className="inline-block w-full overflow-hidden" ref={cardContainerRef}>
      <span className="inline-block w-full -translate-x-96 opacity-0" ref={cardRef}>
        {children}
      </span>
    </li>
  );
};

const PublishedCard = ({ title, category, contentLink, imageUrl }) => (
  <section className="w-full h-full flex justify-center items-center">
    <div className="w-full sm:w-3/4 h-80 sm:h-96 opacity-0.5 transform-none mb-4 flex flex-col items-center justify-center rounded-lg border border-lilic/30 bg-lilic/10 p-4 sm:gap-4 mt-2">
      <div className="w-full h-3/4 mb-2 overflow-hidden">
        <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="text-base text-lilic sm:text-xl mt-2">{title}</h4>
        <div className="flex items-center text-sm text-gray-400 sm:text-base">
          <span>{category}</span>
        </div>
        <div className="mt-2">
          <a
            href={contentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:text-blue-400"
          >
            Read Article →
          </a>
        </div>
      </div>
    </div>
  </section>
);


const Published = React.forwardRef(function () {
  const publishedPosts = [
    {
      title: "Importance of Usability Testing in Mobile App Development",
      contentLink: "https://dev.to/tahneetkanwal/the-importance-of-usability-testing-in-mobile-app-development-fn9",
      imageUrl: Blog1,
    },
    {
      title: "How Can You Overcome Manual Testing Challenges in Software Development?",
      contentLink: "https://medium.com/@tahneetkanwal01/how-can-you-overcome-manual-testing-challenges-in-software-development-a21c7918455a",
      imageUrl: Blog2,
    },
    {
      title: "Exploring the Challenges of Cross-Platform Mobile App Testing",
      contentLink: "https://dev.to/tahneetkanwal/exploring-the-challenges-of-cross-platform-mobile-app-testing-and-how-to-overcome-them-16ph",
      imageUrl: Blog3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main id="blogs" className="hero2-box w-full h-screen flex flex-col justify-center items-center">
    <section className="container relative mx-auto flex flex-col items-center justify-center text-white sm:w-1/2 h-full">
      <div className="w-full  mb-2 mt-2"> 
        <p className="flex justify-center items-center text-5xl font-bold text-sky  border-b-2 border-sky">
          Blogs
        </p>
      </div>
<p className="py-6 flex justify-center items-center text-white text-xl">Swipe left to explore my latest blog posts</p>
      <div className="w-full h-full">
        <Slider {...settings}>
          {publishedPosts.map((post, index) => (
            <CardAnimation key={index}>
              <PublishedCard {...post} />
            </CardAnimation>
          ))}
        </Slider>
      </div>
    </section>
  </main>
);
});

export default Published;
