import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-darkGreen text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:underline">Suffolk Willow</Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/aboutUs" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/contactUs" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:underline">Reviews</Link>
            </li>
            <li>
              <Link href="/instagram" className="hover:underline">Instagram</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;