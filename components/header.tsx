"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Import icons

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (pathname === "/component/module") {
    return null;
  }
  if (pathname === "/component/community") {
    return null;
  }
  if (pathname === "/sign-up") {
    return null;
  }
  if (pathname === "/log-in") {
    return null;
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "#about-us" },
    { name: "Module", path: "/module" },
    { name: "Innovation Sandbox", path: "/innovation-sandbox" },
    { name: "Community", path: "/community" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly  max-w-screen-2xl">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex">
          <ul className="flex space-x-6 pl-64 text-nowrap">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`text-black font-medium text-xl cursor-pointer hover:border-b ${
                    pathname === item.path ? "border-b-2 border-[#8AA15B]" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
            {pathname.includes("/component/blog") && (
              <Link href="/subscribe">
                <button className="border border-black px-4 py-1 ml-5 mr-16 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </Link>
            )}
          </ul>
          <Link href="/signup">
            <button className="border border-black w-24 px-4 py-1 ml-5 mr-16 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-md rounded-lg mt-2 p-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path} onClick={toggleMenu}>
                <li
                  className={`text-black font-medium text-lg cursor-pointer hover:border-b ${
                    pathname === item.path ? "border-b-2 border-[#8AA15B]" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <Link href="/sign-up">
              <button className="border border-black px-4 py-1 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
