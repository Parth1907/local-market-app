"use client";
import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {Card, Input, Button, Typography} from "@material-tailwind/react";
export default function EditItem() {
	const router = useRouter();
	const {shopId, itemId} = useParams();
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		const fetchItemDetails = async (e) => {
			const scheme = localStorage.getItem("scheme");
			const token = localStorage.getItem("token");
			try {
				const response = await fetch(
					`http://localhost:5001/api/item/${itemId}`,
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `${scheme} ${token}`,
						},
					}
				);
				const data = await response.json();
				setName(data.name);
				setCategory(data.category);
				setPrice(data.price);
				setDiscount(data.discount);
				setQuantity(data.quantity);
			} catch (error) {
				console.log(error);
			}
		};
		fetchItemDetails();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		const response = await fetch(`http://localhost:5001/api/item/${itemId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${scheme} ${token}`,
			},
			body: JSON.stringify({name, category, price, discount, quantity}),
		});
		const data = await response.json();
		if (response.status === 200) {
			console.log("Item updated successfully:", data);
			router.push(`/shops/${shopId}`);
		} else {
			console.error("Failed to update item", data);
		}
	};

	return (
		<div className="w-full flex justify-center mt-4">
			<Card color="transparent" shadow={false}>
				<Typography variant="h4" className="text-center mt-8 text-blue-800">
					Update Item
				</Typography>
				<form
					className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
					onSubmit={handleSubmit}
				>
					<div className="mb-1 flex flex-col gap-6">
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Item Name
						</Typography>
						<Input
							value={name}
							onChange={(e) => setName(e.target.value)}
							size="lg"
							placeholder="Eg. Bread"
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
							Price
						</Typography>
						<Input
							value={price}
							type="number"
							onChange={(e) => setPrice(e.target.value)}
							size="lg"
							placeholder="Eg. Rupees 50"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Discount
						</Typography>
						<Input
							value={discount}
							type="number"
							onChange={(e) => setDiscount(e.target.value)}
							size="lg"
							placeholder="Eg. 50%"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Quantity
						</Typography>
						<Input
							value={quantity}
							type="number"
							onChange={(e) => setQuantity(e.target.value)}
							size="lg"
							placeholder="Eg. 50"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
					</div>
					<Button className="mt-6 mb-12" fullWidth type="submit">
						Update Item
					</Button>
				</form>
			</Card>
		</div>
	);
}
