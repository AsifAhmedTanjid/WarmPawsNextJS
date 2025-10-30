// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
"use client"

import WinterServicesCard from "./WinterServicesCard";

// import WinterServicesCard from "./winterServicesCard";

const TopWinterServices = ({ services }) => {
  //   const [services, setServices] = useState([]);

  //   useEffect(() => {
  //     fetch("/data.json")
  //       .then((res) => res.json())
  //       .then((data) => setServices(data));
  //   }, []);
  const popularServices = services
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div className="bg-[#f0f8ff] min-h-screen py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
        Popular Winter Care Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {popularServices.map((service) => {
          return (
            <WinterServicesCard
              service={service}
              key={service.serviceId}
            ></WinterServicesCard>
          );
        })}
      </div>
    </div>
  );
};

export default TopWinterServices;
