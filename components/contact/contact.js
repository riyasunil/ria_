"use client";

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

    return (
      
    <section
      id="contact"
      className="min-h-screen border flex flex-col justify-center items-start p-8 md:p-16 snap-start"
    >
      <h2 className="text-4xl font-bold mb-8">text me !</h2>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full p-2 rounded bg-gray-800 text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition"
        >
          Send Message
        </button>

        {status && <p className="mt-2 text-gray-400">{status}</p>}
      </form>

      {/* Social Media Icons */}
      <div className="mt-8 flex gap-6 flex-row">
        <a
          href="https://github.com/riyasunil"
          target="_blank"
          className="text-gray-300 hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/riyasunil"
          target="_blank"
          className="text-gray-300 hover:text-white transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/riasunil_"
          target="_blank"
          className="text-gray-300 hover:text-white transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
