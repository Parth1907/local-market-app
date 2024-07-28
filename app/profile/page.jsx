"use client";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {Input} from "@material-tailwind/react";
import Footer from "../ui/footer";

export default function Profile() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [updatedPassword, setUpdatedPassword] = useState("");
	useEffect(() => {
		const userString = localStorage.getItem("user");
		if (userString) {
			const user = JSON.parse(userString);
			setEmail(user.email);
			setName(user.name)
		} else {
			console.log("User not found");
		}
	}, []);

	const handleName = async (e) => {
		e.preventDefault();
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		const response = await fetch("http://localhost:5001/api/user", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${scheme} ${token}`,
			},
			body: JSON.stringify({name}),
		});
		const data = await response.json();
		console.log(data);

		if (response.ok) {
			router.push("/dashboard");
		} else {
			console.error("Updation failed: ", data);
		}
	};
	const handleEmail = async (e) => {
		e.preventDefault();
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		console.log(email);
		const response = await fetch(
			"http://localhost:5001/api/user/update-email",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${scheme} ${token}`,
				},
				body: JSON.stringify({updatedEmail:email, password}),
			}
		);
		const data = await response.json();
		console.log(data);

		if (response.ok) {
			router.push("/dashboard");
		} else {
			console.error("Updation failed: ", data);
		}
	};

	const handlePassword = async (e) => {
		e.preventDefault();
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		const response = await fetch(
			"http://localhost:5001/api/user/update-password",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${scheme} ${token}`,
				},
				body: JSON.stringify({password, updatedPassword}),
			}
		);
		let data = null;
		if (response.status !== 204) {
			try {
				data = await response.json();
			} catch (error) {
				console.error("Failed to parse JSON:", error);
			}
		}

		if (response.ok) {
			router.push("/dashboard");
		} else {
			console.error("Updation failed: ", data);
		}
	};
	return (
		<>
			<div
				className="bg-white rounded-lg p-[40px] w-full max-w-[800px] my-6"
				style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}}
			>
				<h1 className="text-2xl font-bold text-center mb-6">Edit Profile</h1>
				<form className="flex flex-col gap-4" onSubmit={handleName}>
					<Input
						type="text"
						label="Name"
						size="lg"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						label="Date of Birth"
					/>
					<button
						type="submit"
						className="bg-[#00379c] text-white border-none p-3 text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#002a73]"
					>
						Update details
					</button>
				</form>
				<form className="flex flex-col gap-4 mt-4" onSubmit={handleEmail}>
					<Input
						type="email"
						label="Email"
						size="lg"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						label="Current Password"
						required
					/>
					<button
						type="submit"
						className="bg-[#00379c] text-white border-none p-3 text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#002a73]"
					>
						Update email
					</button>
				</form>
				<form className="flex flex-col gap-4 mt-4" onSubmit={handlePassword}>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						label="Current Password"
						required
					/>
					<Input
						type="password"
						value={updatedPassword}
						onChange={(e) => setUpdatedPassword(e.target.value)}
						label="Updated Password"
						required
					/>
					<button
						type="submit"
						className="bg-[#00379c] text-white border-none p-3 text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#002a73]"
					>
						Update password
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
}
