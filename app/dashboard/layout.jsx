import React from "react";
import Footer from "../ui/footer";

export default function DashboardLayout({children}) {
	return (
		<div>
			<div className="">{children}</div>
			<Footer />
		</div>
	);
}
