import React from "react";
import typewriter from "../../../public/aerial-view-man-typing-retro-typewriter 1.png";
import Image from "next/image";
import img1 from "../../../public/social-media-marketing.png.png";
import { Separator } from "@/components/ui/separator";
import LatestBlog from "./latestblog";

export default function Blog() {
  return (
    <section className="bg-white sm:px-12 sm:pb-8 h-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className=" border-gray-400 border-[1px] p-7 m-0 sm:m-10 flex flex-col sm:flex-row  justify-center items-center gap-3 ">
          <div className="flex flex-col gap-3 flex-1  sm:w-1/2">
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
            className=" sm:w-[300px]"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
          <div className="flex flex-col p-3 sm:w-1/2">
            <h2 className="font-bold">Featured Blog Post</h2>
            <Image
              src={img1}
              alt="social media marketing"
              width={582}
              height={322}
              className="w-full sm:w-[300px]"
            />
            <h4 className="text-gray-400 text-sm">Blog articles</h4>
            <h2 className="font-bold">
              How AI is Transforming Healthcare in Africa
            </h2>
            <p className="text-justify text-wrap">
              Artificial Intelligence is revolutionizing diagnostics, patient
              monitoring, and tele..
            </p>
            <h4 className="text-gray-400 text-sm"> Author: Dr. Amina Yusuf</h4>
            <h4 className="text-gray-400 text-sm">Oct 18, 2022 . 4mins read</h4>
          </div>
          <div className="p-3 sm:w-1/2">
            <p className=" font-bold">Trending Blogs</p>
            <Separator className="mb-4 bg-black" />
            <div>
              <div className="flex flex-col justify-center mb-3">
                <h3 className="text-sm">Artificial Intelligence is revolutionizing</h3>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <h4>Blog articles</h4>
                  <h4>6/07/2021</h4>
                </div>
              </div>
              <Separator className="mb-4 bg-black" />
              <div className="flex flex-col justify-center mb-3">
                <h3 className="text-sm">Artificial Intelligence is revolutionizing</h3>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <h4>Blog articles</h4>
                  <h4>6/07/2021</h4>
                </div>
              </div>
              <Separator className="mb-4 bg-black" />
              <div className="flex flex-col justify-center mb-3">
                <h3 className="text-sm">Artificial Intelligence is revolutionizing</h3>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <h4>Blog articles</h4>
                  <h4>6/07/2021</h4>
                </div>
              </div>
              <Separator className="mb-4 bg-black" />
              <div className="flex flex-col justify-center mb-3">
                <h3 className="text-sm">Artificial Intelligence is revolutionizing</h3>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <h4>Blog articles</h4>
                  <h4>6/07/2021</h4>
                </div>
              </div>
              <Separator className="mb-4 bg-black" />
              <div className="flex flex-col justify-center mb-3">
                <h3 className="text-sm">Artificial Intelligence is revolutionizing</h3>
                <div className="flex justify-between items-center text-gray-400 text-xs">
                  <h4>Blog articles</h4>
                  <h4>6/07/2021</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <LatestBlog />
        </div>
      </div>
    </section>
  );
}
