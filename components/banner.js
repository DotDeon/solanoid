import Image from "next/image";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";

function Banner() {
  return (
    <div className="bg-black">
      <div className=" left-56 ml-4 mt-14 md:mt-[180px]">
        <h1 className="text-8xl font-Raleway text-white font-extrabold">
          solanoid
        </h1>
        <p className=" text-white font-Raleway text-2xl mt-4">
          The Solonoids are 10,000 handmade side-profile characters <br /> with
          lo-fi aesthetics deployed on the Solana ecosystem.
        </p>

        <div className="flex flex-row justify-start mt-8 ">
          <div className="cursor-pointer pr-4 md:pr-20 hover:scale-105 transform items-center transution duration-300 ease-out">
            {/* <div className="relative h-80 w-96">
              <Image src={red} layout="fill" />
            </div> */}
            <Image src={red} height={250} width={250} />
            <h3 className="text-2xl md:text-5xl text-center  font-bold font-Raleway mt-8 text-sred">
              handmade
            </h3>
          </div>
          <div className="cursor-pointer pr-4  md:pr-20 justify-center hover:scale-105 transform transution duration-300 ease-out">
            <Image src={yellow} height={250} width={250} />
            <h3 className="text-2xl md:text-5xl text-center  font-bold font-Raleway mt-8 text-syellow">
              scarce
            </h3>
          </div>
          <div className="cursor-pointer md:pr-20  hover:scale-105 justify-center transform transution duration-300 ease-out">
            <Image src={blue} height={250} width={250} />
            <h3 className="text-2xl md:text-5xl text-center  font-bold font-Raleway mt-8 text-sblue">
              lo-fi
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
