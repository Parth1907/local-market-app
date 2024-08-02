"use client";
import React, {useState, FormEvent} from "react";
import {useRouter} from "next/navigation";
import {Input} from "@material-tailwind/react";
import Footer from "../ui/footer";
import "../ui/style.css";
import {toast} from "react-toastify";

export default function Register() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			console.error("Passwords dont match");
			toast.error("Passwords dont match");
			return;
		}
		const response = await fetch("/api/user/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({name, email, password}),
		});
		const data = await response.json();
		console.log(data);

		if (response.ok) {
			toast.success(data.message);
			router.push("/login");
		} else {
			toast.error("Login Failed: ", data.error);
			console.error("Login failed: ", data);
		}
	};
	return (
		<>
			<div className="bg-white rounded-lg p-[40px] w-full max-w-[800px] mb-[74px] mt-[77px]">
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<h2 className="text-[24px] text-[#00379c] mb-[20px]">Sign Up</h2>
					{/* Vendor Sign Up */}
					{/* <input type="text" placeholder="Business Name" required />
                    <input type="text" placeholder="Contact Person" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <textarea placeholder="Business Description" rows={4}></textarea>
                    <input type="text" placeholder="Location" required />
                    <input type="text" placeholder="Payment Methods Accepted" required />
                    <input type="text" placeholder="Shipping Methods Available" required />
                    <input type="text" placeholder="Delivery Areas" required />
                    <button type="submit">Sign Up</button> */}

					<Input
						type="text"
						label="Name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="email"
						label="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						label="Password"
						required
					/>
					<Input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						label="Confirm Password"
						required
					/>
					<button
						type="submit"
						className="bg-[#00379c] text-white border-none p-3 text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#002a73]"
					>
						Sign Up
					</button>

					<p className="mt-5 text-center">
						Already have an account?{" "}
						<a
							href="/login"
							className="text-[#00379c] no-underline hover:underline"
						>
							Sign In
						</a>
					</p>
				</form>
			</div>
			<Footer />
		</>
	);
}
