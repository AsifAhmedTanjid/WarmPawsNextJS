"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
// import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
// import NotFound from "@/app/NotFound";
import Image from "next/image";
import auth from "@/lib/firebase";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // --- Auth protection ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login"); // redirect if not logged in
      } else {
        setUser(u);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // --- Fetch service data ---
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
//   if (!service) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#f0f8ff] py-10 px-4">
      <Toaster position="top-center" />
      <div className="container mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <Image height={600} width={1200}
          src={service.image}
          alt={service.serviceName}
          className="w-full h-96 md:h-120 lg:h-150 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{service.serviceName}</h1>
          <p className="text-gray-600 mb-4">{service.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <p className="flex items-center gap-1 font-semibold">
              ⭐ <span className="text-[#6ec1ff]">{service.rating}</span>
            </p>
            <p className="font-semibold">${service.price}</p>
            <p className="text-gray-500">{service.slotsAvailable} slots available</p>
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
            <button type="submit" className="w-full btn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
