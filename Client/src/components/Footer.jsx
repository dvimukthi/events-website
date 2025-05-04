import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";
import mail from "../assets/Icons/mail.png";
import location from "../assets/Icons/location.png";
import phone from "../assets/Icons/phone.png"; 
import Award1 from "../assets/Awards/award1.png";
import Award2 from "../assets/Awards/award2.png";
import Award3 from "../assets/Awards/award3.png";
import Award4 from "../assets/Awards/award4.png";
import { socials } from "../data/index.js";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="bg-black text-white py-12 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-roboto font-semibold mb-4">
            Cogent Solutions™
          </h3>
          <p className="text-sm font-roboto text-gray-300 mb-4">
            Through our conferences we transform your business challenges into
            opportunities. Our clients and customers are leading government
            entities and the fortune 500 companies.
          </p>
          <img src={logo} alt="logo" className="h-12 mt-2" />
        </div>

        <div>
          <h3 className="text-xl font-roboto font-semibold mb-4">Our office</h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-start gap-2">
              <img src={location} alt="location" />
              <span>
                <strong>Middle East & Africa HQ</strong>
                <br />
                Office No: 209, The Metropolis Tower
                <br />
                Business Bay, Dubai, United Arab Emirates
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={location} alt="location" />
              <span>
                <strong>Asia Pacific HQ</strong>
                <br />
                7th floor Green Lanka Tower, Colombo, Sri Lanka
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={location} alt="location" />
              <span>
                <strong>Saudi Arabia HQ</strong>
                <br />
                Riyadh, Saudi Arabia
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={phone} alt="phone" />
              +966 55 000 0000
            </li>
            <li className="flex items-center gap-2">
              <img src={mail} alt="mail" />
              <a
                href="mailto:partnerships@cogentsolutions.ae"
                className="hover:underline text-secondary"
              >
                partnerships@cogentsolutions.ae
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Awards</h3>
          <div className="flex flex-wrap gap-4">
            <img src={Award1} alt="Award 1" className="h-20" />
            <img src={Award2} alt="Award 2" className="h-20" />
            <img src={Award3} alt="Award 3" className="h-20" />
            <img src={Award4} alt="Award 4" className="h-20" />
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm font-roboto text-gray-400 gap-4">
        <p>© 2025 Cogent Solutions Event Management LLC. All Right Reserved</p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-secondary transition"
            >
              <img src={social.image} alt={social.title} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
