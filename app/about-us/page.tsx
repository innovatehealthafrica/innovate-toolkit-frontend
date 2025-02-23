import React from "react";
import Image from "next/image";
import img1 from "../../public/Idea.png";
import img2 from "../../public/Confusion.png";
import img3 from "../../public/Mind Map.png";
import img4 from "../../public/smileyman.png";
import { CircleCheck } from "lucide-react";

export default function About() {
  const data = [
    {
      img: img1,
      comments: "Looking for new ideas, but don't know how to start",
    },
    {
      img: img2,
      comments: "Just curious about the innovation process",
    },
    {
      img: img3,
      comments: "Have an idea you are considering turning into a something",
    },
  ];
  return (
    <section className="text-white">
      <div className="max-w-screen-2xl mx-auto bg-[#7A955A] pb-8 h-auto">
        {/* <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div> */}
        <p className="text-center p-4">-ABOUT US</p>
        <h1 className="text-xl text-center p-7">Who Is This For?</h1>
        <p className="px-12 pb-4 sm:px-32 sm:pb-9 text-center">
          This platform is built to support a diverse community of healthcare
          changemakers. This is a tool designed so that anyone without prior
          knowledge or training in innovation or entrepreneurship can develop
          sustainable innovation through a guided process.
        </p>
        <div className="flex items-center justify-center flex-col md:flex-row gap-2 sm:gap-4 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#3250284A] bg-opacity-[29] w-52 h-52 rounded-md p-4 mt-4 sm:p-4 shadow-md text-center"
            >
              <div className="flex items-center justify-center flex-col">
                <Image
                  src={item.img}
                  alt="Africa with innovation icons"
                  width={90}
                  height={68}
                />
                <div>
                  <p className="text-gray-600 text-center">{item.comments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-[#3250284A] w-[33rem] m-3 h-1 mx-auto bg-[#3250284A] border-0 rounded-sm md:my-10 dark:bg-[#3250284A]"/>
        <div className="flex flex-col sm:flex-row mx-auto px-16 gap-10">
          <Image src={img4} alt='A smileyman picture' width={503} height={607} className="w-full h-72 sm:w-2/5 sm:h-[26rem]"/>
          <div className="flex-1 px-4">
            <h2 className="text-xl font-bold">Join the Healthcare Innovators Community</h2>
            <p className="text-gray-600">
            Connect with a growing network of changemakers shaping the future of healthcare in Africa
            </p>
            <div className="flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <CircleCheck color="#fff" />
            <div className="w-96 mt-1">
              <h2 className="font-bold">
              Ask Questions
              </h2>
              <p className="text-white">
              Get expert advice and insights from experienced professionals.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <CircleCheck color="#fff" />
            <div className="w-96 mt-1">
              <h2 className="font-bold">
              Share Ideas & Collaborate
              </h2>
              <p className="text-white">
              Post your thoughts, discuss challenges, and crowdsource solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <CircleCheck color="#fff" />
            <div className="w-96 mt-1">
              <h2 className="font-bold">
              Receive Feedback & Support
              </h2>
              <p className="text-white">
              Strengthen your innovation by learning from peers and industry leaders.
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
