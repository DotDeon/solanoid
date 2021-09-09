import Image from "next/image";
import headerimg from "../assets/header.jpg";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";
import logo from "../assets/logo.svg";

function Roadmap() {
  return (
    <div className="bg-black">
      <div className=" mt-32 md:mt-44 right-48 mr-48 ml-16 md:ml-[367px] bg-black">
        <h1 className="text-8xl font-Raleway text-white font-extrabold">
          roadmap
        </h1>
        {/* 2021 - Q4 */}
        <div className="flex flex-row mt-12 h-[246px] w-[900px] md:w-[1116px] border-2 border-white hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="h-full w-32 bg-white">
            <h1 className="-rotate-90 text-black text-6xl mt-24 mr-2  font-Raleway font-bold">
              2021
            </h1>
          </div>
          <div className="flex flex-col flex-grow">
            <h1 className="text-white font-Raleway text-5xl ml-10 mt-8 font-bold ">
              Q4
            </h1>
            <div className="items-center justify-between">
              <div className="flex flex-row ml-8 mt-2">
                <Image src={logo} height={30} width={30} />

                <p className="text-white ml-4 text-lg my-auto font-Raleway font-semibold">
                  huge marketing campaigns will take place, features on large
                  finance <br /> news outlits will be happening and we will be
                  expanding our team.
                </p>
              </div>
              <div className="flex flex-row ml-8 mt-4">
                <Image src={logo} height={30} width={30} />

                <p className="text-white ml-4 text-lg my-auto font-Raleway font-semibold">
                  official release of our 10,000 solanoids onto the Solana
                  ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2022 - Q1 */}
        <div className="flex flex-row mt-4  h-[246px] w-[900px] md:w-[1116px] border-2 border-white hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="h-full w-32 bg-white">
            <h1 className="-rotate-90 text-black text-6xl mt-24 mr-2  font-Raleway font-bold">
              2022
            </h1>
          </div>
          <div className="flex flex-col flex-grow">
            <h1 className="text-white font-Raleway text-5xl ml-10 mt-4 font-bold ">
              Q1
            </h1>
            <div className="items-center justify-center">
              <div className="flex  flex-row ml-8">
                <Image src={logo} height={30} width={30} />

                <p className="text-white ml-4 mt-6 text-lg my-auto font-Raleway font-semibold">
                  release of our Lost Sols token on the Solana ecosystem,
                  liquidity will <br /> be provided from a percent of minting
                  revenue, this token will be <br /> eligible to be airdropped
                  to all our holders
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2022 - Q2 */}
        <div className="flex flex-row mt-4  h-[246px] w-[900px] md:w-[1116px] border-2 border-white hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="h-full w-32 bg-white">
            <h1 className="-rotate-90 text-black text-6xl mt-24 mr-2  font-Raleway font-bold">
              2022
            </h1>
          </div>
          <div className="flex flex-col flex-grow">
            <h1 className="text-white font-Raleway text-5xl ml-10 mt-4 font-bold ">
              Q1
            </h1>
            <div className="items-center justify-center">
              <div className="flex  flex-row ml-8 -mt-4">
                <Image src={logo} height={30} width={30} />

                <p className="text-white ml-4 mt-6 text-lg my-auto font-Raleway font-semibold">
                  solanoid's official interactive experience with
                  microtransactions will
                  <br />
                  be released, revenue from this will be airdropped amongst
                  holders
                  <br />
                  in the form of Solana, we will have huge software development
                  <br />
                  company partnerships announced during this time.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2022 - Q2 */}
        <div className="flex flex-row mt-4  h-[246px] w-[900px] md:w-[1116px] border-2 border-white hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="h-full w-32 bg-white">
            <h1 className="-rotate-90 text-black text-6xl mt-24 mr-2  font-Raleway font-bold">
              2022
            </h1>
          </div>
          <div className="flex flex-col flex-grow">
            <h1 className="text-white font-Raleway text-5xl ml-10 mt-4 font-bold ">
              Q1
            </h1>
            <div className="items-center justify-center">
              <div className="flex  flex-row ml-8 -mt-4">
                <Image src={logo} height={30} width={30} />

                <p className="text-white ml-4 mt-10 text-lg my-auto font-Raleway font-semibold">
                  real world token prizes on our experience will be dispersed
                  around the
                  <br />
                  real globe, where users will be able to compete with other
                  users
                  <br />
                  on reaching the cash prize and claiming it first. This reward
                  will be in our
                  <br />
                  solanoid token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
