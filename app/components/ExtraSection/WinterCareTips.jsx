"use client"
import React, { useState } from "react";

const tips = [
  {
    id: 1,
    title: "Keep Pets Warm",
    description:
      "Provide cozy beds, sweaters, or jackets to protect pets from cold temperatures.",
  },
  {
    id: 2,
    title: "Hydrate & Feed Well",
    description:
      "Ensure pets have access to fresh water and high-quality nutritious meals to maintain energy.",
  },
  {
    id: 3,
    title: "Protect Paws",
    description:
      "Use paw balm or boots to prevent cracking and irritation from ice and snow.",
  },
  {
    id: 4,
    title: "Limit Outdoor Time",
    description:
      "Shorten walks in extremely cold weather and monitor pets for signs of frostbite.",
  },
];

const WinterCareTips = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#e0f2ff] py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]">
        Winter Care Tips for Pets
      </h2>

      <div className="container mx-auto space-y-4">
        {tips.map((tip, index) => (
          <div
            key={tip.id}
            className={`collapse collapse-arrow bg-base-100 border border-base-300 duration-0 ${
              openIndex === index ? "collapse-open" : ""
            }`}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="collapse-title font-semibold">{tip.title}</div>
            <div className="collapse-content text-sm">{tip.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;
