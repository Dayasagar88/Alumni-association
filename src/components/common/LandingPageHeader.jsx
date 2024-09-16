import { GraduationCapIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPageHeader = () => {
  const navList = ["Home", "About", "Contact Us", "Login"];
  const [nav, setNav] = useState("Home");
  const navigate = useNavigate();

  const handleRoute = (text) => {
    setNav(text);
    if (text === "Contact Us") {
      navigate("/contact");
    } else if (text === "Home") {
      navigate("/");
    } else {
      navigate(`/${text.toLowerCase()}`);
    }
  };

  return (
    <header className="px-4 fixed w-full z-10 lg:px-6 h-14 flex items-center bg-green-700 text-black">
      <Link to="/" className="flex items-center justify-center">
        <GraduationCapIcon className="h-10 w-10 text-white" />
        <span className="sr-only">Alumni Association</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navList.map((text, index) => (
          <button
            key={index}
            onClick={() => handleRoute(text)}
            className={`${
              nav === text && "text-white font-bold"
            } text-sm font-medium hover:underline underline-offset-4`}
          >
            {text}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default LandingPageHeader;
