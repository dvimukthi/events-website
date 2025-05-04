import React from "react";
import { motion } from "framer-motion";
import { overviewItems } from "../data"; 
import image from "../assets/overview-image.png"; 

const Overview = () => {
  return (
    <section
      id="overview"
      className="bg-black py-16 px-4 md:px-8 lg:px-16 text-white space-y-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="font-roboto text-2xl md:text-4xl font-bold mb-6">
          Event Overview
        </h2>
        <p className="font-roboto md:text-lg text-gray-300 leading-relaxed">
          Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking
          Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive
          event is designed to help you navigate and excel in the rapidly
          evolving banking landscape.
        </p>
        <p className="font-roboto md:text-lg text-gray-300 leading-relaxed mt-4">
          Our forum will bring together business and technology experts,
          industry leaders, and visionaries to share their insights on the
          latest trends and challenges in the banking sector. You'll gain
          valuable knowledge on topics such as Generative AI, the impact of
          volatility, globalization challenges, persistent supply chain issues,
          recession threats, shifts in competitive dynamics, and evolving
          regulations.
        </p>
        <p className="font-roboto md:text-lg text-gray-300 leading-relaxed mt-4">
          Each session will delve into the implications, challenges, and
          opportunities these topics present, providing you with practical
          strategies to leverage the latest technologies and capitalize on
          emerging opportunities. This is a unique chance to learn from the best
          in the industry, stay ahead of the curve, and connect with fellow
          retail banking professionals.
        </p>
        <p className="font-roboto md:text-lg text-gray-300 leading-relaxed mt-4">
          Don't miss this opportunity to enhance your knowledge, skills, and
          network in the finance and banking sector. Register today and secure
          your place at this must-attend event!
        </p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-[#3f0d93] via-purple-700 to-purple-600 rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          src={image}
          alt="Conference Visual"
          className="rounded-2xl shadow-lg w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-white text-2xl md:text-3xl font-segoe font-semibold mb-6">
            Top Reasons Why This is the Only Conference You Need to Attend in
            2025
          </h2>
          <ul className="space-y-4">
            {overviewItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-white font-segoe md:text-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img
                  src={item.image}
                  alt="icon"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Overview;
