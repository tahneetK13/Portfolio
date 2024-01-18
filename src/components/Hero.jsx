import React, { useRef, useEffect } from "react";
import { animate, stagger } from "motion";
import Button from "./Button";
import { Link } from "react-scroll";

const AnimatedWord = ({ title }) => {
  const animatedWordContainerRef = useRef(null);
  const animatedWordRef = useRef(null);

  useEffect(() => {
    const containerRef = animatedWordContainerRef.current;
    const wordRef = animatedWordRef.current;

    if (!containerRef || !wordRef) {
      return;
    }

    const handleAnimation = () => {
      animate(
        wordRef,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.8,
          delay: 0.8,
        }
      );
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        handleAnimation();
        observer.disconnect(); // Cleanup after animation
      }
    });

    observer.observe(containerRef);

    return () => {
      // Cleanup on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <span className="inline-block overflow-hidden leading-[8vw]" ref={animatedWordContainerRef}>
      <span className="inline-block translate-y-28 align-middle text-4xl uppercase text-white opacity-0 sm:text-8xl" ref={animatedWordRef}>
        {title}
      </span>
    </span>
  );
};

const HEADER = ["T", "a", "h", "n", "e", "e", "t", "\u00A0", "K", "a", "n", "w", "a", "l"];

const AnimatedLetters = () => {
  const letterContainerRef = useRef(null);

  useEffect(() => {
    const containerRef = letterContainerRef.current;

    if (!containerRef) {
      return;
    }

    const handleAnimation = () => {
      const letters = document.querySelectorAll(".animated-letter");

      animate(
        letters,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.2,
          delay: stagger(0.1),
        }
      );
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        handleAnimation();
        observer.disconnect(); // Cleanup after animation
      }
    });

    observer.observe(containerRef);

    return () => {
      // Cleanup on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <span className="inline-block overflow-hidden leading-[8vw]" ref={letterContainerRef}>
      {HEADER.map((headerItem, index) => (
        <span
          className="animated-letter inline-block translate-y-28 align-middle text-4xl uppercase text-white opacity-0 sm:text-8xl"
          key={headerItem + index}
        >
          {headerItem}
        </span>
      ))}
    </span>
  );
};

const Hero = React.forwardRef(function () {
  return (
    <div id="home" className="hero-box relative min-h-screen h-[calc(100vh-5rem)]">
      <main className="container mx-auto flex h-full items-center justify-center">
        <section className="mx-auto flex flex-col text-center align-middle">
          <AnimatedWord title="I'm" />
          <AnimatedLetters />
          <AnimatedWord title="A Frontend developer" />
          <div className="my-20">
          <Link
              to="about">
               <Button>Scroll to know more</Button>
              
            </Link>
      
          </div>
        </section>
      </main>
    </div>
  );
});

export default Hero;
