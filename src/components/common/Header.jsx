import { GraduationCapIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navList = ['Home', 'Alumni', 'Jobs', 'Donations', 'Events', 'Profile'];

  return (
    <div className="w-full h-14">
      <header className="px-4 w-full fixed lg:px-6 h-14 flex items-center bg-[#1b1b1b] text-[#FFFFFF]">
        <Link to="#" className="flex items-center justify-center">
          <GraduationCapIcon className="h-6 w-6" />
          <span className="sr-only">Alumni Association</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {navList.map((text, index) => (
            <NavLink
              key={index}
              to={`/${text.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 text-sm font-medium hover:underline underline-offset-4'
                  : 'text-sm font-medium hover:underline underline-offset-4'
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
