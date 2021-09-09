import Image from "next/image";
import {
  GlobeAltIcon,
  Icon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/dist/client/router";
import logo from "../assets/logo.svg";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [numberofGuests, setNumberofGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate),
      setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberofGuests,
      },
    });
  };

  return (
    <header className="sticky pt-6 p-5 bg-black top-0 z-50">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center bg-black justify-start pl-4 cursor-pointer my-auto hover:animate-pulse"
      >
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
    </header>
  );
}

export default Header;
