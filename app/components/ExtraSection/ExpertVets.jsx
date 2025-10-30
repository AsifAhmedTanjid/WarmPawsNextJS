import Image from "next/image";
import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Abdur Rakib",
    specialty: "Canine Specialist",
    image: "https://i.ibb.co.com/zT6VJwBp/1750676584597.jpg"
  },
  {
    id: 2,
    name: "Dr. Azizul Islam Milton",
    specialty: "Feline Specialist",
    image: "https://i.ibb.co.com/LdH46WKY/Screenshot-2025-10-25-124736.png"
  },
  {
    id: 3,
    name: "Dr. Asif Ahmed Tanjid",
    specialty: "Exotic Pets",
    image: "https://i.ibb.co.com/zVTgPJC0/Screenshot-2025-10-25-124246.png"
  },
  {
    id: 4,
    name: "Dr. Jhankar Mahbub",
    specialty: "Emergency Care",
    image: "https://i.ibb.co.com/nMN9rHXt/FB-IMG-1734106780258-1024x1024-jpg-bv-resized-mobile-jpg-bv.webp"
  }
];

const ExpertVets = () => {
  return (
    <section className="py-12 px-4 bg-[#f0f8ff]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff]">
         Meet Our Expert Vets 
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 container mx-auto">
        {vets.map((vet) => (
          <div key={vet.id} className="bg-white rounded-xl shadow p-5 text-center hover:shadow-lg transition">
            <Image
              src={vet.image}
              alt={vet.name}
              height={128}
              width={128}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{vet.name}</h3>
            <p className="text-gray-600">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
