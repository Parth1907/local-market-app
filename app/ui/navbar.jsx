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
            window.removeEventListener("storage",handleStorageChange);
        }
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
		<div className="w-full bg-[#00379c] py-2.5 px-12 flex justify-between items-center transition-top duration-300 box-border">
			<div className="text-white text-2xl font-bold">
				<a href="/dashboard">
					<img src="logo.png" alt="Logo" className="h-10 w-auto" />
				</a>
			</div>
			<nav className="flex gap-[40px] items-center ">
				<a
					href="/dashboard/topseller"
					className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]"
				>
					Top Seller
				</a>
				<a
					href="/shops"
					className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]"
				>
					Shops
				</a>
				{isLoggedIn ? (
					<>
						<Menu>
							<MenuHandler>
								<Button color="blue">{`Welcome, ${userName}`}</Button>
							</MenuHandler>
							<MenuList>
								<MenuItem>
									<a href="/profile">Edit Profile</a>
								</MenuItem>
								<MenuItem>
									<div onClick={handleLogout} className="">
										Logout
									</div>
								</MenuItem>
							</MenuList>
						</Menu>
					</>
				) : (
					<div className="flex gap-[40px]">
						<a
							href="/register"
							className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]"
						>
							Register
						</a>
						<a
							href="/login"
							className="text-white no-underline transition-colors duration-300 hover:text-[#baebff]"
						>
							Login
						</a>
					</div>
				)}
			</nav>
		</div>
	);
}
