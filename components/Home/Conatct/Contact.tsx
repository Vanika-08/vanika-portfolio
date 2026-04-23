"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill all required fields.");
    return;
  }

  setLoading(true);

  emailjs
    .send("service_c6uir8d", "template_yq0q6iw", form, "uUEK8KnCuRDfVKzk6")
    .then(
      () => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setLoading(false);
      },
      () => {
        toast.error("Failed to send message. Please try again.");
        setLoading(false);
      }
    );
};
  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-16 h-16 animate-spin">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 30}deg) translate(0, -28px)`,
                  opacity: 1 - i / 12,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div className="pt-16 pb-16">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
              Schedule a call with me to see if I can help
            </h1>
            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>

            <div className="mt-7">
              <div className="flex items-center space-x-3 mb-4">
                <BiPhone className="w-9 h-9 text-cyan-300" />

                <p className="text-xl font-bold text-gray-400">
                  +91 7015973469
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiEnvelope className="w-9 h-9 text-cyan-300" />

                <p className="text-xl font-bold text-gray-400">
                  vanikajain213@gmail.com
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiMap className="w-9 h-9 text-cyan-300" />

                <p className="text-xl font-bold text-gray-400">Delhi, India</p>
              </div>
            </div>
            <div className="flex items-center mt-8 space-x-3">
              <a
                href="https://www.linkedin.com/in/codewithvanika"
                target="_blank"
              >
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
                  <FaLinkedinIn className="text-white w-6 h-6" />
                </div>
              </a>

              <a href="mailto:vanikajain213@gmail.com">
                <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-300">
                  <BiEnvelope className="text-white w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
          <div
            id="contact"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="md:p-10 p-5 bg-[#131332] rounded-lg"
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full"
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
