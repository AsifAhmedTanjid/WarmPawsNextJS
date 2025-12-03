"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f0f8ff] py-10 px-4">
      <Toaster position="top-center" />

      <div className="container mx-auto">
      
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <div>
            <Image
              src="https://i.ibb.co/Vp30Tq6J/andrew-s-ouo1hbiz-Wwo-unsplash.jpg" 
              alt="Happy pets"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

   
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="input input-bordered w-full h-32 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full btn bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] text-gray-800 font-semibold"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 text-gray-700 space-y-2">
              <p>
                <strong>Email:</strong> info@winterpets.com
              </p>
              <p>
                <strong>Phone:</strong> +880 1234 567890
              </p>
              <p>
                <strong>Address:</strong> Sector 12, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
