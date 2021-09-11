import Image from "next/image";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";

function Banner() {
  return (
    <div className="bg-black">
      <div className="left-48 mt-8 md:mt-[220px]">
        <h1 className="text-9xl font-Raleway text-white font-extrabold">
          solanoid
        </h1>
        <p className=" text-white font-Raleway text-3xl font-bold mt-8">
          The Solonoids are 10,000 handmade side-profile characters <br /> with
          lo-fi aesthetics deployed on the Solana ecosystem.
        </p>

        <div className="flex flex-row justify-start mt-16 ">
          <div className="cursor-pointer pr-1 md:pr-10 hover:scale-105 transform items-center transution duration-300 ease-out">
            {/* <div className="relative h-80 w-96">
              <Image src={red} layout="fill" />
            </div> */}
            <Image src={red} height={304} width={304} />
            <h3 className="text-6xl text-center  font-bold font-Raleway mt-10 text-sred">
              handmade
            </h3>
          </div>
          <div className="cursor-pointer px-1  md:px-12 justify-center hover:scale-105 transform transution duration-300 ease-out">
            <Image src={yellow} height={304} width={304} />
            <h3 className="text-6xl text-center  font-bold font-Raleway mt-10 text-syellow">
              scarce
            </h3>
          </div>
          <div className="cursor-pointer  px-1 md:px-12  hover:scale-105 justify-center transform transution duration-300 ease-out">
            <Image src={blue} height={304} width={304} />
            <h3 className="text-6xl text-center  font-bold font-Raleway mt-10 text-sblue">
              lo-fi
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
