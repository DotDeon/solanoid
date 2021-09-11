import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="flex flex-row bg-white w-screen h-1/3 mt-32">
      <div className="flex-1 bg-white">
        <div className="relative flex h-16 mt-20 w-16 ml-auto mr-auto cursor-pointer hover:animate-pulse">
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex-1 bg-white"></div>
      <div className="flex-1 ">
        <h1 className="text-black text-4xl mt-16  font-Raleway font-bold">
          menu
        </h1>
        <div className="text-black text-1xl mt-2  font-Raleway">
          <Link href="/">
            <p className="cursor-pointer">home</p>
          </Link>
          <Link href="/">
            <p className="cursor-pointer">roadmap</p>
          </Link>
          <Link href="/mint">
            <p className="cursor-pointer">mint</p>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex-col bg-white">
        <h1 className="text-black text-4xl mt-16  font-Raleway font-bold">
          socials
        </h1>
        <div className="text-black text-1xl mt-2  font-Raleway">
          <p>twitter</p>
          <p>discord</p>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
