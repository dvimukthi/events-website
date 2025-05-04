import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { speakerDetails } from "../data";

const AutoScrollCarousel = ({
  speakers,
  direction = "left",
  duration = 20,
}) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const totalWidth = containerRef.current?.scrollWidth / 2 || 0;

    const startAnimation = () => {
      controls.start({
        x: direction === "left" ? `-${totalWidth}px` : `${totalWidth}px`,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();

    return () => controls.stop();
  }, [controls, direction, duration]);

  const handleMouseEnter = () => controls.stop();

  const handleMouseLeave = () => {
    const totalWidth = containerRef.current?.scrollWidth / 2 || 0;
    controls.start({
      x: direction === "left" ? `-${totalWidth}px` : `${totalWidth}px`,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        ref={containerRef}
        className="flex"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...speakers, ...speakers].map((speaker, index) => (
          <div key={index} className="w-[300px] flex-shrink-0 p-4">
            <div className="bg-white hover:bg-gray-300 transition-all duration-300 rounded-xl shadow-md p-4 text-center min-h-[350px] flex flex-col items-center justify-start">
              <img
                src={speaker.image}
                alt="speakers"
                className="w-[200px] h-[200px] object-cover mx-auto rounded-[20px] mb-3"
              />
              <h3 className="font-roboto text-[20px] font-semibold text-gray-800">
                {speaker.name}
              </h3>
              <p className="font-roboto font-medium text-sm text-gray">
                {speaker.title}
              </p>
              <p className="font-roboto text-sm text-gray-800 mt-[5px]">
                {speaker.company}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Speakers = () => {
  const firstFive = speakerDetails.slice(0, 8);
  const secondFive = speakerDetails.slice(8, 15);
  // const thirdFive = speakerDetails.slice(10, 15);

  return (
    <section id="speakers" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10 text-black font-roboto">
        Our Speakers
      </h2>
      <div className="flex flex-col gap-8">
        <AutoScrollCarousel
          speakers={firstFive}
          direction="left"
          duration={20}
        />
        <AutoScrollCarousel
          speakers={secondFive}
          direction="left"
          duration={20}
        />
        {/* <AutoScrollCarousel
          speakers={thirdFive}
          direction="left"
          duration={20}
        /> */}
      </div>
    </section>
  );
};

export default Speakers;
