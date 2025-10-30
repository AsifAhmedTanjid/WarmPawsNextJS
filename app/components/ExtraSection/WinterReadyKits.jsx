import Image from "next/image";
import React from "react";

const kitItems = [
  {
    id: 1,
    title: "Heated Pet Bed",
    description: "Keep your fur-friend cozy through icy nights.",
    image: "https://i.ibb.co.com/p6Zx12r9/matthew-manuel-Jz-Xb-WRfh-g-Q-unsplash.jpg",
    link: "/services/3",
  },
  {
    id: 2,
    title: "Snow Boots for Paws",
    description: "Anti-slip, waterproof boots to protect those paws.",
    image: "https://i.ibb.co.com/8n2Q8sfw/leon-seibert-cwy90f-RMbr-Q-unsplash-1.jpg",
    link: "/services/10",
  },
  {
    id: 3,
    title: "Winter Nutrition Pack",
    description: "Boost immunity and energy during cold months.",
    image: "https://i.ibb.co.com/mCYJVyth/71lh-G3-KChv-L-AC-SS450.jpg",
    link: "/services/4",
  },
];

const WinterReadyKit = () => {
  return (
    <section className="py-16 px-4 bg-[#eef9ff]">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
          Winter Ready Pet Kit
        </h2>
        <p className="mt-2 text-gray-600">
          Get your pet fully prepared for the cold with our top picks &
          services.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3  container mx-auto">
        {kitItems.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col h-full  bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              height={192}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col justify-between grow p-6">
           <div className="grow flex flex-col justify-start">
               <h3 className="text-xl font-semibold text-gray-800 grow flex flex-col justify-start">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 grow">{item.description}</p>
           </div>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  item.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" self-start mt-4 bg-[#6ec1ff] hover:bg-[#4ea8e3] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterReadyKit;
