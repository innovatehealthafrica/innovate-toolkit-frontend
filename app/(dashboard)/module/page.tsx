"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Bell, Mail, Search, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import img1 from "@/app/assets/images/module-page/black-man-programmer-manages-code-scripts-artificial-intelligence 3.png";
import img2 from "@/app/assets/images/module-page/man-wearing-vr-headset-outdoor-futuristic-technology 2.png";
import img3 from "@/app/assets/images/module-page/manager-taking-notes-team-meeting 1.png";
import img4 from "@/app/assets/images/module-page/chatbot-removebg-preview 1.png";

const modules = [
  {
    title: "Market Research: Validate Your Ideas with Data-Driven Insights",
    description:
      "This module includes survey templates, competitor analysis frameworks, and expert interviews to enhance your market research skills.",
    format: "3 Videos, 5 Templates, 2 Interactive Quizzes",
    image: img1,
    width: 293,
    height: 115,
  },
  {
    title: "Pitch Deck Creation: Craft Investor-Ready Presentations",
    description:
      "Includes 10+ customizable templates, video tutorials, and case studies on pitching with confidence.",
    format: "3 Videos, 5 Templates, 2 Interactive Quizzes",
    image: img2,
    width: 281,
    height: 122,
  },
  {
    title: "Pitch Deck Creation: Craft Investor-Ready Presentations",
    description:
      "Includes 10+ customizable templates, video tutorials, and case studies on pitching with confidence.",
    format: "3 Videos, 5 Templates, 2 Interactive Quizzes",
    image: img3,
    width: 277,
    height: 132,
  },
];
export default function Module({ userName }: { userName: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="bg-gray-100 pb-10 max-w-screen-2xl">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center w-1/2">
            <Search className="text-gray-500 mr-2 absolute p-1" />
            <Input
              placeholder="Search for modules, templates, videos, or resources"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full relative rounded-3xl pl-9"
            />
          </div>
          <div className="flex items-center gap-4">
            <Mail
              size={20}
              className="text-gray-700 cursor-pointer border-2 p-1 rounded-full w-8 h-9"
            />
            <Bell className="text-gray-700 cursor-pointer border-2 p-1 rounded-full w-8 h-9" />
            <div className="flex items-center gap-2 border-l pl-4">
              <Avatar className="w-8 h-8 bg-gray-300" />
              <span className="font-semibold text-gray-800">{userName}</span>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-3/4 m-3 mx-auto bg-gradient-to-r from-[#8AA15B] to-[#B6D6A4] h-64 sm:h-52 rounded-xl text-justify p-7 mb-3">

          <h1 className="font-extrabold  text-[#F7C148] mb-2">
            Good morning <span className="text-white">Jason!</span>
          </h1>
          <p className="text-white font-medium">
            Welcome{" "}
            <span className="text-[#F7C148] ">
              {" "}
              toolkit central learning hub!
            </span>{" "}
            Here, you&apos;ll find curated modules designed to equip you with
            tools, templates, and knowledge for every stage of your innovation
            journey.
          </p>
          <div className="flex items-center gap-2 sm:mx-3 sm:gap-4 m-1 bg-[#F7C148] rounded-xl sm:rounded-2xl  w-3/6 sm:w-1/5 px-2 py-1 mt-4">
            <button className="bg-[#F7C148] rounded-md">Start now!</button>
            <ChevronRight className="bg-white border rounded-full" />
          </div>
        </div>
      </div>
      <div className="h-4/5 bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF] pb-40 ">
        <h1 className="font-bold text-center pt-10 px-4 sm:px-0">
          Explore Modules:
          <span className="text-[#F7C148]">
            Your Gateway to Innovation Mastery
          </span>{" "}
        </h1>
        <p className="text-center mx-auto px-48">
          From ideation to scaling, access step-by-step guides, downloadable
          templates, expert video tutorials, and AI-powered recommendations
          tailored to your unique goals
        </p>
        <div className="mx-auto">
          <div className="flex items-end gap-1 justify-end mt-6 pr-1 mr-40">
            <button
              className="  -translate-y-1/2 bg-white  rounded-full shadow-md"
              onClick={scrollLeft}
            >
              <ChevronLeft className="text-gray-700" />
            </button>
            <button
              className="  -translate-y-1/2 bg-[#D1992F]  rounded-full shadow-md"
              onClick={scrollRight}
            >
              <ChevronRight className="text-gray-700" />
            </button>
          </div>
          <div
            className="mx-2 sm:mx-11 flex flex-col sm:flex-row items-center align-middle justify-center  gap-2 sm:gap-4 h-auto"
            ref={scrollRef}
          >
            {modules.map((module, index) => (
              <Card key={index} className="shadow-md max-w-[350px]">
                <CardContent>
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={module.width}
                    height={module.height}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <h4 className="mt-2 font-semibold">{module.title}</h4>
                  <p className="text-sm text-gray-600">{module.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Format: {module.format}
                  </p>
                  <Button className="mt-3 w-4/5 rounded-3xl bg-[#8AA15B] ml-6">
                    Explore module
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 relative h-screen sm:h-[80vh]">
        <div className="absolute left-0 right-3 -top-24 flex flex-col justify-center items-center bg-white border rounded-lg w-4/5 mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 text-center pt-4">
            Recommended for <span className="text-[#F7C148]">You</span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Modules Curated Based on Your Profile, Interests, and Progress
          </p>
          <div className="mx-auto">
            <div className="flex items-end gap-1 justify-end mt-6 pr-1">
              <button
                className="  -translate-y-1/2 bg-white  rounded-full shadow-md"
                onClick={scrollLeft}
              >
                <ChevronLeft className="text-gray-700" />
              </button>
              <button
                className="  -translate-y-1/2 bg-[#D1992F]  rounded-full shadow-md"
                onClick={scrollRight}
              >
                <ChevronRight className="text-gray-700" />
              </button>
            </div>
            <div
              className="mx-2 sm:mx-11 flex flex-col sm:flex-row  items-center align-middle justify-center gap-4 h-auto"
              ref={scrollRef}
            >
              {modules.map((module, index) => (
                <Card key={index} className="shadow-md max-w-[300px]">
                  <CardContent>
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={module.width}
                      height={module.height}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <h4 className="mt-2 font-semibold">{module.title}</h4>
                    <p className="text-sm text-gray-600">
                      {module.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Format: {module.format}
                    </p>
                    <Button className="mt-3 w-4/5 rounded-3xl bg-[#8AA15B] ml-6">
                      Explore module
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 flex flex-col items-end justify-end h-[60vh] sm:h-fit">
        <p className="text-white bg-[#9CD62A] p-3 text-justify w-56 h-36 mr-24">
          Welcome back, Jason Ronald!I’m a chatbot, here to help you navigate
          Toolkit. Click here to ask me any questions
        </p>
        <Image src={img4} alt="chatbot" width={156} height={156}/>
      </div>
    </div>
  );
}
