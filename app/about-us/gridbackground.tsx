import React from "react";

export function GridBackground() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white relative flex items-center justify-center overflow-hidden">
      {/* Grid lines in top-left and bottom-right corners */}
      <div className="absolute inset-0 bg-grid-black/[0.2] dark:bg-grid-white/[0.2] mask-[linear-gradient(to_bottom_right,black_30%,transparent_50%,black_30%)]"></div>

      {/* Radial gradient for smooth fade effect */}
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] pointer-events-none"></div>

      {/* Text Content
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
    </div>
  );
}
