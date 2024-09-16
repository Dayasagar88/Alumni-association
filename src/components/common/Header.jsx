import { GraduationCapIcon } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navList = ["Home", "Alumni", "Jobs", "Donations", "Events", "Profile"];

  return (
    <div className="w-full h-14">
      <header className="px-4 fixed w-full lg:px-6 h-14 flex items-center bg-green-700 text-black">
        <Link to="#" className="flex items-center justify-center">
          <GraduationCapIcon className="h-10 w-10 text-white" />
          <span className="sr-only">Alumni Association</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {navList.map((text, index) => (
            <NavLink
              key={index}
              to={`/${text.toLowerCase()}`}
              className={({ isActive }) => 
                isActive ? "text-white text-sm font-medium hover:underline underline-offset-4" : "text-sm font-medium hover:underline underline-offset-4"
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
