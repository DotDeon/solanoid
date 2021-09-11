import Image from "next/image";
import logo from "../assets/logo.svg";

function ConnectWallet({ placeholder }) {
  return (
    <header className="sticky flex justify-end pt-2 pr-6 w-screen top-0 z-50">
      <button class=" bg-gradient-to-b from-white to-gradblue hover:bg-blue-700 text-black font-bold mr-16 py-3 px-12 rounded-full">
        Connect Wallet
      </button>
    </header>
  );
}

export default ConnectWallet;
