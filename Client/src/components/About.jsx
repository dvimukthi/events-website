import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl md:text-4xl font-roboto font-bold mb-6 text-white">
          About Finastra
        </h2>

        <p className="text-gray font-roboto">
          Finastra is a global provider of financial services software
          applications across Lending, Payments, Treasury and Capital Markets,
          and Universal (retail and digital) Banking. Committed to unlocking the
          potential of people, businesses and communities everywhere, its vision
          is to accelerate the future of Open Finance through technology and
          collaboration, and its pioneering approach is why it is trusted by
          ~8,100 financial institutions, including 45 of the world's top 50
          banks.
        </p>
        <p className="text-gray font-roboto mt-[20px]">
          For more information, visit
          <span className="ml-[5px]">
            <a link="www.finastra.com" className="underline cursor-pointer text-secondary">
              www.finastra.com
            </a>
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default About;
