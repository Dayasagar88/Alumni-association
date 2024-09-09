import React from 'react'

const Footer = () => {
  return (
    <footer className="flex relative bg-green-700 text-white flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs mx-auto">&copy; 2024 Alumni Association. All rights reserved.</p>
    <nav className="sm:ml-auto sm:absolute right-3 flex gap-4 sm:gap-6">
      <a href="#" className="text-xs hover:underline underline-offset-4">
        Privacy Policy
      </a>
      <a href="#" className="text-xs hover:underline underline-offset-4">
        Terms of Service
      </a>
    </nav>
  </footer>
  
      
  )
}

export default Footer