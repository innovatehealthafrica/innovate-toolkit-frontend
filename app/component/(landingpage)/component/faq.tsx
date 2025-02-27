import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import img5 from "../../../../public/ideas for PMs.png"
import Image from "next/image";

export default function Faq() {
  return (
    <section className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF] p-4 pt-12 pb-8">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-2xl gap-9 mx-auto">
        <div className="w-60">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is the toolkit free to use?</AccordionTrigger>
              <AccordionContent>
                Yes! The core features of the toolkit, including modules,
                templates, and community discussions, are free to access. Some
                advanced resources or premium mentorship programs may require a
                subscription or partnership.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I get started?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                {" "}
                What kind of resources are available?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&aposs animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                {" "}
                What is the Innovation Sandbox?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                {" "}
                Can I collaborate with other users?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h1 className="font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Move from idea to implementation seamlessly
          </p>
          <button className="mt-12  text-white px-[0.5rem] sm:px-4 py-1 sm:mr-16 rounded-full bg-[#8AA15B] hover:bg-gray-100 hover:text-[#8AA15B] hover:border-2 hover:border-[#8AA15B] transition">
            See more questions
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mx-auto sm:w-2/3 rounded-md bg-white p-5 mt-10">
        <div>
          <h2 className="font-bold text-2xl">
            Ready to Innovate? Take the First Step Today!
          </h2>
          <p className="p-4">
            Sign up now and gain access to a wealth of resources, expert
            guidance, and a thriving community of healthcare innovators.
          </p>
          <p className="p-4">
            Your journey to transforming healthcare in Africa starts here!
          </p>
          <button className="mt-12  text-white px-4 py-1 sm:mr-16 rounded-full bg-[#8AA15B] hover:bg-gray-100 hover:text-[#8AA15B] hover:border-2 hover:border-[#8AA15B] transition">
          Sign Up Now
          </button>
        </div>
        <div className="flex justify-end">
          <Image src={img5} alt="Ideas" width={540} height={600} className="h-auto" />
        </div>
      </div>
    </section>
  );
}
