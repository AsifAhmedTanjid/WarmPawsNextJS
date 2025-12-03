"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import WinterServices from "../components/WinterServices/WinterServices";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState(""); // price-asc, price-desc, rating, slots

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const setCat = new Set(services.map((s) => s.category));
    return [...setCat];
  }, [services]);

  // Filtering + Sorting Logic
  const processedData = useMemo(() => {
    let data = [...services];

    // Search by serviceName
    if (searchText) {
      data = data.filter((item) =>
        item.serviceName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      data = data.filter((item) => item.category === selectedCategory);
    }

    // Sorting
    switch (sortOption) {
      case "price-asc":
        data.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        data.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;
      case "slots":
        data.sort((a, b) => b.slotsAvailable - a.slotsAvailable);
        break;
    }

    return data;
  }, [services, searchText, selectedCategory, sortOption]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-[#f0f8ff] min-h-screen py-10 px-4 ">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Winter Care Services
          </h1>
<div className="p-4 flex flex-wrap gap-4 justify-end pb-8 
                md:flex-row md:items-center 
                flex-col items-stretch">

  {/* Search Box */}
  <input
    type="text"
    placeholder="Search service..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    className="border px-3 py-2 rounded w-full md:w-[200px]"
  />

  {/* Category Filter */}
  <select
    className="border px-3 py-2 rounded w-full md:w-[200px]"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
  >
    <option value="">All Categories</option>
    {categories.map((cat, i) => (
      <option key={i} value={cat}>
        {cat}
      </option>
    ))}
  </select>

  {/* Sorting */}
  <select
    className="border px-3 py-2 rounded w-full md:w-[200px]"
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="">Sort By</option>
    <option value="price-asc">Price: Low → High</option>
    <option value="price-desc">Price: High → Low</option>
    <option value="rating">Rating: High → Low</option>
    <option value="slots">Slots Available</option>
  </select>
</div>

          <div>
            <WinterServices services={processedData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
