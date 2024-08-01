"use client";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {Card, Input, Button, Typography} from "@material-tailwind/react";
import { toast } from "react-toastify";

export default function CreateShop() {
	const router = useRouter();

	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("");
	const [coordinates, setCoordinates] = useState([0, 0]);
	// console.log(coordinates);
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const {latitude, longitude} = position.coords;
					setCoordinates([latitude, longitude]);
				},
				(error) => {
					console.error("Error obtaining location", error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		const response = await fetch("http://localhost:5001/api/shop", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${scheme} ${token}`,
			},
			body: JSON.stringify({name, location, category, coordinates}),
		});
		const data = await response.json();
		console.log(data);
		if (response.status === 201) {
			console.log("Shop created successfully:", data);
			toast.success("Shop created successfully");
			localStorage.setItem("token",data.authorization.authToken)
            router.push("/shops");
		} else {
			toast.error("Failed to create shop: ",data.error);
			console.error("Failed to create shop", data);
		}
	};
	return (
		<div className="w-full flex justify-center mt-4">
			<Card color="transparent" shadow={false}>
				<Typography
					variant="h4"
					color="blue-gray"
					className="text-center mt-8 text-blue-800"
				>
					Create Shop
				</Typography>
				<form
					className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
					onSubmit={handleSubmit}
				>
					<div className="mb-1 flex flex-col gap-6">
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Shop Name
						</Typography>
						<Input
							value={name}
							onChange={(e) => setName(e.target.value)}
							size="lg"
							placeholder="Eg. Fresh Mart"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Location
						</Typography>
						<Input
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							size="lg"
							placeholder="Eg. 456 Oak Avenue, Townsville, XYZ"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Category
						</Typography>
						<Input
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							size="lg"
							placeholder="Eg. Grocery"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Coordinates
						</Typography>
						<Input
							value={coordinates}
							size="lg"
							placeholder="Eg. 34.123456, -78.987654"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
							readOnly={true}
						/>
					</div>
					<Button className="mt-6" fullWidth type="submit">
						Create Shop
					</Button>
				</form>
			</Card>
		</div>
	);
}
