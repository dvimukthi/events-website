import React from "react";
import { motion } from "framer-motion";
import { agendaItems } from "../data"; 

const Agenda = () => {
  return (
    <section id="agenda" className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center font-roboto text-black">
          Event Agenda
        </h2>
        <div className="space-y-8">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6 border border-pink-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="text-xl font-roboto font-medium mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <span className="text-gray-600"> {item.time} </span>
                 — {item.title}
              </div>
              <p className="font-roboto text-gray text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Agenda;
