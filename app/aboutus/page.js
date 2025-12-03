"use client";

import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f0f8ff] py-10 px-4">
      <div className="container mx-auto">
       
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            About Us
          </h1>
          <p className="text-gray-600 text-lg lg:text-xl">
            We care for your pets like they are our own. Learn more about our mission, values, and team.
          </p>
        </div>

   
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="https://i.ibb.co.com/zhBfJd5k/joe-caione-KVeog-BZzl4-M-unsplash.jpg"
              alt="Happy pets"
              width={400}
              height={200}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              To provide top-quality winter care services for pets, ensuring their comfort, safety, and happiness all season long. From grooming to wellness, we go the extra mile.
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To be the most trusted pet service platform, connecting pet owners with reliable, caring professionals who treat every pet like family.
            </p>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl lg:text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                Compassion
              </h3>
              <p className="text-gray-600">
                Every pet deserves care, love, and attention. We ensure all services are delivered with compassion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl lg:text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                Professionalism
              </h3>
              <p className="text-gray-600">
                Our team consists of trained professionals who prioritize safety, hygiene, and quality in all services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl lg:text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly improve our offerings, introducing modern solutions for winter pet care and comfort.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Asif Ahmed", role: "Founder & CEO", image: "https://i.ibb.co.com/zT6VJwBp/1750676584597.jpg" },
              { name: "Jhankar Mahbub", role: "Head Veterinarian", image: "https://i.ibb.co.com/nMN9rHXt/FB-IMG-1734106780258-1024x1024-jpg-bv-resized-mobile-jpg-bv.webp" },
              { name: "Mike Lee", role: "Pet Grooming Specialist", image: "https://i.ibb.co.com/LdH46WKY/Screenshot-2025-10-25-124736.png" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-[#6ec1ff] text-white p-12 rounded-2xl text-center shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#ffffff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Join Our Pet Community
          </h2>
          <p className="mb-6">
            Connect with us for winter pet care tips, promotions, and exclusive services.
          </p>
          <button className="btn bg-white text-[#6ec1ff] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
