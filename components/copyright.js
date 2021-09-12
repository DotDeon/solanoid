import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";

function Copyright() {
  return (
    <div className="flex flex-row bg-white w-screen h-20 items-center justify-center">
      <p className="text-black font-semibold text-base md:text-1xl font-Raleway">
        Copyright @ 2021 Solanoid. All Rights Reserved.
      </p>
    </div>
  );
}

export default Copyright;
