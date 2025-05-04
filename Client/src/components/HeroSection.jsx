import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-image.png"; 
import finastraImg from "../assets/finastra-img.png"; 

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 py-12 bg-linear-to-bl from-black to-primary via-secondary">
      <div className="z-10">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-400 text-sm md:text-base mb-2 font-roboto"
        >
          Organized By
        </motion.p>
        <motion.img
          src={finastraImg}
          alt="Finastra"
          className="h-15 md:h-10 lg:h-20 mx-auto mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        <motion.h1
          className="font-roboto font-bold text-[40px] md:text-5xl lg:text-6xl leading-snug md:leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Reimagine Banking:
          <br />
          Adapt. Evolve. Thrive.
        </motion.h1>

        <motion.div
          className="text-gray-300 text-sm text-[15px] font-medium mb-10 font-roboto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p>Date: 9th April 2025</p>
          <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
          <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
        </motion.div>

        <motion.img
          src={heroImg}
          alt="hero image"
          className="mx-auto w-full max-w-4xl rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
