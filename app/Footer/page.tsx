"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Youtube, Instagram} from 'lucide-react';



export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Module", path: "/module" },
    { name: "Innovation Sandbox", path: "/innovation-sandbox" },
    { name: "Community", path: "/community" },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF]  p-0 sm:p-4">
      <div className="container mx-auto sm:flex justify-between items-center gap-5 sm:gap-0 max-w-screen-2xl px-6 sm:px-16">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex items-center">
          <ul className="flex flex-col sm:flex-row items-start justify-start space-x-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`text-black font-medium text-sm cursor-pointer hover:border-b ${
                    pathname === item.path ? "border-b-2 border-[#8AA15B]" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <hr />
        <div><p>@copy2025 innovation toolkit africa</p>
        <Youtube />
        <Linkedin />
        <Instagram />
        </div>

      </div>
    </footer>
  );
}
// 
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// export default function Header({ setShowAbout }) {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault(); // Prevent navigation
//     setShowAbout(true); // Show the AboutUs component
//   };

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Module", path: "/module" },
//     { name: "Innovation Sandbox", path: "/innovation-sandbox" },
//     { name: "Community", path: "/community" },
//   ];

//   return (
//     <nav className="bg-gradient-to-r from-[#EDF9F2] to-[#FFF8EF] p-4">
//       <div className="container mx-auto flex justify-between items-center max-w-screen-2xl">
//         <div className="text-2xl font-bold text-[#8AA15B]">Logo</div>

//         {/* Desktop Navigation */}
//         <div className="hidden sm:flex items-center">
//           <ul className="flex space-x-6">
//             {navLinks.map((item) => (
//               <Link key={item.path} href={item.path}>
//                 <li
//                   className={`text-black font-medium text-xl cursor-pointer hover:border-b ${
//                     pathname === item.path ? "border-b-2 border-[#8AA15B]" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </li>
//               </Link>
//             ))}
//             {/* About Us - Special Case */}
//             <a href="/about-us" onClick={handleAboutClick} className="cursor-pointer">
//               <li className="text-black font-medium text-xl hover:border-b">
//                 About Us
//               </li>
//             </a>
//           </ul>

//           {/* Sign Up Button */}
//           <Link href="/signup">
//             <button className="border border-black px-4 py-1 ml-6 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition">
//               Sign up
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="sm:hidden" onClick={toggleMenu}>
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <div className="sm:hidden bg-white shadow-md rounded-lg mt-2 p-4">
//           <ul className="flex flex-col space-y-4">
//             {navLinks.map((item) => (
//               <Link key={item.path} href={item.path} onClick={toggleMenu}>
//                 <li
//                   className={`text-black font-medium text-lg cursor-pointer hover:border-b ${
//                     pathname === item.path ? "border-b-2 border-[#8AA15B]" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </li>
//               </Link>
//             ))}
//             {/* About Us - Mobile */}
//             <a href="/about-us" onClick={handleAboutClick} className="cursor-pointer">
//               <li className="text-black font-medium text-lg hover:border-b">
//                 About Us
//               </li>
//             </a>
//           </ul>

//           {/* Sign Up Button (Mobile) */}
//           <div className="mt-4 flex justify-center">
//             <Link href="/signup">
//               <button className="border border-black px-4 py-1 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition">
//                 Sign up
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
