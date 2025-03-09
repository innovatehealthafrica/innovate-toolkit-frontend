"use client";

import { useState } from "react";
import img1 from "../../../public/man-using-vr-glasses 1.png";
import img2 from "../../../public/man-using-vr-glasses 2.png";
import img3 from "../../../public/man-using-vr-glasses 3.png";
import img4 from "../../../public/man-using-vr-glasses 4.png";
import Image from "next/image";

export default function LatestBlog() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterOptions = [
    { label: "All", value: null },
    { label: "Innovation & Tech", value: "innovation & tech" },
    { label: "Latest", value: "latest" },
    { label: "Business & Funding", value: "business & funding" },
    { label: "Success Stories", value: "stories" },
  ];

  const blogPosts = [
    {
      id: 1,
      image: img1,
      title: "How AI is Transforming Healthcare in Africa",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. John Doe",
      date: "2023-05-01",
      time: "4mins",
      category: "business & funding",
    },
    {
      id: 2,
      image: img2,
      title: "Securing Investment for Your Health Startup",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. Jane Smith",
      date: "2023-04-15",
      time: "4mins",
      category: "innovation & tech",
    },
    {
      id: 3,
      image: img3,
      title: "Success Story: AI-Powered Hospital",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. Michael Johnson",
      date: "2023-03-20",
      time: "4mins",
      category: "stories",
    },
    {
      id: 4,
      image: img4,
      title: "AI Revolutionizes Diagnostics",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. John Doe",
      date: "2023-05-01",
      time: "4mins",
      category: "business & funding",
    },
    {
      id: 5,
      image: img1,
      title: "Breaking Barriers in Telemedicine Adoption",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. Jane Smith",
      date: "2023-04-15",
      time: "4mins",
      category: "innovation & tech",
    },
    {
      id: 6,
      image: img2,
      title: "Success Story: AI-Powered Hospital",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. Michael Johnson",
      date: "2023-03-20",
      time: "4mins",
      category: "stories",
    },
    {
      id: 7,
      image: img3,
      title: "Breaking Barriers in Telemedicine Adoption",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. John Doe",
      date: "2023-05-01",
      time: "4mins",
      category: "latest",
    },
    {
      id: 8,
      image: img4,
      title: "Telemedicine Grows Exponentially",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. Jane Smith",
      date: "2023-04-15",
      time: "4mins",
      category: "latest",
    },
    {
      id: 9,
      image: img1,
      title: "Success Story: AI-Powered Hospital",
      content:
        "Artificial Intelligence is revolutionizing diagnostics, patient monitoring, and tele..",
      author: "Dr. Michael Johnson",
      date: "2023-03-20",
      time: "4mins",
      category: "stories",
    },
  ];

  const filteredBlogPosts = blogPosts;

  const handleFilterClick = (value: string | null) => {
    setActiveFilter(value);
    if (value !== null) {
      filteredBlogPosts.length = 0;
      blogPosts.forEach((post) => {
        if (post.category === value) {
          filteredBlogPosts.push(post);
        }
      });
    } else {
      filteredBlogPosts.length = 0;
      filteredBlogPosts.push(...blogPosts);
    }
  };

  return (
    <div className="flex flex-col gap-3 flex-1 sm:w-1/2">
      <h2 className="text-center font-semibold sm:font-bold text-[#8AA15B] text-3xl md:text-4xl">
        Latest Blog Posts
      </h2>

      {/* Filter section */}
      <div className="flex flex-wrap gap-2 my-4 mx-auto">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleFilterClick(option.value)}
            className={`px-4 py-2 rounded-full ${
              activeFilter === option.value
                ? "bg-[#8AA15B] text-white"
                : option.label === "All"
                ? "bg-[#8AA15B] text-white"
                : "text-black hover:bg-gray-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-3">
        {/* Filtered blog posts */}
        {filteredBlogPosts.length > 0 ? (
          filteredBlogPosts.map((post) => (
            <div key={post.id} className="mb-4 max-w-[300px]">
              <Image
                src={post.image}
                alt={post.title}
                width={582}
                height={322}
                className="w-full sm:w-[300px]"
              />
              <p className="text-gray-400 text-sm py-2">Blog article</p>
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-justify text-wrap">{post.content}</p>
              <div className="flex flex-col justify-start mt-2">
                <span className="text-gray-400">Author: {post.author}</span>
                <div className="flex justify-between">
                <time dateTime={post.date} className="text-gray-400">{post.date}</time>
                  <span className="text-gray-400 ml-2">{post.time}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No matching blog posts found.</p>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
