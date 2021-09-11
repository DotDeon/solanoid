import Image from "next/image";
import logo from "../assets/logo.svg";

function Mint({ placeholder }) {
  return (
    <header className="sticky flex justify-center mt-16 w-screen top-0 z-50">
      <button className=" bg-gradient-to-b from-white to-gradblue hover:bg-blue-700 text-3xl text-black font-bold py-3 px-12 rounded-full">
        Mint
      </button>
    </header>
  );
}

export default Mint;
