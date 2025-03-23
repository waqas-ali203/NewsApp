"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoNewspaper } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useProviderContext } from "@/context/Provider";

export default function Navbar() {
  const {favouriteNews} = useProviderContext();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "General",
      link: "/general",
    },
    {
      name: "Business",
      link: "/business",
    },
    {
      name: "Sports",
      link: "/sports",
    },
    {
      name: "Science",
      link: "/science",
    },
    {
      name: "Entertainment",
      link: "/entertainment",
    },
    {
      name: "Health",
      link: "/health",
    },
    {
      name: "Technology",
      link: "/technology",
    },
  ];

  const handleSearch = () => {
    router.push(`/search/${search}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-6 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold flex flex-row gap-3">
          <span className="text-blue-500 text-center text-3xl">
            <IoNewspaper />
          </span>{" "}
          News
        </h1>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
          {isMenuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>
      <div className="hidden md:flex space-x-6">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="hover:text-blue-400 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href={"/favourites"} className="hover:text-blue-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          ({favouriteNews.length})
        </Link>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 z-10">
          {navLinks.map((item) => (
            <Link
              key={item.name} 
              href={item.link}
              className="hover:text-blue-400 transition-colors"
              onClick={toggleMenu} 
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      <div className="flex items-center rounded-lg px-2">
        <input
          type="text"
          placeholder="Explore news..."
          className="px-3 py-1 bg-amber-200 w-40 md:w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-600 px-4 py-1 rounded-lg cursor-pointer text-white font-semibold hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
}