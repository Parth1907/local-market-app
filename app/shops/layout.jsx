import React from "react";
import Footer from "../ui/footer";

export default function ShopLayout({children}) {
	return (
		<div className="">
			<div>{children}</div>
			<Footer />
		</div>
	);
}
