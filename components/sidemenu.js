import Image from "next/image";
import { FaDiscord, FaTwitter, FaBars } from "react-icons/fa";
import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/dist/client/router";
import logo from "../assets/logo.svg";

function Sidebar({ placeholder }) {
  return (
    <header className="sticky top-0 z-50 bg-black h-screen">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-start h-10 cursor-pointer hover:animate-pulse justify-center"
      >
        <FaBars className="h-10 mx-6 mt-6 text-white text-xl cursor-pointer hover:text-sred" />
      </div>

      <div className="flex flex-col h-screen mx-auto items-center font-bold justify-center text-gray-900">
        <a
          target="_blank"
          href="https://discord.gg/KTgpaGpn"
          rel="noopener noreferrer"
        >
          <FaDiscord className="h-10 text-white text-xl cursor-pointer hover:text-syellow" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/SolanoidNFT"
          rel="noopener noreferrer"
        >
          <FaTwitter className="h-10 mt-4 text-white text-xl cursor-pointer hover:text-sblue" />
        </a>
      </div>
    </header>
  );
}

export default Sidebar;
