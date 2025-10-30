import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosStar } from "react-icons/io";
// import { Link } from "react-router";

const WinterServicesCard = ({ service }) => {
    // console.log(service);
    
  return (
    <div
      key={service.serviceId}
      className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
    >
      <Image
        src={service.image}
        alt={service.serviceName}
        height={208}
        width={208}
        className="w-full h-52 object-cover"
      />

     
      <div className="flex flex-col grow p-5">
        <div className="grow">
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {service.serviceName}
          </h2>

          {/* <p className="text-gray-600">
            <span className="font-semibold text-[#6ec1ff]">
             <IoIosStar /> {service.rating}
            </span>{" "}
            | ${service.price}
          </p> */}
          <div>
            <p className="flex items-center gap-1 font-semibold "><IoIosStar color="gold"/> <span className="text-[#6ec1ff]">{service.rating} </span> <span>| ${service.price}</span>  </p>
          </div>
        </div>

     
        <Link href={`/services/servicedetails/${service.serviceId}`} className=" btn w-full mt-4 bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] text-gray-800 font-semibold py-2 rounded-xl hover:opacity-90 transition cursor-pointer">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WinterServicesCard;
