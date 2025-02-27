"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkedIn from "../../public/linkedin.png";
import Instagram from "../../public/instagram.png";
import X from "../../public/X.png";
import Youtube from "../../public/youtube.png"; 


const socialConnect = [
  { name: "Youtube", icon: Youtube, path: "https://innovatehealth.africa/", width: 80, height: 60 },
  { name: "LinkedIn", icon: LinkedIn, path: "https://www.linkedin.com/company/innovatehealth-africa/", width: 90, height: 60},
  { name: "X", icon: X, path: "https://innovatehealth.africa/", width:52, height: 70 },
  { name: "Instagram", icon: Instagram, path: "https://innovatehealth.africa/", width: 54, height: 80 },
] 

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", path: "#about-us" },
    { name: "Module", path: "/module" },
    { name: "Innovation Sandbox", path: "/innovation-sandbox" },
    { name: "Community", path: "/community" },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF]  p-0 sm:p-4">
      <div className="container mx-auto  max-w-screen-2xl">
        <div className="sm:flex justify-between items-center gap-5 sm:gap-0  px-6 sm:px-16 mb-3">
          <div className="text-2xl font-bold">Logo</div>
          <div className="flex items-center">
            <ul className="flex flex-col sm:flex-row items-baseline justify-start">
              {navLinks.map((item) => (
                <Link key={item.path} href={item.path}>
                  <li
                    className={`text-black font-medium text-sm cursor-pointer hover:border-b ${
                      pathname === item.path
                        ? "border-b-2 border-[#8AA15B]"
                        : ""
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center px-6 sm:px-16">
          <p>&#xa9;2025 innovation toolkit africa</p>
          <div className="flex gap-3">
            {socialConnect.map((item) =>(<a href={item.path} target="_blank" rel="noopener noreferrer" key={item.name} >
             <Image src={item.icon} alt={item.name} width={item.width} 
             height={item.height} className="w-8 h-8" />
             </a>))}
          </div>
        </div>
      </div>
    </footer>
  );
}
