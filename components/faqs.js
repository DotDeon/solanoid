import Image from "next/image";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";
import logo from "../assets/logo.svg";

function Faqs() {
  return (
    <div className="bg-black pb-64">
      <div className=" mt-32 bg-black">
        <h1 className="text-6xl font-Raleway text-white font-extrabold">faq</h1>
        {/* faq 1 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-12 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-4 text-4xl font-Raleway font-semibold">
                    what wallets are supported?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-2 text-2xl font-Raleway">
                    Sollet, Phantom, SolFlare and Ledger wallets are supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq 2 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-6 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-4 text-4xl font-Raleway font-semibold">
                    what is the total supply?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-4 text-2xl font-Raleway">
                    a total of 10,000 unique Solanoid NFTs will be created.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq 3 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-6 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-4 text-4xl font-Raleway font-semibold">
                    how much does it cost to mint?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-4 text-2xl font-Raleway ">
                    1.5SOL + $0.01 of gas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2021 - Q4 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-6 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-4 text-4xl font-Raleway font-semibold">
                    when is the launch?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-4 text-2xl font-Raleway">
                    Friday 24th of September 2021 at 6pm UTC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2021 - Q4 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-6 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-4 text-4xl font-Raleway font-semibold">
                    will there be a presale?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-4 text-2xl font-Raleway ">
                    this will be a completely fairlaunch, therefore no presale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2021 - Q4 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-6 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-4 text-4xl font-Raleway font-semibold">
                    are there giveaways?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-4 text-2xl font-Raleway">
                    there are several giveaways on our Discord & Twitter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2021 - Q4 */}
        <div className="hover:scale-105 justify-center transform transution duration-300 ease-out">
          <div className="flex flex-row mt-6 h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                Q
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-4 md:mt-2">
                  <p className="text-white ml-2 mt-2 text-4xl    font-Raleway font-semibold">
                    what will minting funds go towards?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[90px] w-[900px] border border-white ">
            <div className=" h-full w-28 bg-white items-center justify-center">
              <h1 className="text-black text-6xl font-Raleway font-extrabold ml-10 mt-2">
                A
              </h1>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="items-center justify-between">
                <div className="flex flex-row ml-4 mt-6">
                  <p className="text-white ml-4 text-2xl font-Raleway">
                    they will be used to develop our interactive & pay our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
