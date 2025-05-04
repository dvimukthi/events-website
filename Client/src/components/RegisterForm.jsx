import React, { useState } from "react";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    phone: "",
    email: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registered successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          company: "",
          phone: "",
          email: "",
          website: "",
        });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to register");
    }
  };

  return (
    <section
      id="register"
      className="bg-gradient-to-r from-primary to-secondary py-20 px-4 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-white text-4xl font-roboto font-bold mb-4">
            Register Now
          </h2>
          <p className="text-white text-lg font-roboto">
            Join us for an unforgettable experience!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
                />
              </div>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="website"
                placeholder="Company Website URL"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-1 border-secondary bg-black bg-opacity-50 text-white placeholder-gray-300"
              />

              <div className="flex items-start gap-2 text-white text-sm">
                <input
                  type="checkbox"
                  required
                  className="mt-1 cursor-pointer"
                />
                <span>
                  By registering, you agree to our{" "}
                  <a href="#" className="underline text-secondary">
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-pink-700 text-white cursor-pointer font-semibold py-3 rounded-lg transition duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterForm;
