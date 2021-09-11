import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="flex flex-row bg-white w-screen h-1/3 mt-32">
      <div className="flex-1 bg-white">
        <div className="relative flex h-16 mt-20 w-16 ml-auto mr-auto cursor-pointer hover:animate-pulse">
          {/* <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          /> */}
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
      <div className="flex-1 "></div>
      <div className="flex-1 bg-sred">
        <h1 className="text-black flex text-4xl mt-16 ml-56  font-Raleway font-bold">
          menu
        </h1>
        <div className="text-black  flex flex-col text-1xl ml-56 mt-2  font-Raleway">
          <Link href={{ pathname: "/", query: { scroll: 0 } }}>
            <p className="cursor-pointer">home</p>
          </Link>
          <Link href={{ pathname: "/", query: { scroll: 200 } }}>
            <p className="cursor-pointer">roadmap</p>
          </Link>
          <Link href="/mint">
            <p className="cursor-pointer">mint</p>
          </Link>
        </div>
      </div>
      <div className="flex-1 ml-4 flex-col bg-white">
        <h1 className="text-black text-4xl mt-16  font-Raleway font-bold">
          socials
        </h1>
        <div className="text-black text-1xl mt-2  font-Raleway">
          <a
            target="_blank"
            href="https://twitter.com/SolanoidNFT"
            rel="noopener noreferrer"
          >
            <p>twitter</p>
          </a>
          <a
            target="_blank"
            href="https://discord.gg/KTgpaGpn"
            rel="noopener noreferrer"
          >
            <p>discord</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
