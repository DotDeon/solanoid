import Image from "next/image";
import logo from "../assets/logo.svg";

function ConnectWallet({ placeholder }) {
  return (
    <header className="flex justify-end mt-4 pt-2 mr-2 md:pr-6 w-screen top-0 z-50">
      <button className=" bg-gradient-to-b from-white to-gradblue hover:bg-blue-700 text-black font-bold mr-16 py-3 px-12 rounded-full">
        Connect Wallet
      </button>
    </header>
  );
}

export default ConnectWallet;
