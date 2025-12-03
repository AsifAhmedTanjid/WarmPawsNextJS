"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.serviceId == id);
        setService(found || null);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (loading) return <div>Loading...</div>;
  if (!service) return <div>Service not found.</div>;

  return (
    <div className="min-h-screen bg-[#f0f8ff] py-10 px-4">
      {/* <Toaster position="top-center" /> */}
      <div className="container mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <Image
          height={600}
          width={1200}
          src={service.image}
          alt={service.serviceName}
          className="w-full h-96 md:h-120 lg:h-150 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{service.serviceName}</h1>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <p className="text-gray-700 mb-4">{service.longDescription}</p>

          <div className="flex items-center gap-4 mb-4">
            <p className="flex items-center gap-1 font-semibold">
              ⭐ <span className="text-[#6ec1ff]">{service.rating}</span>
            </p>
            <p className="font-semibold">${service.price}</p>
            <p className="text-gray-500">{service.slotsAvailable} slots available</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold mb-1">Features:</h2>
            <ul className="list-disc list-inside">
              {service.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold mb-1">Benefits:</h2>
            <ul className="list-disc list-inside">
              {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="mb-4">
            <p><strong>Duration:</strong> {service.duration}</p>
            <p><strong>Location:</strong> {service.location}</p>
            <p><strong>Pet Types:</strong> {service.petTypes.join(", ")}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold mb-1">Service Rules:</h2>
            <ul className="list-disc list-inside">
              {service.serviceRules.map((rule, i) => <li key={i}>{rule}</li>)}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-1">Reviews:</h2>
            {service.reviews.map((review, i) => (
              <div key={i} className="border-b border-gray-200 py-2">
                <p className="font-semibold">{review.user} {review.rating}⭐ </p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>

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
            <button type="submit" className="w-full btn bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] text-gray-800 font-semibold">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
