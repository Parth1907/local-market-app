import React from 'react'

export default function navbar() {
  return (
    //   <div className="header">
    //       <div className="logo">
    //           <a href="/dashboard">
    //               <img src="logo.png" alt="Logo" className="logo-img" />
    //           </a>
    //       </div>
    //       <nav>
    //           <a href="/dashboard/topseller">Top Seller</a>
    //           <a href="/register">Register</a>
    //           <a href="/login">Login</a>
    //       </nav>
    //   </div>
      <div className="w-full bg-[#00379c] py-2.5 px-12 flex justify-between items-center transition-top duration-300 box-border">
          <div className="text-white text-2xl font-bold">
              <a href="/dashboard">
                  <img src="logo.png" alt="Logo" className="h-10 w-auto" />
              </a>
          </div>
          <nav className="flex gap-[60px] ">
              <a href="/dashboard/topseller" className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]">Top Seller</a>
              <a href="/register" className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]">Register</a>
              <a href="/login" className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]">Login</a>
          </nav>
      </div>

  )
}
