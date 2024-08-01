import {Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const roboto = Roboto({subsets: ["latin"], weight: ["400", "700"]});

export const metadata = {
	title: "TownKart",
	description: "A e-commerce place for local vendors",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} bg-white min-h-[100vh] overflow-x-hidden flex flex-col`}
			>
				<Navbar></Navbar>
				{children}
				<ToastContainer />
			</body>
		</html>
	);
}
