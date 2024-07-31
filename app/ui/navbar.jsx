"use client";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
} from "@material-tailwind/react";
import Logo from 'next/image'
import Link from "next/link";

export default function navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUsername] = useState("");
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

	return (
		// <div className="w-full bg-[#00379c] py-2.5 px-12 flex justify-between items-center transition-top duration-300 box-border">
		<div className="w-full py-4 px-16 flex justify-between items-center transition-top duration-300 box-border bg-transparent fixed top-0 left-0 right-0 z-50">
			{/* <div className="text-white text-2xl font-bold"> */}
			<div className="text-2xl font-bold">
				<a href="/dashboard">
					<img src="logo.png" alt="Logo" className="h-20 w-auto" />
				</a>
			</div>
			<div className="flex gap-4 items-center">
				<nav className="flex gap-4 items-center bg-blue-800 rounded-full py-3 px-6">
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
									<Link href="/profile" className="text-black no-underline">
										Edit Profile
									</Link>
								</MenuItem>
								<MenuItem>
									<div
										onClick={handleLogout}
										className="text-black cursor-pointer"
									>
										Logout
									</div>
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<div className="flex gap-4">
							<Link
								href="/register"
								className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
							>
								Sign Up
							</Link>
							<Link
								href="/login"
								className="text-white no-underline transition-colors duration-300 hover:text-[#baebff] px-4"
							>
								Sign In
							</Link>
						</div>
					)}
				</nav>
			</div>
		</div>
	);
}
