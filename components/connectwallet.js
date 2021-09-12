import Image from "next/image";
import logo from "../assets/logo.svg";

function ConnectWallet({ placeholder }) {
  return (
    <header className="flex justify-end mt-4 pt-2 md:pr-6 w-screen top-0">
      <button className=" bg-gradient-to-b from-white to-gradblue hover:bg-blue-700 text-black font-bold md:mr-16 px-8 py-3 md:px-12 rounded-full">
        Connect Wallet
      </button>
    </header>
  );
}

export default ConnectWallet;
