import Image from "next/image";
import { FaDiscord, FaTwitter, FaBars } from "react-icons/fa";
import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Link from "next/link";
import logo from "../assets/logo.svg";

function Sidebar({ placeholder }) {
  return (
    <header className="sticky top-0 pl-3 z-50 bg-black h-screen">
      {/* Left */}
      <Link href="/mint">
        <div className="relative flex items-start h-12 pt-3 w-12 cursor-pointer hover:animate-pulse justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="66"
            viewBox="0 0 66 66"
          >
            <g
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(6.413 6.413)"
            >
              <g
                id="Layer_1"
                data-name="Layer 1"
                transform="translate(-6.413 -6.413)"
              >
                <rect
                  id="Rectangle_8"
                  data-name="Rectangle 8"
                  width="66"
                  height="66"
                  rx="33"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M128.351,106.147a22.2,22.2,0,0,1-31.994,19.905l18.976-11.078V104.335L88.721,119.858a22.187,22.187,0,0,1,27.25-33.617L96.995,97.317v10.641l26.612-15.523a22.088,22.088,0,0,1,4.744,13.712Z"
                  transform="translate(-72.992 -72.975)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </div>
      </Link>
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
