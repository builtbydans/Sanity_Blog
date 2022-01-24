import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full bg-[#ffc016] border-b-2 border-black">
      <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              className="w-44 object-contain cursor-pointer"
              src="https://links.papareact.com/yvf"
              alt="Medium-Logo"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          <h3 className="hidden md:flex">Our Story</h3>
          <h3 className="hidden md:flex">Membership</h3>
          <h3 className="hidden md:flex">Write</h3>
          <h3 className="hidden md:flex">Sign In</h3>
          <h3 className="border border-black text-white bg-black px-5 py-3 rounded-full">
            Get Started
          </h3>
        </div>
      </header>
    </div>
  );
}

export default Header;
