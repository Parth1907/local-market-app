"use client";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {
	Button,
	Drawer,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import Logo from "next/image";
import Link from "next/link";
import {MdMenu} from "react-icons/md"; // Importing the Menu icon from react-icons
import {FaShoppingCart} from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUsername] = useState("");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const router = useRouter();

	const handleStorageChange = () => {
		const userString = localStorage.getItem("user");
		if (userString) {
			const user = JSON.parse(userString);
			setIsLoggedIn(true);
			setUsername(user.name);
		} else {
			setUsername("");
			setIsLoggedIn(false);
		}
	};

	useEffect(() => {
		handleStorageChange();
		window.addEventListener("storage", handleStorageChange);
		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("scheme");
		localStorage.removeItem("user");
		setUsername("");
		setIsLoggedIn(false);
		router.push("/login");
	};

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<div className="w-full py-4 px-4 lg:px-16 flex justify-between items-center transition-top duration-300 box-border bg-transparent fixed top-0 left-0 right-0 z-50">
			<div className="text-2xl font-bold">
				<a href="/dashboard">
					<Image src="logo.png" alt="Logo" className="h-20 w-auto" />
				</a>
			</div>
			<div className="flex lg:hidden">
				<button
					onClick={toggleDrawer}
					className="text-blue-500 p-0 m-0 border-none bg-transparent"
					style={{
						background: "transparent",
						border: "none",
						padding: 0,
						margin: 0,
					}}
				>
					<MdMenu style={{color: "blue", fontSize: "2rem"}} />{" "}
					{/* Using the Menu icon */}
				</button>
			</div>
			<div className="hidden lg:flex gap-4 items-center bg-blue-800 rounded-full py-3 px-6">
				<Link
					href="/dashboard/topseller"
					className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
				>
					Top Seller
				</Link>
				<Link
					href="/shops"
					className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
				>
					Shops
				</Link>
				<Link
					href="/cart"
					className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4 flex items-center gap-2"
				>
					<FaShoppingCart /> Cart
				</Link>
				{isLoggedIn ? (
					<Menu>
						<MenuHandler>
							<Button
								color="blue"
								className="rounded-full text-white hover:text-[#baebff] px-4"
							>{`Welcome, ${userName}`}</Button>
						</MenuHandler>
						<MenuList>
							<MenuItem>
								<Link
									href="/profile"
									className="no-underline transition-colors duration-300 px-4"
								>
									Edit Profile
								</Link>
							</MenuItem>
							<MenuItem>
								<div
									onClick={handleLogout}
									className="cursor-pointer transition-colors duration-300 px-4"
								>
									Logout
								</div>
							</MenuItem>
						</MenuList>
					</Menu>
				) : (
					<div className="flex gap-4">
						<a
							href="/register"
							className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
						>
							Sign Up
						</a>
						<a
							href="/login"
							className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
						>
							Sign In
						</a>
					</div>
				)}
			</div>
			<Drawer
				open={isDrawerOpen}
				onClose={toggleDrawer}
				className="lg:hidden"
				placement="right"
				overlayProps={{
					className: "bg-transparent",
				}}
				classNames={{
					root: "bg-transparent", // Making the drawer itself transparent
				}}
			>
				<div className="flex flex-col gap-4 p-4 bg-blue-800 h-full max-w-xs w-full">
					<Link
						href="/dashboard/topseller"
						className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
					>
						Top Seller
					</Link>
					<Link
						href="/shops"
						className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
					>
						Shops
					</Link>
					<Link
						href="/cart"
						className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
					>
						Cart
					</Link>
					{isLoggedIn ? (
						<>
							<div className="text-white no-underline transition-colors duration-300 px-4">{`Welcome, ${userName}`}</div>
							<Link
								href="/profile"
								className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
							>
								Edit Profile
							</Link>
							<div
								onClick={handleLogout}
								className="text-white cursor-pointer transition-colors duration-300 hover:text-[#baebff] px-4"
							>
								Logout
							</div>
						</>
					) : (
						<>
							<a
								href="/register"
								className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
							>
								Sign Up
							</a>
							<a
								href="/login"
								className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
							>
								Sign In
							</a>
						</>
					)}
				</div>
			</Drawer>
		</div>
	);
}
