import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF] p-4 pt-12">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-2xl gap-9 mx-auto">
        <div className="flex-1 text-center md:text-left space-y-6 pt-4 ">
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
        <div className=" md:w-1/2 flex flex-1 justify-center relative mt-10 md:mt-0">
          {/* Africa Map */}
          <Image
            src="/africa.png"
            alt="Africa with innovation icons"
            width={400}
            height={400}
            className="object-contain"
          />

          {/* Floating Small Images */}

          <div className="absolute top-16 right-5">
            <Image
              src="/african-girls.png"
              alt="Child 2"
              width={50}
              height={50}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="absolute bottom-[12rem] right-0">
            <Image
              src="/student1.png"
              alt="Child 4"
              width={50}
              height={50}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="absolute top-56 left-20">
            <Image
              src="/woman1.png"
              alt="Child 1"
              width={50}
              height={50}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="absolute bottom-5 left-36">
            <Image
              src="/smiley-man.png"
              alt="Child 3"
              width={50}
              height={50}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Connecting Arrow */}
          <div className="absolute left-1/3 bottom-48 transform -translate-x-1/2">
            <Image
              src="/arrow 1.png"
              alt="Arrow pointing"
              width={100}
              height={30}
            />
          </div>
          <div className="absolute left-[13.5rem] bottom-16 transform -translate-x-1/2">
            <Image
              src="/arrow2.png"
              alt="Arrow pointing"
              width={50}
              height={30}
            />
          </div>
          <div className="absolute right-14 top-16 transform -translate-x-1/2">
            <Image
              src="/arrow3.png"
              alt="Arrow pointing"
              width={50}
              height={30}
            />
          </div>
          <div className="absolute -right-5 bottom-44 transform -translate-x-1/2">
            <Image
              src="/arrow4.png"
              alt="Arrow pointing"
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
