import React from "react";
import Image from "next/image";
import img1 from "../../../public/Globe.png";
import img2 from "../../../public/Checklist.png";
import img3 from "../../../public/money.png";

export default function Hero() {
  const data = [
    {
      img: img1,
      title: "Designed for African Innovators",
      comments:
        "Represents Africa-centric solutions and tailored regional insights.",
    },
    {
      img: img2,
      title: "Structured & Actionable",
      comments:
        "Symbolizes a clear, guided approach with step-by-step frameworks.",
    },
    {
      img: img3,
      title: " Funding & Growth Opportunities",
      comments:
        "Represents funding sources, financial strategies, and investor support.",
    },
  ];
  return (
    <section className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF] p-4 pt-12 h-[940px] sm:h-[32rem]">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-2xl gap-9 mx-auto">
        <div className="flex-1 text-center md:text-left space-y-6 pt-4 mx-5 ">
          <h1 className="font-bold text-3xl text-left md:text-4xl">
            Empowering Healthcare <br /> Innovators in Africa
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Access expert insights, ready-to-use templates, and interactive
            tools to transform your vision into scalable, sustainable solutions
            tailored for the African healthcare landscape.
          </p>
          <button className="mt-12  text-white px-4 py-1 mr-16 rounded-full bg-[#8AA15B] hover:bg-gray-100 hover:text-[#8AA15B] hover:border-2 hover:border-[#8AA15B] transition">
            Get started
          </button>
        </div>
        <div className=" md:w-1/2 flex flex-1 justify-center relative mt-10 md:mt-0 z-50">
          {/* Africa Map */}
          <Image
            src="/africa.png"
            alt="Africa with innovation icons"
            width={242}
            height={207}
            className="object-contain max-w-full max-h-[40vh]"
          />

          {/* Floating Small Images */}

          <div className="absolute top-4 sm:top-32 right-16">
            <Image
              src="/african-girls.png"
              alt="Child 2"
              width={44}
              height={46}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="absolute bottom-[12rem] right-0">
            <Image
              src="/student1.png"
              alt="Child 4"
              width={44}
              height={45}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="absolute top-56 left-20">
            <Image
              src="/woman1.png"
              alt="Child 1"
              width={44}
              height={46}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="absolute bottom-5 left-36">
            <Image
              src="/smiley-man.png"
              alt="Child 3"
              width={44}
              height={45}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Connecting Arrow */}
          <div className="absolute left-40 bottom-36 transform -translate-x-1/2">
            <Image
              src="/arrow 1.png"
              alt="Arrow pointing"
              width={73}
              height={69}
            />
          </div>
          <div className="absolute left-[13.5rem] bottom-16 transform -translate-x-1/2">
            <Image
              src="/arrow2.png"
              alt="Arrow pointing"
              width={39}
              height={63}
            />
          </div>
          <div className="absolute right-28 top-32 transform -translate-x-1/2">
            <Image
              src="/arrow3.png"
              alt="Arrow pointing"
              width={38}
              height={58}
            />
          </div>
          <div className="absolute -right-5 bottom-44 transform -translate-x-1/2">
            <Image
              src="/arrow4.png"
              alt="Arrow pointing"
              width={61}
              height={62}
              // className="w-28 h-7"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-2 sm:gap-4 mt-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#FBE8D0] to-[#FFFFFF] w-72 h-60 rounded-md p-4 mt-4 sm:p-4 sm:mt-20 shadow-md"
          >
            <div className="flex items-center justify-center flex-col space-x-2 sm:space-x-6">
              <Image
                src={item.img}
                alt="Africa with innovation icons"
                width={50}
                height={50}
              />
              <div>
                <h2 className="text-lg text-center">{item.title}</h2>
                <p className="text-gray-600 text-center">{item.comments}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
