"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoNewspaper } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useProviderContext } from "@/context/Provider";

export default function Navbar() {
  const { favouriteNews } = useProviderContext();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "General", link: "/general" },
    { name: "Business", link: "/business" },
    { name: "Sports", link: "/sports" },
    { name: "Science", link: "/science" },
    { name: "Entertainment", link: "/entertainment" },
    { name: "Health", link: "/health" },
    { name: "Technology", link: "/technology" },
  ];

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/search/${search}`);
      setSearch("");
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-4 md:px-8 py-4 shadow-md bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold flex flex-row gap-2 items-center">
            <IoNewspaper className="text-blue-500 text-3xl" />
            <span>News</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="hover:text-blue-500 text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Favourite + Search */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/favourites" className="relative hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 text-sm text-white bg-red-500 px-1 rounded-full">
              {favouriteNews.length}
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Explore news..."
              className="px-3 py-1 bg-gray-100 w-40 md:w-60 rounded-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-600 px-4 py-1 rounded-md text-white hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block text-gray-700 hover:text-blue-500 text-center"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Favourites + Search */}
          <div className="flex justify-center">
            <Link href="/favourites" className="text-blue-600 flex items-center gap-1">
              Favourites ({favouriteNews.length})
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <input
              type="text"
              placeholder="Search news..."
              className="px-3 py-1 bg-gray-100 rounded-md w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-600 px-4 py-1 rounded-md text-white hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
