"use client";
import {useRouter} from "next/navigation";
import React, {useState, FormEvent} from "react";
import { Input } from "@material-tailwind/react";
import Footer from "../ui/footer";
import { toast } from "react-toastify";
import BASE_URL from "@/config";
// import "../ui/style.css"

export default function Login() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`${BASE_URL}/api/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email, password}),
		});
		const data = await response.json();
		console.log(data);

		if (response.ok) {
			toast.success("Login succesfull")
			localStorage.setItem("token", data.authorization.authToken);
			localStorage.setItem("scheme", data.authorization.scheme);
			localStorage.setItem("user", JSON.stringify(data.user));
			window.dispatchEvent(new Event('storage'));
			router.push("/dashboard");
		} else {
			toast.error("Login failed: ",data.error);
			console.error("Login failed: ", data);
		}
	};

	return (
		<div>
			<div className="flex justify-center mt-40 flex-grow">
				<div
					className="bg-white rounded-lg p-[40px] w-full max-w-[800px] text-center"
					// style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}}
				>
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<h2 className="text-[24px] text-[#00379c] mb-[20px]">Sign In</h2>
						<div className="p-2">
							<Input
								type="email"
								label="Email"
								size="lg"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="p-2 mb-5">
							<Input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								label="Password"
								required
							/>
						</div>
						<button
							type="submit"
							className="bg-[#00379c] text-white border-none p-3 text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#002a73]"
						>
							Sign In
						</button>
						<p className="mt-5 text-center">
							Dont have an account yet?
							<a
								href="/register"
								className="text-[#00379c] no-underline hover:underline"
							>
								Sign Up
							</a>
						</p>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
