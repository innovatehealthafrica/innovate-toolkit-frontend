import React from "react";
import typewriter from "../../../public/aerial-view-man-typing-retro-typewriter 1.png";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="bg-white sm:px-12 sm:pb-8 h-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className=" border-gray-400 border-[1px] p-7 m-10 flex  justify-center items-center gap-3">
          <div className="flex flex-col gap-3 flex-1 w-1/2">
            <h2 className="font-bold text-[#8AA15B] text-3xl text-left md:text-4xl">
              Stay Ahead with the Latest in Healthcare Innovation
            </h2>
            <p className="text-lg text-black">
              Explore industry trends, expert insights, and success stories
              shaping the future of healthtech.
            </p>
            <button className="border border-black px-4 py-1 w-36 rounded-full bg-[#8AA15B] text-white hover:bg-gray-100 hover:text-[#8AA15B] transition">
              Subscribe Now
            </button>
          </div>
          <Image
            src={typewriter}
            alt="aerial view man typing retro typewriter"
            width={462.18}
            height={334}
            className="w-1/2"
          />
        </div>
        <div>
            <div className="flex">
           <h2>Featured Blog Post</h2>
           
           </div> 
        </div>
      </div>
    </section>
  );
}
