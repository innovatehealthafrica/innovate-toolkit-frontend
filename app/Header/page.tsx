"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("");

  return (
    <nav className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF] p-4">
      <div className="container mx-auto flex justify-evenly items-center max-w-screen-2xl">
        {/* Navigation Links */}
        <ul className="flex space-x-6 pl-64 text-nowrap">
          {[
            "Home",
            "About us",
            "Module",
            "Innovation sandbox",
            "Community",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-black font-medium ${
                  active === item ? "border-b-2 border-[#8AA15B]" : ""
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign Up Button */}
        <Link href="/signup">
          <button className="border border-black px-4 py-1 mr-16 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}

