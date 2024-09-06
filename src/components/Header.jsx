import { GraduationCapIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><header className="px-4 lg:px-6 h-14 flex items-center bg-[#FF9933] text-[#FFFFFF]">
    <Link to="#" className="flex items-center justify-center">
      <GraduationCapIcon className="h-6 w-6" />
      <span className="sr-only">Alumni Association</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
        Home
      </Link>
      <Link to="/alumni" className="text-sm font-medium hover:underline underline-offset-4">
        Alumni
      </Link>
      <Link to="/jobs" className="text-sm font-medium hover:underline underline-offset-4">
        Jobs
      </Link>
      <Link to="/donation" className="text-sm font-medium hover:underline underline-offset-4">
        Donations
      </Link>
      <Link to="/events" className="text-sm font-medium hover:underline underline-offset-4">
        Events
      </Link>
      <Link to="/profile" className="text-sm font-medium hover:underline underline-offset-4">
        Profile
      </Link>
    </nav>
  </header></div>
  )
}

export default Header