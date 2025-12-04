"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PetSafetyPage() {
  return (
    <div className="min-h-screen bg-[#f0f8ff] py-10 px-4">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Winter Pet Safety Guidelines
          </h1>
          <p className="text-gray-600 text-lg lg:text-xl">
            Keep your furry friends warm, safe, and healthy throughout the chilly season.
          </p>
        </div>

        {/* Banner */}
        <div className="mb-16">
          <Image
            src="https://i.ibb.co.com/7NS4T3yQ/Winter-Pet-Safety-Guide-Protecting-Your-Furry-Friends-1024x854.png"
            alt="Winter Pet Care"
            width={1200}
            height={500}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
              Why Winter Care Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pets, especially small breeds, short-haired dogs, and senior animals,
              can struggle to stay warm in the winter. Proper winter care helps
              prevent hypothermia, frostbite, dry skin, and weakened immunity.
            </p>
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/PvVTFY4t/goclothod-pet-dog-knitted-scarf-and-hat-set-winter-neck-ear-warmer-small-hat-scarf-40741388550417-14.webp"
              width={500}
              height={350}
              alt="Pet with winter scarf"
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Safety Tips Grid */}
        <div className="mb-16">
          <h2 className="text-center text-3xl lg:text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Essential Safety Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Keep Them Warm",
                desc: "Use winter coats, sweaters, and warm bedding. Avoid leaving pets outside for long periods.",
                icon: "https://i.ibb.co.com/QjNf9Vc4/images-1.jpg",
              },
              {
                title: "Protect Their Paws",
                desc: "Cold ground, ice melt, and salt can harm paws. Use pet-safe balm or protective booties.",
                icon: "https://i.ibb.co.com/8ZscmGB/Keep-the-Dog-paws-clean-2-480x480.webp",
              },
              {
                title: "Maintain Proper Grooming",
                desc: "Regular grooming prevents matting, which reduces insulation and warmth retention.",
                icon: "https://i.ibb.co.com/KcSrtyYZ/images-3.jpg",
              },
              {
                title: "Stay Hydrated",
                desc: "Pets drink less in winter. Ensure fresh water is always available and not too cold.",
                icon: "https://i.ibb.co.com/TMLFfjzF/Untitled-design-10-grande.webp",
              },
              {
                title: "Avoid Heaters",
                desc: "Pets may get too close to heaters or fireplaces. Use protective grills and monitor them.",
                icon: "https://i.ibb.co.com/Rp1D21fy/71f-Bpz3y63-L-AC-UF894-1000-QL80.jpg",
              },
              {
                title: "Watch for Frostbite",
                desc: "Check ears, paws, and tails for pale or hard patches. Seek vet help if needed.",
                icon: "https://i.ibb.co.com/PsLDk0gw/images-5.jpg",
              },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center"
              >
                <Image
                  src={tip.icon}
                  alt={tip.title}
                  width={70}
                  height={70}
                  className="mx-auto mb-4 rounded-full object-cover w-20 h-20"
                />
                <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]">
                  {tip.title}
                </h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#6ec1ff] text-white p-12 rounded-2xl text-center shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#ffffff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Keep Your Pet Safe This Winter
          </h2>
          <p className="mb-6">
            For more winter care tips, grooming, and wellness services — join our pet community today!
          </p>

          <Link href="/contact">
            <button className="btn bg-white text-[#6ec1ff] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
