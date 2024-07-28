import React from 'react'
import Navbar from "./navbar";
import Footer from "./HomeFooter";
export default function HomeLayout({children}) {
  return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
