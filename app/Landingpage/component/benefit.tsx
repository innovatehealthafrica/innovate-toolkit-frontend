import Link from "next/link";
import React from "react";
import { CircleCheck } from "lucide-react";

export default function Benefit() {
  return (
    <section className="bg-white sm:px-12 sm:pt-12 sm:pb-8 h-auto sm:h-[350px] mt-[650px] sm:mt-60">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-2xl gap-9 mx-auto">
        <div className="w-3/5">
          <h1 className="mt-12 sm:mt-0 text-wrap text-left text-black font-bold">
            Get Started Today and Accelerate Your Innovation Journey
          </h1>
          <p className="text-gray-600 text-justify text-wrap">
            Transform your ideas into real-world healthcare solutions with
            expert-curated tools, templates, and insights.
          </p>
          <Link href="/module">
            <button className="mt-12  text-white px-[0.5rem] sm:px-4 py-1 sm:mr-16 rounded-full bg-[#8AA15B] hover:bg-gray-100 hover:text-[#8AA15B] hover:border-2 hover:border-[#8AA15B] transition">
              Explore the toolkit
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex items-center justify-start gap-4">
            <CircleCheck color="#e0ac54" />
            <div>
              <h2 className="font-bold">
                Follow a structured step-by-step process
              </h2>
              <p className="text-gray-600">
                Move from idea to implementation seamlessly
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <CircleCheck color="#e0ac54" />
            <div>
              <h2 className="font-bold">
                Access ready-to-use template &framework
              </h2>
              <p className="text-gray-600">
                Create business models, stakeholder maps, and funding proposals
                with ease.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <CircleCheck color="#e0ac54" />
            <div>
              <h2 className="font-bold">
                Join a network of like-minded innovators, investors, and mentors{" "}
              </h2>
              <p className="text-gray-600">
                Connect with experts and peers driving healthcare
                transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
