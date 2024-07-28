import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function PagesLayout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <main>{children} </main>
        <Footer></Footer>
    </div>
  )
}
