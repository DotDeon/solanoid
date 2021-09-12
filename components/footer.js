import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="flex flex-row bg-white mt-16 w-screen h-1/3 md:h-1/2">
      <div className="flex-1 bg-white mt-24 ml-6 ">
        <div className="relative ml-10 md:ml-44 flex h-8 w-8 md:h-16 md:w-16 mr-auto cursor-pointer hover:animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83.37"
            height="83.37"
            viewBox="0 0 83.37 83.37"
          >
            <path
              id="Path_2"
              data-name="Path 2"
              d="M167.343,125.647a41.7,41.7,0,0,1-60.105,37.395l35.649-20.812V122.243L92.892,151.406a41.682,41.682,0,0,1,51.192-63.154L108.436,109.06V129.05L158.43,99.887a41.5,41.5,0,0,1,8.913,25.759Z"
              transform="translate(-83.973 -83.954)"
            />
          </svg>
        </div>
      </div>
      <div className="hidden md:flex-auto"></div>
      <div className="hidden md:flex-auto"></div>
      <div className="flex ml-20 md:ml-80 flex-col mt-6 md:mt-10 md:w-1/12 ">
        <h1 className="text-black flex text-3xl md:text-4xl mt-16 -ml-2  font-Raleway font-bold">
          menu
        </h1>
        <div className="text-black  flex flex-col text-1xl -ml-2 mt-2  font-Raleway">
          <Link href={{ pathname: "/", query: { s: 0 } }}>
            <p className="cursor-pointer z-50 hover:text-sblue">home</p>
          </Link>
          <Link href={{ pathname: "/", query: { s: 1 } }}>
            <p className="cursor-pointer z-50 hover:text-sblue">roadmap</p>
          </Link>
          <Link href="/mint">
            <p className="cursor-pointer z-50 hover:text-sblue">mint</p>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex-col ml-6 md:ml-14 mt-6 md:mt-10 pr-4">
        <h1 className="text-black text-3xl md:text-4xl mt-16  font-Raleway font-bold">
          socials
        </h1>
        <div className="text-black text-1xl mt-2  font-Raleway">
          <a
            target="_blank"
            href="https://twitter.com/SolanoidNFT"
            rel="noopener noreferrer"
          >
            <p className="cursor-pointer z-50 hover:text-sblue">twitter</p>
          </a>
          <a
            target="_blank"
            href="https://discord.gg/KTgpaGpn"
            rel="noopener noreferrer"
          >
            <p className="cursor-pointer z-50 hover:text-sblue">discord</p>
          </a>
        </div>
      </div>
      {/* <div className=" flex-auto "></div> */}
    </div>
  );
}

export default Footer;
